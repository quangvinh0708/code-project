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
import {
    API,
    API_FORUM,
    API_LOGIN,
    API_USER,
    DELETE,
    GET,
    POST,
    PUT,
    SHARE_CODE,
} from "../constant/axios";
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
    setErrorStatus,
    recoverPassword,
    updateGID,
    updateFID,
    updateUID,
    setObjId,
    setAdmin,
} from "../actions/login";
import { LOGIN } from "../constant/login";
import { push } from "connected-react-router";
import { setLocation } from "../actions/tutorial";
import { checkLastPwd } from "../actions/login";
import { direct, verifyUrlRecover } from "../actions/direct";
import { getProfile, updateProfile } from "../actions/profile";
import { openModalShare } from "../actions/modalShareCode";
import { getShareCode } from "../actions/getShareCode";
import {
    ban,
    createAnswer,
    createThread,
    deleteAnswer,
    deleteThread,
    dislike,
    dislikeAnswer,
    getThreads,
    like,
    likeAnswer,
    setCircleProgress,
    setLoadingForum,
    setQuestion,
    setQuestionLoadingForum,
    setViewThread,
    unban,
    updateAnswer,
    updateThread,
    setBan,
} from "../actions/forum";

import { setFriends } from "../actions/messenger";

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
    const url = yield select((state) => state.code.url);
    console.log("Handle Check Login", url);

    if (!auth) {
        return;
    }

    if (auth) {
        setAuth(auth);
        try {
            const res = yield call(() =>
                thisAxios(API_LOGIN, POST, "check-login")
            );
            if (res.data.success) {
                console.log("CHECK LOGIN SAGA LINE 100");

                yield put(setFriends.setFriendsSuccess(res.data.friends));

                yield put(loginSuccess(res.data.name));
                yield put(setObjId.setObjIdSuccess(res.data.user.objId));
                if (res.data.user.isAdmin) {
                    yield put(setAdmin.setAdminSuccess(res.data.user.isAdmin));
                } else {
                    yield put(setAdmin.setAdminSuccess(false));
                }
                // yield put(setBan.setBanSuccess(res.data.user.isBanned));

                console.log("CheckLOGIN with objID", res);
                let picture;
                if (res.data.picture) {
                    picture = res.data.picture.toString();
                } else picture = null;
                yield put(setPicture.setPictureRequest(picture));
                if (res.data.user.fid) {
                    console.log("Go into if FID");
                    yield put(updateFID.updateFIDRequest(res.data.user.fid));
                } else if (res.data.user.gid) {
                    console.log("Go into if GID");

                    yield put(updateGID.updateGIDRequest(res.data.user.gid));
                } else {
                    yield put(updateUID.updateUIDRequest(res.data.user.objId));
                }
                console.log("PICTURE:", picture);

                setAuth(auth);
                // yield put(push(`/${url}`));
                if (url !== "code") {
                    try {
                        const res1 = yield call(() => thisAxios(API, GET, url));
                        console.log("res1", res1);
                        const { html, css, js, name } = res1.data.code;
                        if (res1.data.status) {
                            yield put(push(`/${url}`));
                        }
                    } catch (err) {
                        yield put(setProgress(false));
                        yield put(push(`/code`));
                        return;
                    }
                }
            }
        } catch (err) {
            console.log("LINE 129 CHECK LOGIN SAGA", err);
            yield put(setProgress(false));
            setAuth(null);
            localStorage.removeItem("access_token");
            localStorage.removeItem("name");
            yield put(push("/login"));
        }
    } else {
        yield put(setProgress(false));
        console.log("Line 136: Else not auth");
        yield put(push("/login"));
    }
}

