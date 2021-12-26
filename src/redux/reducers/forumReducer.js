import {
    createAnswer,
    createThread,
    deleteAnswer,
    deleteThread,
    dislike,
    dislikeAnswer,
    getThreads,
    like,
    likeAnswer,
    openDeleteThreadModal,
    openModalDeleteAnswer,
    setBan,
    setBanModal,
    setCircleProgress,
    setDeleteSuccess,
    // setLoading,
    setLoadingForum,
    setNotify,
    setOpenAskModal,
    setQuestion,
    setQuestionLoadingForum,
    setThread,
    setUnbanModal,
    // setView,
    setViewThread,
    updateAnswer,
    updateThread,
    ban,
    unban,
    setBanAnswerModal,
} from "../../actions/forum";
import moment from "moment-timezone";

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
    likes: [],
    dislikes: [],
    isBanned: false,
    banModal: false,
    unbanModal: false,
    banAnswerModal: false,
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
            // const x = state.threads.unshift(action.payload);
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
            const { threads, answers, likes, dislikes } = action.payload;
            const threadsReverse = threads.reverse();
            const answersDescSort = answers.sort((a, b) => {
                return b.likes - a.likes;
            });
            return {
                ...state,
                threads: threadsReverse,
                answers: answersDescSort,
                likes,
                dislikes,
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

            const threads = state.threads.map((thread) => {
                if (thread._id === answer.questionId) {
                    return {
                        ...thread,
                        replies: thread.replies + 1,
                    };
                } else return thread;
            });

            return {
                ...state,
                notify: "Your answer has been posted! Check it out",
                error: false,
                answers: state.answers.concat(answer),
                threads,
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
            console.log("In ForumReducer 259", deletedAnswer);
            const answers = state.answers.filter(
                (answer) => answer._id !== deletedAnswer._id && answer
            );
            const threads = state.threads.map((thread) => {
                if (thread._id === deletedAnswer.questionId) {
                    return {
                        ...thread,
                        replies: thread.replies - 1,
                    };
                } else return thread;
            });
            return {
                ...state,
                notify: "Your answer has been removed! Check it out",
                error: false,
                answers,
                deleteSuccess: true,
                threads,
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
            const {
                deletedThread,
                //  deletedAnswers
            } = action.payload;
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

        case setViewThread.setViewThreadRequest().type: {
            return {
                ...state,
            };
        }
        case setViewThread.setViewThreadSuccess().type: {
            const id = action.payload;
            const threads = state.threads.map((thread) => {
                if (thread._id === id) {
                    return {
                        ...thread,
                        views: thread.views + 1,
                    };
                } else {
                    return thread;
                }
            });
            return {
                ...state,
                threads,
            };
        }

        case like.likeRequest().type: {
            return {
                ...state,
            };
        }
        case like.likeSuccess().type: {
            const { likes, dislikes } = action.payload;
            const like = action.payload.like ? action.payload.like : null;
            const cancelLike = action.payload.cancelLike
                ? action.payload.cancelLike
                : null;
            return {
                ...state,
                dislikes: dislikes,
                // state.dislikes.length > 0 &&
                // state.dislikes.filter(
                //     (dislike) =>
                //         like.objId !== dislike.objId &&
                //         like.questionId !== dislike.questionId &&
                //         dislike.answerId === "" &&
                //         dislike
                // ),

                likes: likes,
                // !cancelLike
                //     ? state.likes.concat(action.payload.like)
                //     : state.likes.filter(
                //           (like) =>
                //               like.questionId !== cancelLike.questionId &&
                //               like.objId !== cancelLike.objId &&
                //               like.answerId === "" &&
                //               like
                //       ),
                threads:
                    like && !like.answerId && !cancelLike
                        ? state.threads.map((thread) => {
                              if (
                                  like.questionId === thread._id &&
                                  like.answerId === ""
                              ) {
                                  return {
                                      ...thread,
                                      likes: thread.likes + 1,
                                      dislikes:
                                          state.dislikes.findIndex(
                                              (dislike) =>
                                                  like.objId ===
                                                      dislike.objId &&
                                                  like.questionId ===
                                                      dislike.questionId &&
                                                  dislike.answerId === ""
                                          ) >= 0
                                              ? thread.dislikes + 1
                                              : thread.dislikes,
                                      //   dislikes: state.dislikes.findIndex(dislike => dislike.questionId === thread._id) >= 0 ? thread.dislikes + 1 : thread.dislikes
                                  };
                              } else return thread;
                          })
                        : cancelLike
                        ? state.threads.map((thread) => {
                              console.log("cancellike reducer", cancelLike);
                              if (cancelLike.questionId === thread._id) {
                                  return {
                                      ...thread,
                                      likes: thread.likes - 1,
                                  };
                              } else return thread;
                          })
                        : state.threads,
                // answers:
                //     like && like.answerId && !cancelLike
                //         ? state.answers.map((answer) => {
                //               if (like.questionId === answer._id) {
                //                   return {
                //                       ...answer,
                //                       likes: answer.likes + 1,
                //                       dislikes:
                //                           state.dislikes.findIndex(
                //                               (dislike) =>
                //                                   like.objId ===
                //                                       dislike.objId &&
                //                                   like.questionId ===
                //                                       dislike.questionId
                //                           ) >= 0
                //                               ? answer.dislikes + 1
                //                               : answer.dislikes,
                //                       //   dislikes: state.dislikes.findIndex(dislike => dislike.questionId === answer._id) >= 0 ? answer.dislikes + 1 : answer.dislikes
                //                   };
                //               } else return answer;
                //           })
                //         : cancelLike
                //         ? state.answers.map((answer) => {
                //               console.log("cancellike reducer", cancelLike);
                //               if (cancelLike.questionId === answer._id) {
                //                   return {
                //                       ...answer,
                //                       likes: answer.likes - 1,
                //                   };
                //               } else return answer;
                //           })
                //         : state.answers,
            };
        }

        case dislike.dislikeRequest().type: {
            return {
                ...state,
            };
        }
        case dislike.dislikeSuccess().type: {
            const { likes, dislikes } = action.payload;
            const dislike = action.payload.dislike
                ? action.payload.dislike
                : null;
            const cancelDislike = action.payload.cancelDislike
                ? action.payload.cancelDislike
                : null;
            return {
                ...state,
                likes: likes,
                // state.likes.filter(
                //     (like) =>
                //         like.objId !== dislike.objId &&
                //         like.questionId !== dislike.questionId &&
                //         like.answerId === "" &&
                //         like
                // ),
                dislikes: dislikes,
                // !cancelDislike
                //     ? state.dislikes.concat(action.payload.dislike)
                //     : state.dislikes.filter(
                //           (dislike) =>
                //               dislike.questionId !== cancelDislike.questionId &&
                //               dislike.objId !== cancelDislike.objId &&
                //               dislike.answerId === "" &&
                //               dislike
                //       ),
                threads:
                    dislike && !dislike.answerId && !cancelDislike
                        ? state.threads.map((thread) => {
                              if (
                                  dislike.questionId === thread._id &&
                                  dislike.answerId === ""
                              ) {
                                  return {
                                      ...thread,
                                      dislikes: thread.dislikes - 1,
                                      likes:
                                          state.likes.findIndex(
                                              (like) =>
                                                  like.objId ===
                                                      dislike.objId &&
                                                  like.questionId ===
                                                      dislike.questionId &&
                                                  like.answerId === ""
                                          ) >= 0
                                              ? thread.likes - 1
                                              : thread.likes,
                                      //   likes: state.likes.findIndex(like => like.questionId === thread._id && like.objId === dislike.objId) >= 0 ? thread.likes - 1 : thread.likes
                                  };
                              } else return thread;
                          })
                        : cancelDislike
                        ? state.threads.map((thread) => {
                              if (cancelDislike.questionId === thread._id) {
                                  return {
                                      ...thread,
                                      dislikes: thread.dislikes + 1,
                                  };
                              } else return thread;
                          })
                        : state.threads,
                // answers:
                //     dislike && dislike.answerId && !cancelDislike
                //         ? state.answers.map((answer) => {
                //               if (dislike.questionId === answer._id) {
                //                   return {
                //                       ...answer,
                //                       dislikes: answer.dislikes - 1,
                //                       likes:
                //                           state.likes.findIndex(
                //                               (like) =>
                //                                   like.objId ===
                //                                       dislike.objId &&
                //                                   like.questionId ===
                //                                       dislike.questionId
                //                           ) >= 0
                //                               ? answer.likes - 1
                //                               : answer.likes,
                //                   };
                //               } else return answer;
                //           })
                //         : cancelDislike
                //         ? state.answers.map((answer) => {
                //               if (cancelDislike.questionId === answer._id) {
                //                   return {
                //                       ...answer,
                //                       dislikes: answer.dislikes + 1,
                //                   };
                //               } else return answer;
                //           })
                //         : state.answers,
            };
        }

        case likeAnswer.likeAnswerSuccess().type: {
            const like = action.payload.like ? action.payload.like : null;
            const cancelLike = action.payload.cancelLike
                ? action.payload.cancelLike
                : null;
            return {
                ...state,
                dislikes: action.payload.dislikes,

                likes: action.payload.likes,
                answers:
                    like && like.answerId && !cancelLike
                        ? state.answers.map((answer) => {
                              if (
                                  like.questionId === answer.questionId &&
                                  like.answerId === answer._id
                              ) {
                                  return {
                                      ...answer,
                                      likes: answer.likes + 1,
                                      dislikes:
                                          state.dislikes.findIndex(
                                              (dislike) =>
                                                  like.objId ===
                                                      dislike.objId &&
                                                  like.questionId ===
                                                      dislike.questionId &&
                                                  like.answerId ===
                                                      dislike.answerId
                                          ) >= 0
                                              ? answer.dislikes + 1
                                              : answer.dislikes,
                                      //   dislikes: state.dislikes.findIndex(dislike => dislike.questionId === answer._id) >= 0 ? answer.dislikes + 1 : answer.dislikes
                                  };
                              } else return answer;
                          })
                        : cancelLike
                        ? state.answers.map((answer) => {
                              console.log("cancellike reducer", cancelLike);
                              if (
                                  cancelLike.questionId === answer.questionId &&
                                  cancelLike.answerId === answer._id
                              ) {
                                  return {
                                      ...answer,
                                      likes: answer.likes - 1,
                                  };
                              } else return answer;
                          })
                        : state.answers,
            };
        }

        case dislikeAnswer.dislikeAnswerSuccess().type: {
            const dislike = action.payload.dislike
                ? action.payload.dislike
                : null;
            const cancelDislike = action.payload.cancelDislike
                ? action.payload.cancelDislike
                : null;
            return {
                ...state,
                dislikes: action.payload.dislikes,

                likes: action.payload.likes,
                answers:
                    dislike && dislike.answerId && !cancelDislike
                        ? state.answers.map((answer) => {
                              if (
                                  dislike.questionId === answer.questionId &&
                                  dislike.answerId === answer._id
                              ) {
                                  return {
                                      ...answer,
                                      dislikes: answer.dislikes - 1,
                                      likes:
                                          state.likes.findIndex(
                                              (like) =>
                                                  like.objId ===
                                                      dislike.objId &&
                                                  like.questionId ===
                                                      dislike.questionId &&
                                                  like.answerId ===
                                                      dislike.answerId
                                          ) >= 0
                                              ? answer.likes - 1
                                              : answer.likes,
                                      //   likes: state.likes.findIndex(like => like.questionId === thread._id && like.objId === dislike.objId) >= 0 ? thread.likes - 1 : thread.likes
                                  };
                              } else return answer;
                          })
                        : cancelDislike
                        ? state.answers.map((answer) => {
                              if (
                                  cancelDislike.answerId === answer._id &&
                                  answer.questionId === cancelDislike.questionId
                              ) {
                                  return {
                                      ...answer,
                                      dislikes: answer.dislikes + 1,
                                  };
                              } else return answer;
                          })
                        : state.answers,
            };
        }

        case setThread.setThreadSuccess().type: {
            const { key } = action.payload;
            var threads;
            if (key === "N") {
                threads = state.threads.sort((a, b) => {
                    return moment(b.createdAt)
                        .tz("Asia/Ho_Chi_Minh")
                        .diff(moment(a.createdAt).tz("Asia/Bangkok"));
                });
            } else if (key === "L") {
                threads = state.threads.sort((a, b) => {
                    return a.likes === b.likes
                        ? b.views + b.likes - (a.views + a.likes)
                        : b.likes - a.likes;
                });
            } else if (key === "U") {
                threads = state.threads.sort((a, b) => {
                    return a.replies === b.replies
                        ? a.replies + b.views - (b.replies + a.views)
                        : a.replies - b.replies;
                });
            }
            return {
                ...state,
                threads,
            };
        }

        case setBan.setBanSuccess().type: {
            return {
                ...state,
                isBanned: action.payload,
            };
        }

        case setBanModal.setBanModalSuccess().type: {
            return {
                ...state,
                banModal: action.payload,
            };
        }

        case setBanAnswerModal.setBanAnswerModalSuccess().type: {
            return {
                ...state,
                banAnswerModal: action.payload,
            };
        }

        case setUnbanModal.setUnbanModalSuccess().type: {
            return {
                ...state,
                unbanModal: action.payload,
            };
        }

        case ban.banSuccess().type: {
            return {
                ...state,
                notify: action.payload,
                error: false,
            };
        }
        case ban.banFailure().type: {
            return {
                ...state,
                notify: action.payload,
                error: false,
            };
        }

        case unban.unbanSuccess().type: {
            return {
                ...state,
                notify: action.payload,
                error: false,
            };
        }
        case unban.unbanFailure().type: {
            return {
                ...state,
                notify: action.payload,
                error: false,
            };
        }

        default:
            return state;
    }
};

export default forumReducer;
