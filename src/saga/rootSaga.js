import {
    call,
    fork,
    take,
    put,
    takeLatest,
    delay,
    select,
    takeEvery,
} from "redux-saga/effects";
import {
    getCode,
    setAuthenticated,
    setCode,
    setError,
    setUrl,
    updateCode,
    getProjects,
    getProjectsSuccess,
    setIsChanging,
    setIsDeleting,
    deleteProjectSuccess,
} from "../actions/code";
import { setAuth, thisAxios } from "../common/axios/axios";
import { setLocal } from "../common/LocalStorage/setLocal";
import { getLocal } from "../common/LocalStorage/getLocal";
import { API, API_LOGIN, DELETE, GET, POST, PUT } from "../constant/axios";
import { GET_CODE, UPDATE_CODE } from "../constant/code";
import { CSS, HTML, JS } from "../constant/localStorage";
import { toast } from "react-toastify";
import { OPEN_MODAL, OPEN_MODAL_SUCCESS } from "../constant/modal";
import {
    closeModal,
    openModalSuccess,
    setProgress,
    setLoading,
} from "../actions/modal";
import {
    loginFailed,
    loginSuccess,
    logoutSuccess,
    setErrorLogin,
    setNameCode,
    GGLogin,
    ggLogin,
    fbLogin,
    setPicture,
    register,
} from "../actions/login";
import { LOGIN } from "../constant/login";
import { push } from "connected-react-router";
import { setLocation } from "../actions/tutorial";
function* handleTest() {
    try {
        const res = yield call(() => thisAxios(API, GET, "test"));
        const { html, css, js } = res.data.code;
        if (res.data.status) {
            // console.log("res:", res.data.code[0].html);
            // yield put(updateCode(html, css, js))
            setLocal(HTML, html);
            setLocal(CSS, css);
            setLocal(JS, js);
            // console.log(html, css, js);
        }
    } catch (err) {
        toast.error("You don't have permission to access this page");
        setAuth(null);
        localStorage.removeItem("access_token");
        yield put(push("/login"));
    }
    yield put(push("/test"));
}

function* handleCheckLogin() {
    const auth = localStorage["access_token"];
    if (auth) {
        setAuth(auth);
        try {
            const res = yield call(() =>
                thisAxios(API_LOGIN, POST, "check-login")
            );
            if (res.data.success) {
                yield put(loginSuccess(res.data.name));
                let picture;
                if (res.data.picture) {
                    picture = res.data.picture.toString();
                } else picture = null;
                yield put(setPicture.setPictureRequest(picture));
                console.log("PICTURE:", picture);
                setAuth(auth);
            }
        } catch (err) {
            setAuth(null);
            localStorage.removeItem("access_token");
            localStorage.removeItem("name");
            yield put(push("/login"));
        }
    }
}

function* handleGetCode() {
    while (true) {
        let {
            payload: { q },
        } = yield take(GET_CODE);
        const auth = localStorage["access_token"];
        yield put(closeModal());
        yield put(setError(null));
        yield put(setProgress(false));
        yield put(setLocation.setLocation(null));
        q = q.split("/")[1].trim();
        if (q === "code") {
            console.log("DAU TIEN:", q);
            if (auth) {
                setAuth(auth);
                try {
                    const res = yield call(() =>
                        thisAxios(API_LOGIN, POST, "check-login")
                    );
                    if (res.data.success) {
                        yield put(loginSuccess(res.data.name));
                        setAuth(auth);
                    }
                } catch (err) {
                    setAuth(null);
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("name");
                    yield put(push("/login"));
                }
            }
            console.log(auth);
            localStorage.removeItem("name");
            yield put(setNameCode(null));
            yield put(setUrl("code"));
            yield put(push("/code"));
        } else if (auth && q !== "code") {
            setAuth(auth);
            try {
                const res = yield call(() =>
                    thisAxios(API_LOGIN, POST, "check-login")
                );
                if (res.data.success) {
                    yield put(loginSuccess(res.data.name));
                    setAuth(auth);
                }
            } catch (err) {
                setAuth(null);
                localStorage.removeItem("access_token");
                yield put(push("/login"));
            }

            try {
                console.log("auth && q !== code");
                const res = yield call(() => thisAxios(API, GET, q));
                console.log("q:", q);
                const { html, css, js, name } = res.data.code;
                if (res.data.status && q !== "code") {
                    // setHtml(html);
                    // setCss(css);
                    // setJs(js);
                    setLocal(HTML, html);
                    setLocal(CSS, css);
                    setLocal(JS, js);
                    yield put(setCode({ html, css, js, name }));
                    console.log("res ne", res);
                    yield put(setNameCode(name));
                    localStorage.setItem("name", res.data.code.name);
                    // localStorage.setItem('access_token', JSON.stringify(auth));
                    yield put(setUrl(q));
                    yield put(push(`/${q}`));
                }
            } catch (err) {
                // toast.error("You don't have permission to access this page");
                setAuth(null);
                // localStorage.removeItem("access_token");
                // yield put(push("/code")); // 1
                yield put(push("/not-found/error")); // 2
            }
        } else if (!auth && q !== "code") {
            yield put(setUrl(q));
            yield put(push("/login"));
        } else if (q === "code") {
            yield put(push("/code"));
        } else {
            console.log("FINAl");
            setAuth(null);
            localStorage.removeItem("access_token");
            yield put(push("/login"));
        }
    }
}