function* handleGetCode() {
    while (true) {
        let {
            payload: { q },
        } = yield take(GET_CODE);
        console.log("this is q in handleGetCodeSaga:", q);
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
                        console.log("Get Code with ObjId", res);
                        yield put(loginSuccess(res.data.name));
                        // yield put(
                        //     setObjId.setObjIdSuccess(res.data.user.objId)
                        // );
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

            //! BELOW
            yield put(push("/code"));
        } else if (auth && q !== "code") {
            console.log("auth && q !== code");

            setAuth(auth);
            try {
                const res = yield call(() =>
                    thisAxios(API_LOGIN, POST, "check-login")
                );
                if (res.data.success) {
                    console.log("auth && q !== code success");

                    yield put(loginSuccess(res.data.name));
                    setAuth(auth);
                }
            } catch (err) {
                console.log("auth && q !== code failed");

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

                    //! RECOMMEND IN THIS BELOW
                    yield put(push(`/${q}`));
                    return;
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
            // yield put(loginSuccess(action.payload.name));
            // localStorage.setItem("access_token", res.data.accessToken);
            yield delay(500);
            yield put(setProgress(false));
            // yield put(push("/login"));
            yield put(setErrorStatus.setErrorStatusRequest(false));
            yield put(setErrorLogin(res.data.message));
            // yield fork(handleGetCode);
            return;
        } else {
            yield put(setProgress(false));
        }
    } catch (err) {
        if (err.response.data) {
            yield put(setErrorStatus.setErrorStatusRequest(true));
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

                //!
                yield put(setObjId.setObjIdSuccess(res1.data.user.objId));
                if (res1.data.user.isAdmin) {
                    yield put(setAdmin.setAdminSuccess(res1.data.user.isAdmin));
                } else {
                    yield put(setAdmin.setAdminSuccess(false));
                }

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

                console.log(`res at login with account`, res);
                yield put(setObjId.setObjIdSuccess(res.data.objId));
                yield put(setAdmin.setAdminSuccess(false));

                console.log("Line 314 Login successfully and have code in url");
                if (url !== "code") {
                    try {
                        const res1 = yield call(() => thisAxios(API, GET, url));
                        console.log("res1", res1);
                        const { html, css, js, name } = res1.data.code;
                        if (res1.data.status) {
                            console.log(
                                "Line 321 Login successfully and have code in url"
                            );
                            setLocal(HTML, html);
                            setLocal(CSS, css);
                            setLocal(JS, js);
                            yield put(setCode({ html, css, js }));
                            yield put(setNameCode(name));
                            localStorage.setItem("name", name);
                            yield put(setProgress(false));
                            yield put(push(`/${url}`));
                        }
                    } catch (err) {
                        yield put(setProgress(false));
                        yield put(push(`/code`));
                        return;
                    }
                }

                // yield put(setProgress(false));
                // yield put(push(`/${url}`));
            }
        } catch (err) {
            if (err.response.data) {
                console.log("Line 346 Error", err);
                yield put(loginFailed(err.response.data));
                console.log(err.response.data);

                yield put(setProgress(false));
                return;
            }
            console.log("Line 353 Error", err);
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
    if (!html && !css && !js) {
        yield delay(500);

        yield put(setError("Write something before save"));
        yield put(setProgress(false));
    } else if (isAuthenticated) {
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
                    //! BELOW
                    // yield put(push(`/${url}`));
                }
            } catch (err) {
                if (err.response.data) {
                    console.log(err.response.data);
                    yield put(setError(err.response.data.message));
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
    // const objId = yield select((state) => state.auth.account.objId);

    // const res = yield call(() =>
    //     thisAxios(API_LOGIN, POST, "logout", { objId })
    // );
    // yield put(setFriends.setFriendsSuccess(res.data.friends));
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
        yield put(setUrl("code"));
        yield put(closeModal());

        // setLocal(HTML, "");
        // setLocal(CSS, "");
        // setLocal(JS, "");
        // delete all data project after delete
        // yield put(
        //     setCode({ html: "", css: "", js: "", nameCode: null, q: "code" })
        // );
        // yield put(setUrl("code"));

        // ! BELOW
        // window.location.href = "http://localhost:3000/code";
        yield put(push("/code"));

        return;
    } catch (err) {
        if (err.response.data) {
            // console.log(err.response.data);
            yield put(setError(err.response.data.message));
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
            yield put(setObjId.setObjIdSuccess(res.data.objId));
            if (res.data.isAdmin) {
                yield put(setAdmin.setAdminSuccess(res.data.isAdmin));
            } else {
                yield put(setAdmin.setAdminSuccess(false));
            }

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
            yield put(setObjId.setObjIdSuccess(res.data.objId));
            yield put(setAdmin.setAdminSuccess(false));

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

function* handleCheckLastPwd(action) {
    yield put(setProgress(true));
    yield delay(500);
    const { email, recentPassword: password } = action.payload;
    console.log({ email, password });
    try {
        const res = yield call(() =>
            thisAxios(API_LOGIN, POST, "verify/last-pwd", { email, password })
        );
        if (res.data.success && res.data.accessToken) {
            localStorage.setItem("access_token", res.data.accessToken);
            yield delay(500);
            yield put(setProgress(false));
            yield put(loginSuccess(res.data.name));
            yield put(push("/login"));
        } else {
            yield delay(500);
            yield put(setProgress(false));
            yield put(setErrorStatus.setErrorStatusRequest(false));
            yield put(setErrorLogin(res.data.message));
        }
    } catch (err) {
        yield delay(500);
        yield put(setProgress(false));
        if (err.response.data) {
            console.log(err);
            yield put(setErrorStatus.setErrorStatusRequest(true));
            yield put(setErrorLogin(err.response.data.message));
        }
    }
}

function* handleRecoverPassword(action) {
    yield put(setProgress(true));
    yield delay(500);
    const { newPassword, confirmPassword, url } = action.payload;
    const body = { newPassword, confirmPassword, url };
    try {
        const res = yield call(() => thisAxios(API_LOGIN, POST, url, body));
        if (res.data.success && res.data.accessToken) {
            yield delay(500);
            yield put(setProgress(false));
            yield put(setErrorStatus.setErrorStatusRequest(false));
            yield put(setErrorLogin(res.data.message));
            yield delay(2900);
            yield put(setProgress(true));
            yield put(direct.directSuccess(5));
            yield delay(5200);
            localStorage.setItem("access_token", res.data.accessToken);
            yield put(loginSuccess(res.data.name));
            yield put(push("/login"));

            console.log(body);
        }
    } catch (err) {
        if (err.response.data) {
            yield delay(500);
            console.log(err.response.data);
            yield put(setProgress(false));
            yield put(setErrorStatus.setErrorStatusRequest(true));
            yield put(setErrorLogin(err.response.data.message));
            yield delay(2900);
            if (err.response.data.redirect) {
                yield put(setProgress(true));
                yield put(direct.directSuccess(5));
                yield delay(5200);
                yield put(setProgress(false));
                yield put(direct.directFailure(false));
                yield put(setErrorLogin(null));
                yield put(push("/identify/user"));
            }
        }
    }
}

function* handleVerifyUrl(action) {
    const { url } = action.payload;
    console.log("Url after dispatch:", url);
    yield put(setProgress(true));
    // yield put(
    //     verifyUrlRecover.verifyUrlRecoverSuccess({
    //         isVerify: true,
    //         isWaiting: false,
    //         message: "We're setting for you! Please wait in a second",
    //     })
    // );
    yield delay(500);
    try {
        const res = yield call(() =>
            thisAxios(API_LOGIN, POST, `check/${url}`)
        );
        if (res.data.success) {
            yield delay(4000);
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: true,
                    isWaiting: false,
                    message: res.data.message,
                })
            );
            yield put(direct.directSuccess(""));
            yield delay(2900);
            yield put(direct.directFailure(false));
            yield put(direct.directSuccess(5));
            yield delay(5700);
            yield put(setProgress(false));
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: false,
                    isWaiting: false,
                    message: "",
                })
            );
        }
    } catch (err) {
        if (err.response.data && err.response.data.redirect) {
            yield delay(4000);
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: true,
                    isWaiting: false,
                    message: "Please wait! We're setting for you...",
                })
            );
            yield put(direct.directSuccess(""));
            yield delay(4000);
            yield put(direct.directFailure(false));
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: true,
                    isWaiting: false,
                    // message: err.response.data.message,
                    message:
                        "This session has expired or it might be used! Auto return in 5 seconds",
                })
            );
            yield delay(4000);
            yield put(direct.directSuccess(5));
            yield delay(5700);
            yield put(setProgress(false));
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: true,
                    isWaiting: false,
                    message: "",
                })
            );
            yield put(push("/identify/user"));
        } else {
            yield delay(4000);
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: true,
                    isWaiting: false,
                    message: "Please wait! We're setting for you...",
                })
            );
            yield put(direct.directSuccess(""));
            yield delay(4000);
            yield put(direct.directFailure(false));
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: true,
                    isWaiting: false,
                    // message: err.response.data.message,
                    message:
                        "This session has expired or it might be used! Auto return in 5 seconds",
                })
            );
            yield delay(4000);
            yield put(direct.directSuccess(5));
            yield delay(5700);
            yield put(setProgress(false));
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: true,
                    isWaiting: false,
                    message: "",
                })
            );
            yield put(push("/identify/user"));
        }
    }
}

