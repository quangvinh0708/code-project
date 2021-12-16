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
import moment from "moment";
import {
    createAnswer,
    deleteAnswer,
    openModalDeleteAnswer,
    setDeleteSuccess,
    setNotify,
    updateAnswer,
} from "../../actions/forum";
import CircularProgress from "@mui/material/CircularProgress";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import DeleteAnswerModal from "./DeleteAnswerModal";

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
}));

const Answer = (props) => {
    const [text, setText] = useState("");
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [isUpdating, setIsUpdating] = useState(null);

    const { answers, id } = props;
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const error = useSelector((state) => state.forum.error);
    const notify = useSelector((state) => state.forum.notify);
    const isCircleProgress = useSelector(
        (state) => state.forum.isCircleProgress
    );
    const objId = useSelector((state) => state.auth.account.objId);
    const classes = useStyles();
    const dp = useDispatch();
    console.log("cardAnswer", answers);

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

    return (
        <Fragment>
            <DeleteAnswerModal
                handleCloseDeleteModal={handleCloseDeleteModal}
                handleDeleteAnswer={handleDeleteAnswer}
            />
            {answers.length > 0 &&
                answers.map((answer) => (
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
                            title={answer.user.name}
                            subheader={
                                answer.updatedAt.toString().trim() ===
                                answer.createdAt.toString().trim()
                                    ? `Answer at ${moment(
                                          answer.createdAt
                                      ).format("HH:MM MMM DD, YYYY")}`
                                    : `Updated at ${moment(
                                          answer.updatedAt
                                      ).format("HH:MM MMM DD, YYYY")}`
                            }
                            // subheader={"24 Dec, 2021"}
                            // action={<IconButton>{<MoreVertIcon />}</IconButton>}
                            action={
                                answer.user.objId === objId ? (
                                    <button
                                        className={cs(
                                            "btn",
                                            classes.moreInQuestion
                                        )}
                                        onClick={(e) => handleOpen(e, answer)}
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
                            <Typography component="span" color="textSecondary">
                                {answer.likes}
                            </Typography>
                            <IconButton>
                                <ThumbUpIcon />
                            </IconButton>
                            <Typography component="span" color="textSecondary">
                                {answer.dislikes}
                            </Typography>
                            <IconButton>
                                <ThumbDownIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                ))}
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
                            Create
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