function* handleRegister(action) {
    yield put(setErrorLogin(null));
    yield put(setProgress(true));
    yield delay(550);
    try {
        const res = yield call(() =>
            thisAxios(API_LOGIN, POST, "register", action.payload)
        );
        if (res.data.success) {
            console.log("HERE");
            yield put(loginSuccess(action.payload.name));
            localStorage.setItem("access_token", res.data.accessToken);
            yield delay(500);
            yield put(setProgress(false));
            yield put(push("/login"));
        } else {
            yield put(setProgress(false));
        }
    } catch (err) {
        if (err.response.data) {
            console.log(err.response.data);
            yield delay(500);
            yield put(setProgress(false));
            yield put(setErrorLogin(err.response.data.message));
            return;
        }
    }
    yield put(setProgress(false));
}

function* handleLogin(action) {
    yield put(setProgress(true));
    // console.log("Saga handleLogin run!");
    const account = action.payload;
    const url = yield select((state) => state.code.url);
    let res;
    const auth = localStorage["access_token"];
    console.log("CHECK LOGIN NEU DA CO AUTH:", auth);
    if (auth && url === "code") {
        setAuth(auth);
        console.log("EHE");
        yield delay(380);
        try {
            const res1 = yield call(() =>
                thisAxios(API_LOGIN, POST, "check-login")
            );
            if (res1.data.success) {
                yield put(loginSuccess(res1.data.name));

                localStorage.removeItem("name");
                yield put(push("/code"));
            }
        } catch (err) {
            setAuth(null);
            localStorage.removeItem("access_token");
            localStorage.removeItem("name");
            yield put(push("/login"));
        }
    } else if (account !== null) {
        yield delay(550);
        try {
            res = yield call(() =>
                thisAxios(API_LOGIN, POST, "login", account)
            );
            if (res.data.success) {
                const x = setAuth(res.data.accessToken);
                console.log("x:", x);
                localStorage.setItem("access_token", res.data.accessToken);
                console.log("Check 1:", res.data.accessToken);
                yield put(loginSuccess(res.data.name));

                if (url !== "code") {
                    try {
                        const res1 = yield call(() => thisAxios(API, GET, url));
                        console.log("res1", res1);
                        const { html, css, js, name } = res1.data.code;
                        if (res1.data.status) {
                            setLocal(HTML, html);
                            setLocal(CSS, css);
                            setLocal(JS, js);
                            yield put(setCode({ html, css, js }));
                            yield put(setNameCode(name));
                            localStorage.setItem("name", name);
                            yield put(push(`/${url}`));
                        }
                    } catch (err) {
                        yield put(setProgress(false));
                        yield put(push(`/code`));
                    }
                }

                yield put(setProgress(false));
                yield put(push(`/${url}`));
            }
        } catch (err) {
            if (err.response.data) {
                yield put(loginFailed(err.response.data));
                console.log(err.response.data);

                yield put(setProgress(false));
                return;
            }
        }
    } else {
        yield delay(370);
        yield put(setProgress(false));
    }
}

function* handleChange() {}