function* handleGetProfile(action) {
    const url = action.payload.url;
    const auth = localStorage["access_token"];
    yield put(setProgress(true));

    try {
        setAuth(auth);
        const res = yield call(() =>
            thisAxios(API_USER, GET, `profile/${url}}`)
        );
        if (res.data.success) {
            console.log("CHECK handleGetPRofile LINE 819");

            console.log(res);
            yield delay(2000);
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: true,
                    isWaiting: false,
                    message: res.data.message,
                })
            );
            yield put(direct.directSuccess(""));
            yield delay(2000);
            yield put(direct.directFailure(false));
            yield put(direct.directSuccess(2));
            yield delay(2100);
            yield put(setProgress(false));
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: false,
                    isWaiting: false,
                    message: "",
                })
            );
            console.log("CHECK handleGetPRofile LINE 843");

            if (res.data.user.password) {
                res.data.user.password = res.data.user.password.slice(0, 18);
            } else
                res.data.user.password =
                    Math.random() * 1000000000 + res.data.user.objId;
            yield put(updateProfile.updateProfileSuccess(res.data.user));
            return;
        }
    } catch (err) {
        console.log("error lan 1", err);
        yield delay(4000);
        yield put(
            verifyUrlRecover.verifyUrlRecoverSuccess({
                isVerify: true,
                isWaiting: false,
                message: "Please wait! We're setting for you...",
            })
        );
        yield put(direct.directSuccess(""));
        yield delay(4000);
        yield put(direct.directFailure(false));
        console.log("CHECK handleGetPRofile LINE 859");

        yield put(
            verifyUrlRecover.verifyUrlRecoverSuccess({
                isVerify: true,
                isWaiting: false,
                // message: err.response.data.message,
                message: "Sorry! Looks like something went wrong! Return in 5s",
            })
        );
        yield delay(4000);
        yield put(direct.directSuccess(5));
        yield delay(5700);
        yield put(setProgress(false));
        yield put(
            verifyUrlRecover.verifyUrlRecoverSuccess({
                isVerify: true,
                isWaiting: false,
                message: "",
            })
        );
        console.log("Eror lan 2", err);
    }
    localStorage.setItem("access_token", "");
    yield put(loginFailed(""));
    yield put(push("/login"));
}

