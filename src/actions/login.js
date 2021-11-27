import {
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    SET_ERROR_LOGIN,
} from "../constant/login";
import { createActions } from "redux-actions";

export const login = (acc) => ({
    type: LOGIN,
    payload: acc,
});

export const loginSuccess = (name = null) => ({
    type: LOGIN_SUCCESS,
    payload: name,
});

export const setPicture = createActions({
    setPictureRequest: val => val
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
