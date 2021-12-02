import { createActions } from "redux-actions";

export const direct = createActions({
    directRequest: (val) => val,
    directSuccess: (val) => val,
    directFailure: (val) => val,
});

export const verifyUrlRecover = createActions({
    verifyUrlRecoverRequest: (val) => val,
    verifyUrlRecoverSuccess: (val) => val,
    verifyUrlRecoverFailure: (val) => val,
});

