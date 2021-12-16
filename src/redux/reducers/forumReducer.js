import {
    createAnswer,
    createThread,
    deleteAnswer,
    deleteThread,
    getThreads,
    openDeleteThreadModal,
    openModalDeleteAnswer,
    setCircleProgress,
    setDeleteSuccess,
    setLoading,
    setLoadingForum,
    setNotify,
    setOpenAskModal,
    setQuestion,
    setQuestionLoadingForum,
    updateAnswer,
    updateThread,
} from "../../actions/forum";

const initialState = {
    // modalShareIsOpen: false,
    open: false,
    threads: [],
    notify: "",
    error: false,
    isLoading: true,
    isQuestionLoading: true,
    answers: [],
    question: null,
    isCircleProgress: false,
    deleteAnswerModal: false,
    deleteSuccess: false,
    isOpenDeleteThreadModal: false,
};

const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case setOpenAskModal.setOpenAskModalRequest().type: {
            return {
                ...state,
            };
        }
        case setOpenAskModal.setOpenAskModalSuccess().type: {
            return {
                ...state,
                open: action.payload,
            };
        }
        case setOpenAskModal.setOpenAskModalFailure().type: {
            return {
                ...state,
                open: false,
            };
        }

        case setNotify.setNotifyRequest().type: {
            return {
                ...state,
            };
        }
        case setNotify.setNotifySuccess().type: {
            return {
                ...state,
                notify: action.payload,
            };
        }
        case setNotify.setNotifyFailure().type: {
            return {
                ...state,
            };
        }

        case createThread.createThreadRequest().type: {
            return {
                ...state,
            };
        }
        case createThread.createThreadSuccess().type: {
            const x = state.threads.unshift(action.payload);
            return {
                ...state,
                notify: "Your question has been posted successfully",
                error: false,
                threads: state.threads,
            };
        }
        case createThread.createThreadFailure().type: {
            return {
                ...state,
                error: true,
                notify: action.payload,
            };
        }

        case getThreads.getThreadsRequest().type: {
            return {
                ...state,
            };
        }
        case getThreads.getThreadsSuccess().type: {
            const { threads, answers } = action.payload;
            const threadsReverse = threads.reverse();
            const answersDescSort = answers.sort((a, b) => {
                return b.likes - a.likes;
            });
            return {
                ...state,
                threads: threadsReverse,
                answers: answersDescSort,
            };
        }
        case getThreads.getThreadsFailure().type: {
            return {
                ...state,
            };
        }

        case setLoadingForum.setLoadingForumRequest().type: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case setLoadingForum.setLoadingForumSuccess().type: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case setLoadingForum.setLoadingForumFailure().type: {
            return {
                ...state,
                isLoading: false,
            };
        }

        case setQuestionLoadingForum.setQuestionLoadingForumRequest().type: {
            return {
                ...state,
                isQuestionLoading: true,
            };
        }
        case setQuestionLoadingForum.setQuestionLoadingForumSuccess().type: {
            return {
                ...state,
                isQuestionLoading: action.payload,
            };
        }
        case setQuestionLoadingForum.setQuestionLoadingForumFailure().type: {
            return {
                ...state,
                isQuestionLoading: false,
            };
        }

        case setQuestion.setQuestionRequest().type: {
            return {
                ...state,
            };
        }
        case setQuestion.setQuestionSuccess().type: {
            return {
                ...state,
                question: action.payload,
            };
        }
        case setQuestion.setQuestionFailure().type: {
            return {
                ...state,
            };
        }

        case createAnswer.createAnswerRequest().type: {
            return {
                ...state,
            };
        }
        case createAnswer.createAnswerSuccess().type: {
            const answer = action.payload;
            return {
                ...state,
                notify: "Your answer has been posted! Check it out",
                error: false,
                answers: state.answers.concat(answer),
            };
        }
        case createAnswer.createAnswerFailure().type: {
            return {
                ...state,
                error: true,
                notify: action.payload,
            };
        }

        case setCircleProgress.setCircleProgressRequest().type: {
            return {
                ...state,
            };
        }
        case setCircleProgress.setCircleProgressSuccess().type: {
            return {
                ...state,
                isCircleProgress: action.payload,
            };
        }
        case setCircleProgress.setCircleProgressFailure().type: {
            return {
                ...state,
                isCircleProgress: false,
            };
        }

        case updateAnswer.updateAnswerRequest().type: {
            return {
                ...state,
            };
        }
        case updateAnswer.updateAnswerSuccess().type: {
            const answerUpdated = action.payload;
            const answers = state.answers.map((answer) =>
                answer._id === answerUpdated._id ? answerUpdated : answer
            );
            return {
                ...state,
                notify: "Your answer has been updated! Check it out",
                error: false,
                answers,
            };
        }
        case updateAnswer.updateAnswerFailure().type: {
            return {
                ...state,
                notify: action.payload,
                error: true,
            };
        }

        case deleteAnswer.deleteAnswerRequest().type: {
            return {
                ...state,
            };
        }
        case deleteAnswer.deleteAnswerSuccess().type: {
            const deletedAnswer = action.payload;
            const answers = state.answers.filter(
                (answer) => answer._id !== deletedAnswer._id && answer
            );
            return {
                ...state,
                notify: "Your answer has been removed! Check it out",
                error: false,
                answers,
                deleteSuccess: true,
            };
        }
        case deleteAnswer.deleteAnswerFailure().type: {
            return {
                ...state,
                notify: action.payload,
                error: true,
                deleteSuccess: false,
            };
        }

        case openModalDeleteAnswer.openModalDeleteAnswerSuccess().type: {
            return {
                ...state,
                deleteAnswerModal: action.payload,
            };
        }

        case setDeleteSuccess.setDeleteSuccessSuccess().type: {
            return {
                ...state,
                deleteSuccess: action.payload,
            };
        }

        case updateThread.updateThreadSuccess().type: {
            const updatedThread = action.payload;
            const threads = state.threads.map((thread) =>
                thread._id === updatedThread._id ? updatedThread : thread
            );
            return {
                ...state,
                notify: "Your question has been updated successfully! Check it out",
                error: false,
                threads: threads,
            };
        }
        case updateThread.updateThreadFailure().type: {
            return {
                ...state,
                error: true,
                notify: action.payload,
            };
        }

        case deleteThread.deleteThreadSuccess().type: {
            const { deletedThread, deletedAnswers } = action.payload;
            const threads = state.threads.filter(
                (thread) => thread._id !== deletedThread._id && thread
            );
            // const answers = state.answers.filter();
            return {
                ...state,
                // notify: "Your question has been removed! Check it out",
                error: false,
                threads,
                isOpenDeleteThreadModal: false,
                // question: null,
                // answers,
            };
        }
        case deleteThread.deleteThreadFailure().type: {
            return {
                ...state,
                error: true,
                notify: action.payload,
            };
        }

        case openDeleteThreadModal.openDeleteThreadModalSuccess().type: {
            return {
                ...state,
                isOpenDeleteThreadModal: action.payload,
            };
        }

        default:
            return state;
    }
};

export default forumReducer;
