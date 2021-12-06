import { createActions } from "redux-actions";

export const setView = createActions({
    setViewRequest: (val) => val,
    setViewSuccess: (val) => val,
    setViewFailure: (val) => val,
});

export const setFullScreen = createActions({
    setFullScreenRequest: (val) => val,
    setFullScreenSuccess: (val) => val,
    setFullScreenFailure: (val) => val,
});

export const setLargeScreen = createActions({
    setLargeScreenRequest: (val) => val,
    setLargeScreenSuccess: (val) => val,
    setLargeScreenFailure: (val) => val,
});
