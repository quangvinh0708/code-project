import { createActions } from "redux-actions";

export const openModalShare = createActions({
    openModalShareRequest: (val) => val,
    openModalShareSuccess: (val) => val,
    openModalShareFailure: (val) => val,
});
