import { createActions } from "redux-actions";

export const setMessage = createActions({
    setMessageRequest: (val) => val,
    setMessageSuccess: (val) => val,
    setMessageFailure: (val) => val,
});

export const setMess = createActions({
    setMessRequest: (val) => val,
    setMessSuccess: (val) => val,
    setMessFailure: (val) => val,
});

export const setId = createActions({
    setIdRequest: (val) => val,
    setIdSuccess: (val) => val,
    setIdFailure: (val) => val,
});

export const setCurrentObj = createActions({
    setCurrentObjRequest: (val) => val,
    setCurrentObjSuccess: (val) => val,
    setCurrentObjFailure: (val) => val,
});

export const setFriends = createActions({
    setFriendsRequest: (val) => val,
    setFriendsSuccess: (val) => val,
    setFriendsFailure: (val) => val,
});

export const setDisplay = createActions({
    setDisplayRequest: (val) => val,
    setDisplaySuccess: (val) => val,
    setDisplayFailure: (val) => val,
});

export const setImageWillBeShow = createActions({
    setImageWillBeShowRequest: (val) => val,
    setImageWillBeShowSuccess: (val) => val,
    setImageWillBeShowFailure: (val) => val,
});

export const setUpdateSeen = createActions({
    setUpdateSeenRequest: (val) => val,
    setUpdateSeenSuccess: (val) => val,
    setUpdateSeenFailure: (val) => val,
});