function* handleUpdateProfile(action) {
    const {
        account: { name, job, country, phone, picture, fid, gid },
        url,
    } = action.payload;
    console.log("FID la: ", fid);
    console.log("GID la: ", gid);
    const auth = localStorage["access_token"];
    setAuth(auth);
    yield put(setProgress(true));
    yield delay(1500);
    try {
        const res = yield call(() =>
            thisAxios(API_USER, POST, `profile/${url}`, {
                name,
                job,
                picture,
                country,
                phone,
                fid,
                gid,
            })
        );
        if (res.data.success) {
            yield delay(250);
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: true,
                    isWaiting: false,
                    message: res.data.message,
                })
            );
            yield put(direct.directSuccess(""));
            yield delay(2000);
            yield put(direct.directFailure(false));
            yield put(direct.directSuccess(2));
            yield delay(2100);
            yield put(setProgress(false));
            yield put(updateProfile.updateProfileSuccess(res.data.user));
            yield put(loginSuccess(name));
            yield put(setPicture.setPictureRequest(res.data.user.picture));
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: false,
                    isWaiting: false,
                    message: "",
                })
            );
            yield put(push(`/users/profile/${url}`));
        }
    } catch (err) {
        console.log(err);
        yield delay(1500);
        yield put(
            verifyUrlRecover.verifyUrlRecoverSuccess({
                isVerify: true,
                isWaiting: false,
                message: "Looks like something went wrong...",
            })
        );
        yield put(direct.directSuccess(""));
        yield delay(1500);
        yield put(direct.directFailure(false));

        yield put(
            verifyUrlRecover.verifyUrlRecoverSuccess({
                isVerify: true,
                isWaiting: false,
                // message: err.response.data.message,
                message:
                    "Your name should be long than 5 characters! Auto Return in 5s",
            })
        );
        yield delay(2000);
        yield put(direct.directSuccess(5));
        yield delay(5200);
        yield put(setProgress(false));
        yield put(
            verifyUrlRecover.verifyUrlRecoverSuccess({
                isVerify: false,
                isWaiting: false,
                message: "",
            })
        );
        // yield put(push(`/code`));
        yield put(push(`/users/profile/${url}`));
    }
    yield put(push(`/users/profile/${url}`));
}

function* handleOpenModalShare(action) {
    const url = action.payload;
    try {
        const res = yield call(() => thisAxios(API, POST, `share/${url}`));
        if (res.data.success) {
            yield delay(2200);
            console.log("Res successfully", res);
            yield put(
                openModalShare.openModalShareSuccess(
                    `${SHARE_CODE}/${res.data.endLink}`
                )
            );
            return;
        }
    } catch (err) {
        yield put(openModalShare.openModalShareFailure());
        console.log(err);
    }
}

