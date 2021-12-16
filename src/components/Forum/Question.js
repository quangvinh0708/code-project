import { makeStyles } from "@mui/styles";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import cs from "classnames";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    CircularProgress,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
// import AlertDialogSlide from "../../Helpers/AlertDialogSlide";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./styles.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Answer from "./Answer";
import { useDispatch, useSelector } from "react-redux";
import {
    getThreads,
    openDeleteThreadModal,
    openModalDeleteAnswer,
    setLoadingForum,
    setNotify,
    setOpenAskModal,
    setQuestion,
    setQuestionLoadingForum,
} from "../../actions/forum";
import moment from "moment";
import parse from "html-react-parser";
import { Redirect } from "react-router-dom";
import { push } from "connected-react-router";
import Loading from "../Loading/Loading";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import UpdateAskModal from "./UpdateAskModal";
import DeleteThreadModal from "./DeleteThreadModal";
const useStyles = makeStyles((theme) => ({
    questionContainer: {
        background: `#fff`,
    },
    mainContainer: {
        width: `80% !important`,
        margin: `auto !important`,
        minWidth: `500px !important`,
        marginTop: `10% !important`,
        ["@media(max-width:768px)"]: {
            minWidth: `unset !important`,
            width: `95% !important`,
            margin: `auto !important`,
        },
        ["@media(max-width:320px)"]: {
            marginTop: `120px !important`,
        },
    },
    userInfo: {
        display: `flex`,
    },
    cardQuestion: {
        marginTop: `1%`,
        marginBottom: `2%`,
        // borderBottom: `1px solid rgba(26, 54, 126, 0.2)`,
    },
    media: {
        height: `auto !important`,
        width: `100%`,
    },
    questionHeader: {
        borderBottom: `1px solid rgba(26, 54, 126, 0.2)`,
        // background: `#98DBC6`,
        backgroundImage: `linear-gradient(45deg, #98DBC6 50%, #fff 10%)`,
    },
    cardActions: {
        backgroundColor: `rgba(0,0,0,.03)`,
    },
    questionTitle: {
        fontSize: "18px",
        fontWeight: 700,
        margin: "0",
        padding: "0",
        color: "#000",
        boxSizing: `border-box`,
    },
    questionTitleCollapse: {
        // display: `block`,
        // whiteSpace: "nowrap",
        // overflow: "hidden",
        // textOverflow: "ellipsis",
        // maxWidth: "70ch",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: "2",
        lineClamp: 2,
        WebkitBoxOrient: "vertical",
    },
    moreInQuestion: {
        marginTop: `12px`,
    },
    textConfig: {
        "& h2": {
            fontSize: `22px !important`,
            fontWeight: `bold !important`,
            padding: `0px 0px !important`,
            paddingTop: `5px !important`,
            textAlign: `left`,
        },
        "& h3": {
            fontSize: `18px !important`,
            fontWeight: `bold !important`,
            padding: `0px 0px !important`,
            paddingTop: `5px !important`,
            textAlign: `left`,
        },
        "& h4": {
            fontSize: `16px !important`,
            fontWeight: `bold !important`,
            padding: `0px 0px !important`,
            paddingTop: `5px !important`,
            textAlign: `left`,
        },
        "& p": {
            fontSize: `16px !important`,
            fontWeight: `normal !important`,
            padding: `0px 0px !important`,
            paddingTop: `5px !important`,
            textAlign: `left`,
        },
    },
    waitingByCircle: {
        // marginTop: `25%`,
        position: `relative`,
        textAlign: `center`,
        background: `#fff !important`,
        width: `80% !important`,
        margin: `auto !important`,
        height: `90vh !important`,
        borderBottom: `1px solid #e0e0e0`,
        borderLeft: `1px solid #e0e0e0`,
        borderRight: `1px solid #e0e0e0`,
        boxShadow: `-10px 3px 10px #e0e0e0`,
        borderRadius: `5px`,
        // border: `1px solid #e0e0e0`,
    },
    backgroundLoading: {},
}));

