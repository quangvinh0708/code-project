import { createActions } from "redux-actions";

export const setOpenAskModal = createActions({
    setOpenAskModalRequest: (val) => val,
    setOpenAskModalSuccess: (val) => val,
    setOpenAskModalFailure: (val) => val,
});

export const createThread = createActions({
    createThreadRequest: (val) => val,
    createThreadSuccess: (val) => val,
    createThreadFailure: (val) => val,
});

export const updateThread = createActions({
    updateThreadRequest: (val) => val,
    updateThreadSuccess: (val) => val,
    updateThreadFailure: (val) => val,
});

export const getThreads = createActions({
    getThreadsRequest: (val) => val,
    getThreadsSuccess: (val) => val,
    getThreadsFailure: (val) => val,
});

export const setNotify = createActions({
    setNotifyRequest: (val) => val,
    setNotifySuccess: (val) => val,
    setNotifyFailure: (val) => val,
});

export const setLoadingForum = createActions({
    setLoadingForumRequest: (val) => val,
    setLoadingForumSuccess: (val) => val,
    setLoadingForumFailure: (val) => val,
});

export const setQuestionLoadingForum = createActions({
    setQuestionLoadingForumRequest: (val) => val,
    setQuestionLoadingForumSuccess: (val) => val,
    setQuestionLoadingForumFailure: (val) => val,
});

export const setQuestion = createActions({
    setQuestionRequest: (val) => val,
    setQuestionSuccess: (val) => val,
    setQuestionFailure: (val) => val,
});

export const createAnswer = createActions({
    createAnswerRequest: (val) => val,
    createAnswerSuccess: (val) => val,
    createAnswerFailure: (val) => val,
});

export const setCircleProgress = createActions({
    setCircleProgressRequest: (val) => val,
    setCircleProgressSuccess: (val) => val,
    setCircleProgressFailure: (val) => val,
});

export const updateAnswer = createActions({
    updateAnswerRequest: (val) => val,
    updateAnswerSuccess: (val) => val,
    updateAnswerFailure: (val) => val,
});

export const deleteAnswer = createActions({
    deleteAnswerRequest: (val) => val,
    deleteAnswerSuccess: (val) => val,
    deleteAnswerFailure: (val) => val,
});

export const openModalDeleteAnswer = createActions({
    openModalDeleteAnswerRequest: (val) => val,
    openModalDeleteAnswerSuccess: (val) => val,
    openModalDeleteAnswerFailure: (val) => val,
});

export const setDeleteSuccess = createActions({
    setDeleteSuccessSuccess: (val) => val,
});

export const deleteThread = createActions({
    deleteThreadRequest: (val) => val,
    deleteThreadSuccess: (val) => val,
    deleteThreadFailure: (val) => val,
});

export const openDeleteThreadModal = createActions({
    openDeleteThreadModalRequest: (val) => val,
    openDeleteThreadModalSuccess: (val) => val,
    openDeleteThreadModalFailure: (val) => val,
});

export const setViewThread = createActions({
    setViewThreadRequest: (val) => val,
    setViewThreadSuccess: (val) => val,
    setViewThreadFailure: (val) => val,
});

export const like = createActions({
    likeRequest: (val) => val,
    likeSuccess: (val) => val,
    likeFailure: (val) => val,
});
export const dislike = createActions({
    dislikeRequest: (val) => val,
    dislikeSuccess: (val) => val,
    dislikeFailure: (val) => val,
});

export const likeAnswer = createActions({
    likeAnswerRequest: (val) => val,
    likeAnswerSuccess: (val) => val,
    likeAnswerFailure: (val) => val,
});
export const dislikeAnswer = createActions({
    dislikeAnswerRequest: (val) => val,
    dislikeAnswerSuccess: (val) => val,
    dislikeAnswerFailure: (val) => val,
});

export const setThread = createActions({
    setThreadRequest: (val) => val,
    setThreadSuccess: (val) => val,
    setThreadFailure: (val) => val,
});
// export const setLargeScreen = createActions({
//     setLargeScreenRequest: (val) => val,
//     setLargeScreenSuccess: (val) => val,
//     setLargeScreenFailure: (val) => val,
// });