function* handleGetShareCode(action) {
    yield put(setProgress(true));
    yield delay(1500);
    const id = action.payload;
    try {
        const res = yield call(() => thisAxios(API, POST, `cs/share/${id}`));
        if (res.data.success) {
            const { html, css, js } = res.data.code;
            console.log({ html, css, js });
            yield delay(1500);
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: true,
                    isWaiting: false,
                    message: res.data.message,
                })
            );
            yield put(direct.directSuccess(""));
            yield delay(1000);
            yield put(direct.directFailure(false));
            yield put(direct.directSuccess(2));
            yield delay(2100);
            yield put(setProgress(false));
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: false,
                    isWaiting: false,
                    message: "",
                })
            );
            setLocal(HTML, html);
            setLocal(CSS, css);
            setLocal(JS, js);
            yield put(setCode({ html, css, js }));
            yield put(getShareCode.getShareCodeSuccess());

            yield put(push("/code"));
            return;
            // yield put(push(`/users/profile/${url}`));
        }
    } catch (err) {
        if (err.response.data) {
            console.log("err data", err);

            yield delay(1500);
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: true,
                    isWaiting: false,
                    message: err.response.data.message,
                })
            );
            yield put(direct.directSuccess(""));
            yield delay(2000);
            yield put(direct.directFailure(false));
            yield put(direct.directSuccess(2));
            yield delay(2100);
            yield put(setProgress(false));
            yield put(
                verifyUrlRecover.verifyUrlRecoverSuccess({
                    isVerify: false,
                    isWaiting: false,
                    message: "",
                })
            );
            yield put(getShareCode.getShareCodeFailure());
            yield put(push("/code"));
            return;
        }
        // else
        console.log("err except", err);
        yield delay(1500);
        yield put(
            verifyUrlRecover.verifyUrlRecoverSuccess({
                isVerify: true,
                isWaiting: false,
                message: err.response.data.message,
            })
        );
        yield put(direct.directSuccess(""));
        yield delay(2000);
        yield put(direct.directFailure(false));
        yield put(direct.directSuccess(2));
        yield delay(2100);
        yield put(setProgress(false));
        yield put(
            verifyUrlRecover.verifyUrlRecoverSuccess({
                isVerify: false,
                isWaiting: false,
                message: "",
            })
        );
        yield put(getShareCode.getShareCodeFailure());
        yield put(push("/code"));
        return;
    }
}

function* handleCreateThread(action) {
    const { title, content } = action.payload;
    // yield put(setProgress(true));
    yield put(setCircleProgress.setCircleProgressSuccess(true));
    yield delay(1200);

    if (!title || title.toString().trim().length <= 27) {
        yield put(
            createThread.createThreadFailure(
                "Title must be longer than 27 characters"
            )
        );
        // yield put(setProgress(false));
        yield put(setCircleProgress.setCircleProgressSuccess(false));

        return;
    }
    if (!content || content.toString().trim().length <= 37) {
        yield put(
            createThread.createThreadFailure(
                "Your question must be longer than 37 characters"
            )
        );
        yield put(setCircleProgress.setCircleProgressSuccess(false));

        // yield put(setProgress(false));

        return;
    }
    try {
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "create-thread", { title, content })
        );
        if (res.data.success) {
            yield put(createThread.createThreadSuccess(res.data.thread));
            yield put(setCircleProgress.setCircleProgressSuccess(false));
            // yield put(setProgress(false));
        }
    } catch (err) {
        if (err.response.data) {
            console.log(err.response.response);
            yield put(setCircleProgress.setCircleProgressSuccess(false));

            yield delay(1200);
            yield put(
                createThread.createThreadFailure(err.response.data.message)
            );
            // yield put(setProgress(false));
            return;
        }
    }
}
function ChangeToSlug(title) {
    var slug;

    //Lấy text từ thẻ input title

    //Đổi chữ hoa thành chữ thường
    slug = title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    return slug;
}
function* handleGetThreads(action) {
    const { match } = action.payload;
    console.log("match", match);
    yield put(setProgress(true));
    yield put(setLoadingForum.setLoadingForumRequest());
    try {
        const res = yield call(() => thisAxios(API_FORUM, GET, ""));
        if (res.data.success) {
            const { threads, answers, likes, dislikes } = res.data;
            // yield put(
            //     getThreads.getThreadsSuccess({
            //         threads,
            //         answers,
            //     })
            // );

            // yield put(setLoadingForum.setLoadingForumSuccess(false));
            // yield put(
            //     setQuestionLoadingForum.setQuestionLoadingForumSuccess(false)
            // );

            if (match !== null) {
                console.log("threads", threads);
                const find = threads.find(
                    (thread) =>
                        `/questions/${ChangeToSlug(match.params.title)}/${
                            match.params.id
                        }` ===
                        `/questions/${ChangeToSlug(thread.title)}/${thread._id}`
                );

                if (find) {
                    yield put(setQuestion.setQuestionSuccess(find));
                    yield put(setLoadingForum.setLoadingForumSuccess(false));
                    yield put(
                        setQuestionLoadingForum.setQuestionLoadingForumSuccess(
                            false
                        )
                    );
                    yield put(
                        getThreads.getThreadsSuccess({
                            threads,
                            answers,
                            likes,
                            dislikes,
                        })
                    );

                    yield put(setProgress(false));
                    return;
                } else {
                    yield put(setProgress(false));
                    yield put(push("/not-found/error"));
                    return;
                }
            }
            // yield put(
            //     verifyUrlRecover.verifyUrlRecoverSuccess({
            //         isVerify: true,
            //         isWaiting: false,
            //         message: "Please wait! Almost ready...",
            //     })
            // );
            // yield put(direct.directSuccess(""));
            // yield delay(700);
            // yield put(direct.directFailure(false));

            yield put(setLoadingForum.setLoadingForumSuccess(false));

            yield put(
                getThreads.getThreadsSuccess({
                    threads,
                    answers,
                    likes,
                    dislikes,
                })
            );
            // yield put(direct.directSuccess(0));
            yield put(setProgress(false));
            // yield put(
            //     verifyUrlRecover.verifyUrlRecoverSuccess({
            //         isVerify: false,
            //         isWaiting: false,
            //         message: "",
            //     })
            // );
            // yield put(setProgress(false));
        }
    } catch (err) {
        if (err.response.data) {
            console.log(err.response.data);
            yield put(getThreads.getThreadsFailure());
            yield put(setLoadingForum.setLoadingForumSuccess(false));

            return;
        }
        console.log("err", err);
    }
}

