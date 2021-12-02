import {
    fbLogin,
    ggLogin,
    setErrorStatus,
    setPicture,
    updateFID,
    updateGID,
    updateUID,
} from "../../actions/login";
import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SET_ERROR_LOGIN,
} from "../../constant/login";

const initialState = {
    account: {
        name: null,
        picture: null,
        uid: null,
    },
    isAuthenticated: false,
    error: null,
    errorStatus: false,
    nameCode: null,
    ggAccountInfo: {
        gid: null,
        email: null,
        picture: null,
        name: null,
        access_token: null,
    },
    fbAccountInfo: {
        fid: null,
        email: null,
        phone: null,
        name: null,
    },
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
            };
        }
        // case "CHECK_LOGIN": {
        //     const name = action.payload;
        //     return {
        //         ...state,
        //         account: {
        //             ...state.account,
        //             name,
        //         },
        //         isAuthenticated: true,
        //         error: null,
        //     };
        // }
        case LOGIN_SUCCESS: {
            const name = action.payload;
            return {
                ...state,
                account: {
                    ...state.account,
                    name,
                },
                isAuthenticated: true,
                error: null,
            };
        }
        case setPicture.setPictureRequest().type: {
            return {
                ...state,
                account: {
                    ...state.account,
                    picture: action.payload,
                },
            };
        }
        case LOGIN_FAILED: {
            const err = action.payload;
            return {
                ...state,
                isAuthenticated: false,
                error: err.message,
            };
        }
        case SET_ERROR_LOGIN: {
            const err = action.payload;
            return {
                ...state,
                error: err,
            };
        }
        case "SET_NAME_CODE": {
            const nameCode = action.payload;
            console.log("Day la nameCode:", nameCode);
            return {
                ...state,
                nameCode,
            };
        }
        case "LOGOUT_SUCCESS": {
            return {
                ...state,
                isAuthenticated: false,
                nameCode: null,
                account: {
                    ...state.account,
                    name: null,
                    picture: null,
                    uid: null,
                },
                ggAccountInfo: {
                    gid: null,
                    email: null,
                    picture: null,
                    name: null,
                    access_token: null,
                },
                fbAccountInfo: {
                    fid: null,
                    email: null,
                    phone: null,
                    name: null,
                },
            };
        }

        case ggLogin.ggLoginSuccess().type: {
            console.log(action.payload, "ne");
            return {
                ...state,
                ggAccountInfo: {
                    ...state.ggAccountInfo,
                    ...action.payload,
                },
                account: {
                    ...state.account,
                    name: action.payload.name,
                    picture: action.payload.picture,
                },
                isAuthenticated: true,
                err: null,
            };
        }

        case fbLogin.fbLoginSuccess().type: {
            console.log(action.payload, "ne");
            return {
                ...state,
                ggAccountInfo: {
                    ...state.ggAccountInfo,
                    ...action.payload,
                },
                account: {
                    ...state.account,
                    name: action.payload.name,
                    picture: action.payload.picture,
                },
                fbAccountInfo: {
                    ...state.fbAccountInfo,
                    ...action.payload,
                },
                isAuthenticated: true,
                err: null,
            };
        }

        case setErrorStatus.setErrorStatusRequest().type: {
            return {
                ...state,
                errorStatus: action.payload,
            };
        }

        case updateFID.updateFIDRequest().type: {
            return {
                ...state,
                fbAccountInfo: {
                    ...state.fbAccountInfo,
                    fid: action.payload,
                },
            };
        }

        case updateGID.updateGIDRequest().type: {
            return {
                ...state,
                ggAccountInfo: {
                    ...state.ggAccountInfo,
                    gid: action.payload,
                },
            };
        }

        case updateUID.updateUIDRequest().type: {
            return {
                ...state,
                account: {
                    ...state.account,
                    uid: action.payload,
                },
            };
        }

        default:
            return state;
    }
};

export default loginReducer;