const Question = (props) => {
    const classes = useStyles();
    const { match } = props;
    const id = match.params.id;
    const dp = useDispatch();

    const isQuestionLoading = useSelector(
        (state) => state.forum.isQuestionLoading
    );
    const threads = useSelector((state) => state.forum.threads);
    const answers = useSelector((state) => state.forum.answers);
    const isVerify = useSelector((state) => state.direct.isVerify);
    const question = useSelector((state) => state.forum.question);
    const objId = useSelector((state) => state.auth.account.objId);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [anchorEL, setAnchorEL] = useState(null);
    const open = useSelector((state) => state.forum.open);
    const isOpenDeleteThreadModal = useSelector(
        (state) => state.forum.isOpenDeleteThreadModal
    );

    const handleOpenModal = () => {
        dp(setNotify.setNotifySuccess(""));
        handleClose();
        dp(setOpenAskModal.setOpenAskModalSuccess(true));
    };
    const handleCloseModal = () => {
        dp(setNotify.setNotifySuccess(""));
        dp(setOpenAskModal.setOpenAskModalSuccess(false));
    };

    const handleOpen = useCallback((e) => {
        setAnchorEL(e.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEL(null);
    }, []);
    // const [question, setQuestion] = useState(-1);

    //     setQuestion(threads.find((thread) => thread._id === id));
    // let question;
    // if (threads.length) {
    //     question = threads.find((thread) => thread._id === id);
    // }

    useEffect(() => {
        if (threads.length <= 0) {
            dp(getThreads.getThreadsRequest({ match }));
        } else if (threads.length > 0) {
            var x = threads.find((thread) => thread._id === id);
            if (!x) {
                dp(push("/not-found/error"));
            } else {
                dp(
                    setQuestion.setQuestionSuccess(
                        // threads.find((thread) => thread._id === id)
                        x
                    )
                );
                dp(
                    setQuestionLoadingForum.setQuestionLoadingForumSuccess(
                        false
                    )
                );
            }

            // else {
            //     dp(push("/not-found/error"));
            // }
        }
        // else if (threads.length && question === null) {
        //     dp(push("/forum"));
        // }
    }, [threads, id, match]);
    const answersForThisQuestion = answers.filter(
        (answer) => id === answer.questionId && answer
    );

    console.log("question", question);

    const handleOpenDeleteThreadModal = () => {
        handleClose();
        dp(setNotify.setNotifySuccess(""));
        dp(openDeleteThreadModal.openDeleteThreadModalSuccess(true));
    };
    const handleCloseDeleteThreadModal = () => {
        dp(setNotify.setNotifySuccess(""));
        dp(openDeleteThreadModal.openDeleteThreadModalSuccess(false));
    };

    return (
        <Fragment>
            {isQuestionLoading ? (
                <Box className={cs(classes.waitingByCircle)}>
                    <div className={cs(classes.backgroundLoading)}>
                        <CircularProgress sx={{ marginTop: `25%` }} />
                    </div>
                </Box>
            ) : (
                <Fragment>
                    <DeleteThreadModal
                        isOpenDeleteThreadModal={isOpenDeleteThreadModal}
                        handleCloseDeleteThreadModal={
                            handleCloseDeleteThreadModal
                        }
                        handleOpenDeleteThreadModal={
                            handleOpenDeleteThreadModal
                        }
                        id={id}
                    />
                    <UpdateAskModal
                        handleOpen={handleOpenModal}
                        handleClose={handleCloseModal}
                        open={open}
                        question={question}
                        id={id}
                    />
                    <div className={cs(classes.mainContainer)}>
                        <div className={cs(classes.questionContainer)}>
                            {/* <div className={cs(classes.userInfo)}>
                    <div className={cs(classes.userInfoLeft)}></div>
                    <div className={cs(classes.userInfoRight)}></div>
                </div> */}
                            <Card sx={{ marginBottom: `8px` }}>
                                <CardContent>
                                    <Typography variant="p" color="textPrimary">
                                        <div
                                            className={cs(
                                                classes.questionTitle
                                            )}
                                        >
                                            <span
                                                className={cs(
                                                    classes.questionTitleCollapse
                                                )}
                                            >
                                                {question.title}
                                            </span>
                                        </div>
                                        <div>
                                            {
                                                // question.updatedAt
                                                //     .toString()
                                                //     .trim() ===
                                                // question.createdAt.toString().trim()
                                                //     ? moment(
                                                //           question.createdAt
                                                //       ).format("HH:MM MMM DD, YYYY")
                                                //     : moment(
                                                //           question.updatedAt
                                                //       ).format(
                                                //           "HH:MM MMM DD, YYYY"
                                                //       )
                                                moment(
                                                    question.createdAt
                                                ).format("HH:MM MMM DD, YYYY")
                                            }
                                        </div>
                                    </Typography>
                                    {/* <Typography
                            variant="body2"
                            component="p"
                            color="textSecondary"
                        >
                            ABC
                        </Typography> */}
                                </CardContent>
                            </Card>
                            <Card className={classes.cardQuestion}>
                                <CardHeader
                                    avatar={
                                        <Avatar>
                                            {" "}
                                            <CardMedia
                                                image={question.user.picture}
                                                title="Title"
                                                component="img"
                                                className={classes.media}
                                            />
                                        </Avatar>
                                    }
                                    // title={post.author}
                                    title={<span>{question.user.name}</span>}
                                    // subheader={moment(post.updatedAt).format(
                                    //     "HH:MM MMM DD, YYYY"
                                    // )}
                                    subheader={
                                        question.updatedAt.toString().trim() ===
                                        question.createdAt.toString().trim()
                                            ? `Asked at ${moment(
                                                  question.createdAt
                                              ).format("HH:MM MMM DD, YYYY")}`
                                            : `Updated at ${moment(
                                                  question.updatedAt
                                              ).format("HH:MM MMM DD, YYYY")}`
                                    }
                                    // action={<IconButton>{<MoreVertIcon />}</IconButton>}
                                    action={
                                        question.user.objId === objId &&
                                        isAuthenticated ? (
                                            <button
                                                className={cs(
                                                    "btn",
                                                    classes.moreInQuestion
                                                )}
                                                onClick={handleOpen}
                                            >
                                                <MoreVertIcon />
                                            </button>
                                        ) : (
                                            <button
                                                className={cs(
                                                    "btn",
                                                    classes.moreInQuestion
                                                )}
                                                onClick={() => {
                                                    window.scrollTo({
                                                        top: document
                                                            .documentElement
                                                            .scrollHeight,
                                                        // left: 100,
                                                        behavior: "smooth",
                                                    });
                                                    // setIsUpdating(null);
                                                }}
                                            >
                                                {" "}
                                                <QuestionAnswerIcon
                                                    sx={{
                                                        // background: `#fff !important`,
                                                        color: `#8167a9 !important`,
                                                    }}
                                                />
                                            </button>
                                        )
                                    }
                                    className={cs(classes.questionHeader)}
                                />
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEL}
                                    open={Boolean(anchorEL)}
                                    onClose={handleClose}
                                >
                                    {/* <MenuItem>
                                    <FavoriteIcon
                                        sx={{ marginRight: 1, marginTop: 0.7 }}
                                    />{" "}
                                    <Button>Hello</Button>
                                </MenuItem> */}
                                    <MenuItem onClick={handleOpenModal}>
                                        {" "}
                                        <span>
                                            <EditIcon
                                                fontSize="small"
                                                sx={{
                                                    marginRight: 1,
                                                    marginTop: 0.7,
                                                }}
                                            />
                                        </span>
                                        <Button>Update</Button>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={handleOpenDeleteThreadModal}
                                    >
                                        {" "}
                                        <span>
                                            <DeleteSweepIcon
                                                fontSize="small"
                                                sx={{
                                                    marginRight: 1,
                                                    marginTop: 0.7,
                                                }}
                                            />
                                        </span>
                                        <Button>Delete</Button>
                                    </MenuItem>
                                </Menu>

                                <CardContent>
                                    <Typography
                                        variant="p"
                                        color="textPrimary"
                                        className={cs(classes.textConfig)}
                                    >
                                        {parse(question.content)}
                                    </Typography>
                                    {/* <Typography
                            variant="body2"
                            component="p"
                            color="textSecondary"
                        >
                            ABC
                        </Typography> */}
                                </CardContent>
                                <CardActions
                                    className={cs(classes.cardActions)}
                                >
                                    <Typography
                                        component="span"
                                        color="textSecondary"
                                    >
                                        {question.likes}
                                    </Typography>
                                    <IconButton>
                                        <ThumbUpIcon />
                                    </IconButton>
                                    <Typography
                                        component="span"
                                        color="textSecondary"
                                    >
                                        {question.dislikes}
                                    </Typography>
                                    <IconButton>
                                        <ThumbDownIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                            <Answer answers={answersForThisQuestion} id={id} />
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};
export default Question;
