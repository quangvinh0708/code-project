import { createActions } from "redux-actions";

export const getShareCode = createActions({
    getShareCodeRequest: (val) => val,
    getShareCodeSuccess: (val) => val,
    getShareCodeFailure: (val) => val,
});