function* handleOpenModal(action) {
    yield delay(150);
    const access = localStorage.getItem("access_token");
    if (!access) {
        yield put(setError("Looks like you are not logged in!"));
        // yield put(openModalSuccess());
        yield delay(3000);
        // yield put(closeModal());
    } else {
        yield put(setError(null));
        // yield put(openModalSuccess());
        // yield fork(handleChange);
    }
    // yield put(openModalSuccess());
}

function* handleUpdate(action) {
    yield put(setProgress(true));
    yield put(setError(null));
    yield delay(300);
    const isAuthenticated = yield select((state) => state.auth.isAuthenticated);
    const name = action.payload;
    console.log("name:", name);
    const url = yield select((state) => state.code.url);
    const html = JSON.parse(getLocal(HTML));
    const css = JSON.parse(getLocal(CSS));
    const js = JSON.parse(getLocal(JS));
    const body = { html, css, js, name };
    if (isAuthenticated) {
        if (url === "code") {
            console.log("in here:", url);
            try {
                const res = yield call(() =>
                    thisAxios(`${API}`, POST, "create", body)
                );
                if (res.data.success) {
                    yield delay(300);
                    yield put(setProgress(false));
                    yield put(closeModal());
                    yield put(setNameCode(name));
                    yield put(getProjects());
                    yield put(setUrl(`${res.data.url}`));
                    yield put(push(`/${res.data.url}`));
                }
            } catch (err) {
                if (err.response.data) {
                    yield delay(300);

                    yield put(setError(err.response.data.message));
                    yield put(setProgress(false));
                    console.log("ERROR LA:", err.response.data);
                    return;
                } else console.log("in here:");
            }
        } else {
            console.log("in here:", url);
            try {
                console.log("body is:", body);
                const name = yield select((state) => state.auth.nameCode);
                const res = yield call(() =>
                    thisAxios(`${API}`, PUT, url, { html, css, js, name })
                );
                if (res.data.success) {
                    yield delay(300);
                    yield put(setProgress(false));
                    yield put(setUrl(url));
                    yield put(closeModal());
                    yield put(getProjects());
                    yield put(push(`/${url}`));
                }
            } catch (err) {
                if (err.response.data) {
                    console.log(err.response.data);
                    yield put(setError(err.response.data));
                    yield put(setProgress(false));
                    return;
                }
            }
        }
    }
}

function* handleDirect() {
    yield put(setNameCode(null));
    yield put(setUrl("code"));
    yield put(push("/code"));
}

function* handleLogout() {
    yield delay(300);
    setAuth(null);
    localStorage.removeItem("access_token");
    // window.FB.logout();
    yield put(logoutSuccess());
    yield put(push("/login"));
}

function* handleGetProjects(action) {
    const auth = localStorage["access_token"];
    yield setAuth(auth);
    if (auth) {
        setAuth(auth);
        try {
            const res = yield call(() =>
                thisAxios(API_LOGIN, POST, "check-login")
            );
            if (res.data.success) {
                yield put(loginSuccess(res.data.name));
                let picture;
                if (res.data.picture) {
                    picture = res.data.picture.toString();
                } else picture = null;
                yield put(setPicture.setPictureRequest(picture));
                console.log("PICTURE:", picture);
                setAuth(auth);
            }
            try {
                const res = yield call(() => thisAxios(API, GET, "projects"));
                yield put(getProjectsSuccess(res.data.projects));
            } catch (err) {
                setAuth(null);
                localStorage.removeItem("access_token");
                localStorage.removeItem("name");
                yield put(push("/login"));
            }
        } catch (err) {
            setAuth(null);
            localStorage.removeItem("access_token");
            localStorage.removeItem("name");
            yield put(push("/login"));
        }
    }
}

function* handleChangeName(action) {
    yield put(setError(null));
    yield put(setProgress(true));
    yield delay(300);
    const name = action.payload;
    const url = yield select((state) => state.code.url);
    console.log(name);
    if (!name) {
        yield delay(200);
        yield put(setProgress(false));
        yield put(setError("The name you want to update cannot be blank"));
        return;
    }

    setAuth(localStorage["access_token"]);
    const res = yield call(() =>
        thisAxios(API, PUT, `change-name/${url}`, { name })
    );
    yield delay(350);

    yield put(setIsChanging(false));
    yield put(setNameCode(res.data.code.name));
    yield put(setProgress(false));
    yield delay(150);
    yield put(setUrl(url));
    yield put(closeModal());
    yield put(push(`/${url}`));
}

