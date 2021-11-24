import { CLOSE_MODAL, OPEN_MODAL, OPEN_MODAL_SUCCESS, SET_PROGRESS } from "../constant/modal";

export const openModal = () => ({
    type: OPEN_MODAL,
    payload: null,
});

export const openModalSuccess = () => ({
    type: OPEN_MODAL_SUCCESS,
    payload: null,
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
    payload: null,
});

export const setProgress = (val) => ({
    type: SET_PROGRESS,
    payload: val,
});

export const clickModal = (name) => ({
    type: 'CLICK_MODAL',
    payload: name,
});

export const setLoading = (val) => ({
    type: "SET_LOADING",
    payload: val,
})
