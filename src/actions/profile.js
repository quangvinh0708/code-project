import { createActions } from "redux-actions";

export const getProfile = createActions({
    getProfileRequest: (val) => val,
    getProfileSuccess: (val) => val,
    getProfileFailure: (val) => val,
});

export const updateProfile = createActions({
    updateProfileRequest: (val) => val,
    updateProfileSuccess: (val) => val,
    updateProfileFailure: (val) => val,
});