function* handleCreateAnswer(action) {
    const { id: questionId, text: content } = action.payload;
    yield put(setCircleProgress.setCircleProgressSuccess(true));
    yield delay(1200);
    if (!content || content.toString().trim().length <= 37) {
        yield put(
            createAnswer.createAnswerFailure(
                "Your answer must be longer than 37 characters"
            )
        );
        yield put(setCircleProgress.setCircleProgressSuccess(false));

        return;
    }
    try {
        setAuth(localStorage["access_token"]);
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "create-answer", { questionId, content })
        );
        if (res.data.success) {
            yield put(createAnswer.createAnswerSuccess(res.data.answer));
            console.log(res.data.answer);
            yield put(setCircleProgress.setCircleProgressSuccess(false));
        }
    } catch (err) {
        if (err.response.data) {
            console.log("err", err);
            yield put(
                createAnswer.createAnswerFailure(err.response.data.message)
            );
            yield put(setCircleProgress.setCircleProgressSuccess(false));

            return;
        }
        console.log(err);
    }
}

function* handleUpdateAnswer(action) {
    const { currentAnswer, text: content } = action.payload;
    yield put(setCircleProgress.setCircleProgressSuccess(true));
    yield delay(1200);
    if (!content || content.toString().trim().length <= 37) {
        yield put(
            updateAnswer.updateAnswerFailure(
                "Your answer must be longer than 37 characters"
            )
        );
        yield put(setCircleProgress.setCircleProgressSuccess(false));
        // yield delay(2000);
        // yield put(push(`/#section${currentAnswer._id}`));
        return;
    }
    try {
        setAuth(localStorage["access_token"]);
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "update-answer", {
                currentAnswer,
                content,
            })
        );
        console.log("res 1378", res);
        if (res.data.success) {
            yield put(updateAnswer.updateAnswerSuccess(res.data.answerUpdated));
            console.log("res.data.answerUpdated", res.data.answerUpdated);
            yield put(setCircleProgress.setCircleProgressSuccess(false));
        }
        return;
    } catch (err) {
        if (err.response.data) {
            console.log("err", err);
            yield put(
                updateAnswer.updateAnswerFailure(err.response.data.message)
            );
            yield put(setCircleProgress.setCircleProgressSuccess(false));
            return;
        }
        // yield put(setCircleProgress.setCircleProgressSuccess(false));
        // console.log("err", err);
    }
}

