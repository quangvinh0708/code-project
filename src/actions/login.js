import {
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    SET_ERROR_LOGIN,
} from "../constant/login";
import { createActions } from "redux-actions";

export const register = createActions({
    registerRequest: (val) => val,
    registerSuccess: (val) => val,
    registerFailure: (val) => val,
});

export const login = (acc) => ({
    type: LOGIN,
    payload: acc,
});

export const loginSuccess = (name = null) => ({
    type: LOGIN_SUCCESS,
    payload: name,
});

export const setPicture = createActions({
    setPictureRequest: (val) => val,
});

export const loginFailed = (err = null) => ({
    type: LOGIN_FAILED,
    payload: err,
});

export const setErrorLogin = (err) => ({
    type: SET_ERROR_LOGIN,
    payload: err,
});

export const setNameCode = (val) => ({
    type: "SET_NAME_CODE",
    payload: val,
});

export const logout = () => ({
    type: "LOGOUT",
    payload: null,
});

export const logoutSuccess = () => ({
    type: "LOGOUT_SUCCESS",
    payload: null,
});

export const checkLogin = () => ({
    type: "CHECK_LOGIN",
    payload: null,
});

export const ggLogin = createActions({
    ggLoginRequest: (val) => val,
    ggLoginSuccess: (val) => val,
    ggLoginFailure: (val) => val,
});

export const fbLogin = createActions({
    fbLoginRequest: (val) => val,
    fbLoginSuccess: (val) => val,
    fbLoginFailure: (val) => val,
});

export const setErrorStatus = createActions({
    setErrorStatusRequest: (val) => val,
});
export const checkLastPwd = createActions({
    checkLastPwdRequest: (val) => val,
    checkLastPwdSuccess: (val) => val,
    checkLastPwdFailure: (val) => val,
});

export const recoverPassword = createActions({
    recoverPasswordRequest: (val) => val,
    recoverPasswordSuccess: (val) => val,
    recoverPasswordFailure: (val) => val,
});

export const updateFID = createActions({
    updateFIDRequest: (val) => val,
});
export const updateGID = createActions({
    updateGIDRequest: (val) => val,
});
export const updateUID = createActions({
    updateUIDRequest: (val) => val,
});

export const setObjId = createActions({
    setObjIdRequest: (val) => val,
    setObjIdSuccess: (val) => val,
    setObjIdFailure: (val) => val,
});

export const setAdmin = createActions({
    setAdminRequest: (val) => val,
    setAdminSuccess: (val) => val,
    setAdminFailure: (val) => val,
});
