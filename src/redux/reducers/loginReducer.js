import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SET_ERROR_LOGIN,
} from "../../constant/login";

const initialState = {
    account: {
        name: null,
    },
    isAuthenticated: false,
    error: null,
    nameCode: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
            };
        }
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
            }
        }

        default:
            return state;
    }
};

export default loginReducer;