function* handleDeleteAnswer(action) {
    const { currentAnswer } = action.payload;
    yield put(setProgress(true));
    yield delay(1200);
    try {
        setAuth(localStorage["access_token"]);
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "delete-answer", {
                currentAnswer,
            })
        );
        console.log("res 1409", res);
        if (res.data.success) {
            yield put(deleteAnswer.deleteAnswerSuccess(res.data.deletedAnswer));
            console.log("res.data.deletedAnswer", res.data.deletedAnswer);
            yield put(setProgress(false));
        }
        return;
    } catch (err) {
        if (err.response.data) {
            yield put(
                deleteAnswer.deleteAnswerFailure(err.response.data.message)
            );
            yield put(setProgress(false));
            console.log("err", err);
        }
        // yield put(
        //     deleteAnswer.deleteAnswerFailure(
        //         "Something went wrong! Try again later.."
        //     )
        // );
        // yield put(setProgress(false));
        // console.log("err", err);
    }
}

function* handleUpdateThread(action) {
    const { title, content, id } = action.payload;
    // yield put(setProgress(true));
    yield put(setCircleProgress.setCircleProgressSuccess(true));
    yield delay(1200);

    if (!title || title.toString().trim().length <= 27) {
        yield put(
            createThread.createThreadFailure(
                "Title must be longer than 27 characters"
            )
        );
        // yield put(setProgress(false));
        yield put(setCircleProgress.setCircleProgressSuccess(false));

        return;
    }
    if (!content || content.toString().trim().length <= 37) {
        yield put(
            createThread.createThreadFailure(
                "Your question must be longer than 37 characters"
            )
        );
        yield put(setCircleProgress.setCircleProgressSuccess(false));

        // yield put(setProgress(false));

        return;
    }
    try {
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "update-thread", { title, content, id })
        );
        if (res.data.success) {
            yield put(updateThread.updateThreadSuccess(res.data.updatedThread));
            yield put(setCircleProgress.setCircleProgressSuccess(false));
            // yield put(setProgress(false));
        }
    } catch (err) {
        if (err.response.data) {
            console.log(err.response.data);
            yield put(setCircleProgress.setCircleProgressSuccess(false));

            yield delay(1200);
            yield put(
                updateThread.updateThreadFailure(err.response.data.message)
            );
            // yield put(setProgress(false));
            return;
        }
    }
}

function* handleDeleteThread(action) {
    const { id } = action.payload;
    yield put(setProgress(true));
    yield delay(1200);
    try {
        setAuth(localStorage["access_token"]);
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "delete-thread", {
                id,
            })
        );
        console.log("res 1495", res);
        if (res.data.success) {
            console.log("res.data.deletedAnswer", res.data.deletedThread);
            yield put(setProgress(false));
            yield put(push("/forum"));
            yield put(
                deleteThread.deleteThreadSuccess({
                    deletedThread: res.data.deletedThread,
                    deletedAnswers: res.data.deletedAnswers,
                })
            );
        }
        return;
    } catch (err) {
        if (err.response.data) {
            yield put(
                deleteThread.deleteThreadFailure(err.response.data.message)
            );
            yield put(setProgress(false));
            console.log("err", err);
        }
    }
}

function* handleSetViewThread(action) {
    const id = action.payload;
    try {
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "set/view-thread", { id })
        );
        if (res.data.success) {
            yield put(setViewThread.setViewThreadSuccess(id));
        }
    } catch (err) {
        console.log(err);
    }
}

function* handleLike(action) {
    // yield delay(500);
    const { question, objId, answer } = action.payload;
    console.log("1538", question, objId, "answer", answer);
    try {
        setAuth(localStorage["access_token"]);
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "like/question", {
                questionId: question._id,
                answer,
                objId,
            })
        );
        if (res.data.success) {
            yield put(
                like.likeSuccess({
                    like: res.data.like,
                    cancelLike: res.data.cancelLike,
                    likes: res.data.likes,
                    dislikes: res.data.dislikes,
                })
            );
            console.log("Like", res.data.like);
        }
    } catch (err) {
        console.log("err", err);
    }
}

function* handleDislike(action) {
    // yield delay(500);

    const { question, objId, answer } = action.payload;
    console.log("1538", question, objId);
    try {
        setAuth(localStorage["access_token"]);
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "dislike/question", {
                questionId: question._id,
                answer,
                objId,
            })
        );
        if (res.data.success) {
            yield put(
                dislike.dislikeSuccess({
                    dislike: res.data.dislike,
                    cancelDislike: res.data.cancelDislike,
                    likes: res.data.likes,
                    dislikes: res.data.dislikes,
                })
            );
            console.log("Like", res.data.dislike);
        }
    } catch (err) {
        console.log("err", err);
    }
}