function* handleDelete(action) {
    yield put(setError(null));
    yield put(setProgress(true));
    yield delay(700);
    const url = yield select((state) => state.code.url);
    try {
        const res = yield call(() => thisAxios(API, DELETE, url));
        console.log("DELETE:", res);
        yield put(getProjects());
        yield put(setIsDeleting(false));
        // yield put(deleteProjectSuccess(res.data.project));
        yield put(setProgress(false));
        yield put(setNameCode(null));
        yield put(setUrl(null));
        yield put(closeModal());
        setLocal(HTML, "");
        setLocal(CSS, "");
        setLocal(JS, "");
        yield put(push("/code"));

        return;
    } catch (err) {
        if (err.response.data) {
            // console.log(err.response.data);
            yield put(setError(err.response.data));
            yield put(setProgress(false));
            return;
        }
    }
}

function* handleGGLogin(action) {
    yield put(setProgress(true));
    yield delay(500);
    const {
        profileObj: { email, name, imageUrl: picture, googleId: gid },
        tokenId: access_token,
    } = action.payload;
    // console.log({ email, name, picture, gid, access_token });
    const x = { email, name, picture, gid, access_token };
    console.log({ x });
    setAuth(access_token);
    try {
        const res = yield call(() =>
            thisAxios(API_LOGIN, POST, "gg/verify", { gid })
        );
        if (res.data.success) {
            localStorage.setItem("access_token", res.data.accessToken);
            yield put(ggLogin.ggLoginSuccess(x));
            yield delay(500);
            yield put(setProgress(false));
            yield put(push("/code"));
        } else {
            localStorage.removeItem("access_token");
            yield delay(500);
            yield put(setProgress(false));
            yield put(push("/login"));
        }
    } catch (err) {
        if (err.response.data) {
            yield delay(500);
            yield put(setProgress(false));
            console.log(err.response.data);
        }
    }
    yield delay(500);
    yield put(setProgress(false));
}

function* handleFBLogin(action) {
    yield put(setProgress(true));
    yield delay(500);
    const {
        id: fid,
        name,
        email,
        picture: {
            data: { url: picture },
        },
    } = action.payload;

    console.log({ fid, name, email, picture });
    try {
        const body = { fid, name, email: email ? email : "", picture };
        const res = yield call(() =>
            thisAxios(API_LOGIN, POST, "fb/verify", body)
        );
        if (res.data.success) {
            console.log("FB LOGIN SUCCESS");
            localStorage.setItem("access_token", res.data.accessToken);
            yield put(fbLogin.fbLoginSuccess(body));
            yield delay(500);
            yield put(setProgress(false));
            yield put(push("/code"));
        } else {
            console.log("FB LOGIN FAILURE");
            localStorage.removeItem("access_token");
            yield put(setProgress(false));
            yield put(push("/login"));
        }
    } catch (err) {
        if (err.response.data) {
            yield put(setProgress(false));
            console.log(err.response.data);
        }
        yield put(setProgress(false));
    }
    yield put(setProgress(false));
}

function* rootSaga() {
    yield fork(handleGetCode);
    yield takeLatest("CHECK_LOGIN", handleCheckLogin);
    yield takeLatest(LOGIN, handleLogin);
    yield takeLatest(register.registerRequest().type, handleRegister);
    yield takeLatest(UPDATE_CODE, handleUpdate);
    yield takeLatest("DIRECT_TO_CODE", handleDirect);
    yield takeLatest("LOGOUT", handleLogout);
    yield takeLatest("GET_PROJECTS", handleGetProjects);
    yield takeLatest("CHANGE_NAME", handleChangeName);
    yield takeLatest("DELETE_PROJECT", handleDelete);
    yield takeLatest(ggLogin.ggLoginRequest().type, handleGGLogin);
    yield takeLatest(fbLogin.fbLoginRequest().type, handleFBLogin);
    yield takeLatest(OPEN_MODAL_SUCCESS, handleOpenModal);
}

export default rootSaga;
