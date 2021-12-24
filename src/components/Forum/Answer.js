import { makeStyles } from "@mui/styles";
import React, { Fragment, useCallback, useState } from "react";
import cs from "classnames";
import {
    Alert,
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    CssBaseline,
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
import Text from "./Text";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import moment from "moment-timezone";

import {
    createAnswer,
    deleteAnswer,
    dislikeAnswer,
    likeAnswer,
    openModalDeleteAnswer,
    setDeleteSuccess,
    setNotify,
    updateAnswer,
} from "../../actions/forum";
import CircularProgress from "@mui/material/CircularProgress";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import DeleteAnswerModal from "./DeleteAnswerModal";
import LoginRequire from "./LoginRequire";
import LikeAnswerStatistic from "./LikeAnswerStatistic";
import { useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { setCurrentObj, setDisplay } from "../../actions/messenger";
const useStyles = makeStyles((theme) => ({
    questionContainer: {
        background: `#fff`,
    },
    mainContainer: {
        width: `80%`,
        margin: `auto`,
        minWidth: `500px !important`,
        marginTop: `10% !important`,
    },
    userInfo: {
        display: `flex`,
    },
    cardQuestion: {
        marginBottom: `1.5%`,
    },
    media: {
        height: `auto !important`,
        width: `100%`,
    },
    questionHeader: {
        borderBottom: `1px solid rgba(26, 54, 126, 0.2)`,
        // background: `#98DBC6`,
        "&:hover": {
            background: `rgba(224, 224, 224, 40%) !important`,
        },
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
        display: `block`,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "70ch",
    },
    textEdit: {
        fontSize: `none`,
        textAlign: `none !important`,
    },
    moreInQuestion: {
        marginTop: `12px`,
    },
    answerContent: {
        "& h2": {
            fontSize: `22px !important`,
            fontWeight: `bold !important`,
            padding: `0px 0px !important`,
            margin: `0 !important`,
            paddingTop: `5px !important`,
            textAlign: `left`,
        },
        "& h3": {
            fontSize: `18px !important`,
            fontWeight: `bold !important`,
            padding: `0px 0px !important`,
            margin: `0 !important`,
            paddingTop: `5px !important`,
            textAlign: `left`,
        },
        "& h4": {
            fontSize: `16px !important`,
            fontWeight: `bold !important`,
            margin: `0 !important`,
            padding: `0px 0px !important`,
            paddingTop: `5px !important`,
            textAlign: `left`,
        },
        "& p": {
            textAlign: "left",
            margin: 0,
            padding: 0,
        },
    },
    navigateBox: {
        width: `100%`,
        textAlign: `center`,
        ["@media(max-width: 380px)"]: {
            fontSize: `12px !important`,
            whiteSpace: `nowrap`,
        },
    },
    linkNavigate: {
        width: `100%`,
        padding: 7,
        fontSize: `17px`,
        margin: 0,
    },
    spanNavigate: {
        ["@media(max-width: 380px)"]: {
            fontSize: `15px !important`,
        },
    },
}));

const Answer = (props) => {
    const [text, setText] = useState("");
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [isUpdating, setIsUpdating] = useState(null);

    const { answers, id, ChangeToSlug } = props;
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const isAdmin = useSelector((state) => state.auth.account.isAdmin);

    const likes = useSelector((state) => state.forum.likes);
    const dislikes = useSelector((state) => state.forum.dislikes);
    const question = useSelector((state) => state.forum.question);

    const error = useSelector((state) => state.forum.error);
    const notify = useSelector((state) => state.forum.notify);
    const isCircleProgress = useSelector(
        (state) => state.forum.isCircleProgress
    );
    const objId = useSelector((state) => state.auth.account.objId);
    const classes = useStyles();
    const dp = useDispatch();
    console.log("cardAnswer", answers);

    const [answerArray, setAnswerArray] = useState(answers);
    const { match } = props;
    const page = Number(match.params.page);

    let perPage = 3;
    let start = perPage * (page - 1);
    let end = page * perPage;
    console.log("page answers", page);

    useEffect(() => {
        setAnswerArray(answers.slice(start, end));
    }, [match, page, answers, question]);

    const navigate = () => {
        let jsx = [];
        if (page === 1) {
            for (var i = page; i <= page + 2; i++) {
                jsx.push(
                    <Button
                        key={i}
                        color="secondary"
                        disabled={(i - 1) * perPage >= answers.length}
                        sx={{
                            padding: 0,
                            display:
                                (i - 1) * perPage >= answers.length && `none`,
                        }}
                    >
                        <Link
                            to={`/questions/${ChangeToSlug(question.title)}/${
                                question._id
                            }/${i}`}
                            style={{
                                width: `100%`,
                                padding: 7,
                                fontSize: `17px`,
                                margin: 0,
                            }}
                        >
                            <span
                                className={cs(classes.spanNavigate)}
                                style={{
                                    width: `100%`,
                                    display: `block`,
                                    color: page === i && `#FFFFFF`,
                                    background: page === i && `#1976D2`,
                                }}
                            >
                                {i}
                            </span>
                        </Link>
                    </Button>
                );
            }
            return jsx;
        }
        for (var i = page - 1; i <= page + 1; i++) {
            jsx.push(
                <Button
                    key={i}
                    color="secondary"
                    disabled={(i - 1) * perPage >= answers.length}
                    sx={{
                        padding: 0,
                        display: (i - 1) * perPage >= answers.length && `none`,
                    }}
                >
                    <Link
                        to={`/questions/${ChangeToSlug(question.title)}/${
                            question._id
                        }/${i}`}
                        style={{
                            width: `100%`,
                            padding: 7,
                            fontSize: `17px`,
                            margin: 0,
                        }}
                    >
                        <span
                            className={cs(classes.spanNavigate)}
                            style={{
                                width: `100%`,
                                display: `block`,
                                background: page === i && `#1976D2`,
                                color: page === i && `#FFFFFF`,
                            }}
                        >
                            {i}
                        </span>
                    </Link>
                </Button>
            );
        }
        return jsx;
    };

    const [anchorEL, setAnchorEL] = useState(null);
    const handleOpen = (e, answer) => {
        setAnchorEL(e.currentTarget);
        setCurrentAnswer(answer);
    };

    const handleClose = useCallback(() => {
        setAnchorEL(null);
    }, []);

    const handleCreateAnswer = () => {
        dp(createAnswer.createAnswerRequest({ text, id }));
    };

    const handleUpdateAnswer = (answer) => {
        dp(setNotify.setNotifySuccess(""));
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            // left: 100,
            behavior: "smooth",
        });
        setText(currentAnswer.content);
        setIsUpdating(true);
        // console.log("answer.content", answer._id);
        handleClose();
    };

    const handleCancelUpdate = () => {
        setIsUpdating(false);
        setText("");
        // setCurrentAnswer(null);
    };

    const handleUpdateRequest = () => {
        dp(updateAnswer.updateAnswerRequest({ text, currentAnswer }));
    };

    const handleDeleteAnswer = () => {
        dp(deleteAnswer.deleteAnswerRequest({ currentAnswer }));
    };

    const handleOpenDeleteModal = () => {
        handleClose();
        dp(setNotify.setNotifySuccess(""));
        dp(openModalDeleteAnswer.openModalDeleteAnswerSuccess(true));
        setIsUpdating(false);
        setText("");
    };

    const handleCloseDeleteModal = () => {
        dp(setDeleteSuccess.setDeleteSuccessSuccess(false));
        dp(openModalDeleteAnswer.openModalDeleteAnswerSuccess(false));
        dp(setNotify.setNotifySuccess(""));
    };

    const checkLiked = (answer) => {
        let check;
        check = likes.find(
            (like) =>
                like.objId === objId &&
                like.questionId === answer.questionId &&
                like.answerId === answer._id
        );
        console.log("CHECKliked", check);
        return check;
    };

    const checkDisliked = (answer) => {
        let check;
        check = dislikes.find(
            (dislike) =>
                dislike.objId === objId &&
                dislike.questionId === answer.questionId &&
                dislike.answerId === answer._id
        );
        return check;
    };

    const handleLikeAnswer = (answer) => {
        if (!isAuthenticated) {
            handleOpenLoginRequire();
        } else {
            dp(
                likeAnswer.likeAnswerRequest({
                    questionId: question._id,
                    objId,
                    answerId: answer._id,
                })
            );
        }
    };

    const handleDislikeAnswer = (answer) => {
        if (!isAuthenticated) {
            handleOpenLoginRequire();
        } else {
            dp(
                dislikeAnswer.dislikeAnswerRequest({
                    questionId: question._id,
                    objId,
                    answerId: answer._id,
                })
            );
        }
    };

    const [openLoginRequire, setOpenLoginRequire] = React.useState(false);
    const handleOpenLoginRequire = () => setOpenLoginRequire(true);
    const handleCloseLoginRequire = () => setOpenLoginRequire(false);

    const [viewStatus, setViewStatus] = React.useState(0);
    const [openLikeQuestionStatistic, setOpenLikeQuestionStatistic] =
        React.useState(false);

    const [checkCondition, setCheckCondition] = React.useState("");

    const handleOpenLikeQuestionStatistic = (x, answer) => {
        setViewStatus(x);
        setCurrentAnswer(answer);
        setOpenLikeQuestionStatistic(true);
    };
    const handleCloseLikeQuestionStatistic = () => {
        setOpenLikeQuestionStatistic(false);
    };

    const handleOpenChat = (objId) => {
        if (!isAuthenticated) {
            handleOpenLoginRequire();
            return;
        }
        dp(setCurrentObj.setCurrentObjSuccess(objId));
        dp(setDisplay.setDisplaySuccess(true));
    };

    return (
        <Fragment>
            <LoginRequire
                open={openLoginRequire}
                handleOpen={handleOpenLoginRequire}
                handleClose={handleCloseLoginRequire}
            />
            <LikeAnswerStatistic
                id={id}
                viewStatus={viewStatus}
                setViewStatus={setViewStatus}
                likes={likes}
                dislikes={dislikes}
                open={openLikeQuestionStatistic}
                handleOpen={handleOpenLikeQuestionStatistic}
                handleClose={handleCloseLikeQuestionStatistic}
                answer={currentAnswer}
            />
            <DeleteAnswerModal
                handleCloseDeleteModal={handleCloseDeleteModal}
                handleDeleteAnswer={handleDeleteAnswer}
            />
            {answers.length > 0 &&
                // answers.map((answer) => (
                answerArray.map((answer) => (
                    <Card className={classes.cardQuestion} key={answer._id}>
                        <CardHeader
                            avatar={
                                <Avatar>
                                    {" "}
                                    <CardMedia
                                        image={answer.user.picture}
                                        title="Title"
                                        component="img"
                                        className={classes.media}
                                    />
                                </Avatar>
                            }
                            // title={post.author}
                            title={
                                <span
                                    style={{ cursor: `pointer` }}
                                    onClick={() => handleOpenChat(answer.objId)}
                                >
                                    {answer.user.name}
                                </span>
                            }
                            subheader={`Answer at ${moment(answer.createdAt)
                                .tz("Asia/Ho_Chi_Minh")
                                .format("hh:m MMM DD, YYYY")}`}
                            // subheader={"24 Dec, 2021"}
                            // action={<IconButton>{<MoreVertIcon />}</IconButton>}
                            action={
                                (answer.user.objId === objId &&
                                    isAuthenticated) ||
                                (isAdmin && isAuthenticated) ? (
                                    <IconButton
                                        className={cs(
                                            "btn",
                                            classes.moreInQuestion
                                        )}
                                        onClick={(e) => handleOpen(e, answer)}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        className={cs(
                                            "btn",
                                            classes.moreInQuestion
                                        )}
                                        onClick={() => {
                                            window.scrollTo({
                                                top: document.documentElement
                                                    .scrollHeight,
                                                // left: 100,
                                                behavior: "smooth",
                                            });
                                            setIsUpdating(null);
                                        }}
                                    >
                                        {" "}
                                        <QuestionAnswerIcon
                                            sx={{
                                                // background: `#fff !important`,
                                                color: `#8167a9 !important`,
                                            }}
                                        />
                                    </IconButton>
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
                                <Button>
                                    Hello Đan Phượng của anh...${"<3"}{" "}
                                </Button>
                            </MenuItem> */}
                            <MenuItem onClick={handleUpdateAnswer}>
                                <span>
                                    <EditIcon
                                        fontSize="small"
                                        sx={{ marginRight: 1, marginTop: 0.7 }}
                                    />
                                </span>
                                <Button>Update</Button>
                            </MenuItem>
                            <MenuItem onClick={handleOpenDeleteModal}>
                                {" "}
                                <span>
                                    <DeleteSweepIcon
                                        fontSize="small"
                                        sx={{ marginRight: 1, marginTop: 0.7 }}
                                    />
                                </span>
                                <Button>Delete</Button>
                            </MenuItem>
                        </Menu>

                        <CardContent>
                            <Typography
                                variant="p"
                                color="textPrimary"
                                className={cs(classes.answerContent)}
                            >
                                {parse(answer.content)}
                            </Typography>
                            {/* <Typography
                            variant="body2"
                            component="p"
                            color="textSecondary"
                        >
                            ABC
                        </Typography> */}
                        </CardContent>
                        <CardActions className={cs(classes.cardActions)}>
                            <Typography
                                component="span"
                                color="textSecondary"
                                sx={{
                                    marginLeft: `5px`,
                                    cursor: `pointer`,
                                    "&:hover": {
                                        color: `#1976D2`,
                                        borderBottom: `1px solid #1976D2`,
                                        fontSize: `20px`,
                                        transition: `all .5s`,
                                    },
                                }}
                                onClick={() =>
                                    handleOpenLikeQuestionStatistic(0, answer)
                                }
                            >
                                {answer.likes}
                            </Typography>
                            <IconButton
                                sx={{ marginLeft: `5px` }}
                                onClick={() => handleLikeAnswer(answer)}
                            >
                                <ThumbUpIcon
                                    sx={{
                                        color: checkLiked(answer)
                                            ? "#1976D2"
                                            : "unset !important",
                                    }}
                                />
                            </IconButton>
                            <Typography
                                component="span"
                                color="textSecondary"
                                onClick={() =>
                                    handleOpenLikeQuestionStatistic(1, answer)
                                }
                                sx={{
                                    marginLeft: `5px`,
                                    cursor: `pointer`,
                                    "&:hover": {
                                        color: `#1976D2`,
                                        borderBottom: `1px solid #1976D2`,
                                        fontSize: `20px`,
                                        transition: `all .5s`,
                                    },
                                }}
                            >
                                {answer.dislikes}
                            </Typography>
                            <IconButton
                                onClick={() => handleDislikeAnswer(answer)}
                            >
                                <ThumbDownIcon
                                    sx={{
                                        color: checkDisliked(answer)
                                            ? "#1976D2"
                                            : "unset !important",
                                    }}
                                />
                            </IconButton>
                        </CardActions>
                    </Card>
                ))}

            {answers.length > perPage && (
                <div className={cs(classes.navigateBox)}>
                    <Button
                        disabled={start <= 0}
                        color="secondary"
                        sx={{
                            padding: 0,
                            ["@media(max-width: 380px)"]: {
                                display: `none`,
                            },
                        }}
                    >
                        <Link
                            to={`/questions/${ChangeToSlug(question.title)}/${
                                question._id
                            }/${page - 1}`}
                            style={{
                                width: `100%`,
                                display: `block`,
                                padding: 5,
                                margin: 0,
                            }}
                        >
                            <ArrowBackIosNewIcon
                                sx={{
                                    width: `100%`,
                                    display: `block`,
                                }}
                            />
                        </Link>
                    </Button>
                    {navigate()}

                    <Button
                        color="secondary"
                        disabled={end >= answers.length}
                        sx={{
                            padding: 0,
                            ["@media(max-width: 380px)"]: {
                                display: `none`,
                            },
                        }}
                    >
                        <Link
                            to={`/questions/${ChangeToSlug(question.title)}/${
                                question._id
                            }/${page + 1}`}
                            style={{
                                width: `100%`,
                                display: `block`,
                                padding: 5,
                                margin: 0,
                            }}
                        >
                            <ArrowForwardIosIcon
                                sx={{
                                    width: `100%`,
                                    display: `block`,
                                }}
                            />
                        </Link>
                    </Button>
                </div>
            )}

            {isAuthenticated ? (
                <Fragment>
                    <Text
                        title={"Your answer"}
                        text={text}
                        setText={setText}
                        currentAnswer={currentAnswer}
                        setCurrentAnswer={setCurrentAnswer}
                        handleCancelUpdate={handleCancelUpdate}
                    />

                    {isCircleProgress ? (
                        <Box
                            sx={{
                                textAlign: `center`,
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    ) : (
                        notify && (
                            <Alert
                                variant="outlined"
                                severity={!error ? "success" : "warning"}
                            >
                                {notify}
                            </Alert>
                        )
                    )}
                    {!isUpdating ? (
                        <Button
                            variant="contained"
                            onClick={handleCreateAnswer}
                            sx={{
                                textAlign: `center`,
                                marginBottom: `3%`,
                                marginTop: `12px`,
                            }}
                        >
                            Answer
                        </Button>
                    ) : (
                        <Fragment>
                            <Button
                                variant="contained"
                                onClick={handleUpdateRequest}
                                sx={{
                                    textAlign: `center`,
                                    marginBottom: `3%`,
                                    marginTop: `12px`,
                                }}
                            >
                                Update
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleCancelUpdate}
                                sx={{
                                    textAlign: `center`,
                                    marginBottom: `3%`,
                                    marginTop: `12px`,
                                    marginLeft: `1%`,
                                }}
                                color="warning"
                            >
                                Cancel
                            </Button>
                        </Fragment>
                    )}
                </Fragment>
            ) : (
                <Fragment>
                    <div
                        style={{
                            textAlign: `center`,
                            marginBottom: `50px`,
                            marginTop: `12px`,
                        }}
                    >
                        <Typography component="span" color="textSecondary">
                            You need to login to answer about this question!
                        </Typography>
                        <Link to="/login" style={{ textDecoration: `none` }}>
                            <Button style={{ fontSize: `15px` }}>Login</Button>
                        </Link>
                    </div>
                </Fragment>
            )}
            {/* <div className={cs(classes.textEdit)}>
                <CKEditor
                    editor={ClassicEditor}
                    data={text}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setText(data);
                    }}
                />
            </div> */}
        </Fragment>
    );
};
export default Answer;