function* handleLikeAnswer(action) {
    // yield delay(500);

    const { questionId, objId, answerId } = action.payload;
    console.log("1538", questionId, objId, "answer", answerId);
    // return;
    try {
        setAuth(localStorage["access_token"]);
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "like/answer", {
                questionId,
                answerId,
                objId,
            })
        );
        if (res.data.success) {
            yield put(
                likeAnswer.likeAnswerSuccess({
                    like: res.data.like,
                    cancelLike: res.data.cancelLike,
                    likes: res.data.likes,
                    dislikes: res.data.dislikes,
                })
            );
            console.log("Like", res.data.like);
        }
    } catch (err) {
        console.log("err", err);
    }
}

function* handleDislikeAnswer(action) {
    // yield delay(500);

    const { questionId, objId, answerId } = action.payload;
    console.log("1538", questionId, objId, answerId);
    try {
        setAuth(localStorage["access_token"]);
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "dislike/answer", {
                questionId,
                answerId,
                objId,
            })
        );
        if (res.data.success) {
            yield put(
                dislikeAnswer.dislikeAnswerSuccess({
                    dislike: res.data.dislike,
                    cancelDislike: res.data.cancelDislike,
                    likes: res.data.likes,
                    dislikes: res.data.dislikes,
                })
            );
            console.log("Like", res.data.dislike);
        }
    } catch (err) {
        console.log("err", err);
    }
}

function* handleBan(action) {
    const question = action.payload;
    const {
        objId,
        user: { email, name },
    } = question;
    yield put(setProgress(true));

    yield delay(1200);
    try {
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "ban", { objId, email, name })
        );
        if (res.data.success) {
            yield put(setProgress(false));

            yield put(ban.banSuccess(res.data.message));
        }
    } catch (err) {
        if (err.response.data) {
            yield put(setProgress(false));
            yield put(ban.banFailure(err.response.data.message));
            console.log("err", err);
        }
    }
}

function* handleUnban(action) {
    const question = action.payload;
    const { objId } = question;
    yield put(setProgress(true));

    yield delay(1200);
    try {
        const res = yield call(() =>
            thisAxios(API_FORUM, POST, "unban", { objId })
        );
        if (res.data.success) {
            yield put(setProgress(false));

            yield put(unban.unbanSuccess(res.data.message));
        }
    } catch (err) {
        if (err.response.data) {
            yield put(setProgress(false));
            yield put(unban.unbanFailure(err.response.data.message));
            console.log("err", err);
        }
    }
}

function* rootSaga() {
    yield fork(handleGetCode);
    yield takeLatest(
        openModalShare.openModalShareRequest().type,
        handleOpenModalShare
    );
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
    yield takeLatest(
        getShareCode.getShareCodeRequest().type,
        handleGetShareCode
    );

    yield takeLatest(
        updateProfile.updateProfileRequest().type,
        handleUpdateProfile
    );

    yield takeLatest(getProfile.getProfileRequest().type, handleGetProfile);
    yield takeLatest(
        verifyUrlRecover.verifyUrlRecoverRequest().type,
        handleVerifyUrl
    );
    yield takeLatest(
        checkLastPwd.checkLastPwdRequest().type,
        handleCheckLastPwd
    );
    yield takeLatest(
        recoverPassword.recoverPasswordRequest().type,
        handleRecoverPassword
    );
    yield takeLatest(
        createThread.createThreadRequest().type,
        handleCreateThread
    );
    yield takeLatest(getThreads.getThreadsRequest().type, handleGetThreads);
    yield takeLatest(
        createAnswer.createAnswerRequest().type,
        handleCreateAnswer
    );
    yield takeLatest(
        updateAnswer.updateAnswerRequest().type,
        handleUpdateAnswer
    );
    yield takeLatest(
        deleteAnswer.deleteAnswerRequest().type,
        handleDeleteAnswer
    );
    yield takeLatest(
        updateThread.updateThreadRequest().type,
        handleUpdateThread
    );
    yield takeLatest(
        deleteThread.deleteThreadRequest().type,
        handleDeleteThread
    );

    yield takeLatest(
        setViewThread.setViewThreadRequest().type,
        handleSetViewThread
    );

    yield takeLatest(like.likeRequest().type, handleLike);
    yield takeLatest(dislike.dislikeRequest().type, handleDislike);

    yield takeLatest(likeAnswer.likeAnswerRequest().type, handleLikeAnswer);
    yield takeLatest(
        dislikeAnswer.dislikeAnswerRequest().type,
        handleDislikeAnswer
    );

    yield takeLatest(ban.banRequest().type, handleBan);
    yield takeLatest(unban.unbanRequest().type, handleUnban);
}

export default rootSaga;
