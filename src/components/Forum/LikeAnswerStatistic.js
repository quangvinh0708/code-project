import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import cs from "classnames";
import { makeStyles } from "@mui/styles";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Avatar, Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import { setCurrentObj, setDisplay } from "../../actions/messenger";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `400px`,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    outline: `none !important`,
    borderBottom: `1px solid #e0e0e0`,
    borderLeft: `1px solid #e0e0e0`,
    // borderRight: `1px solid #e0e0e0`,
    boxShadow: `-5px 3px 10px #e0e0e0`,
    borderRadius: `5px`,
    height: `520px`,
    ["@media(max-width: 767px)"]: {
        width: `95%`,
        margin: `auto`,

        p: 2,
    },
};
const useStyles = makeStyles((theme) => ({
    boxStatistic: {
        display: `flex`,
        justifyContent: `space-around`,
    },
    cardStatistic: {
        width: `100%`,
        marginBottom: `1px`,
        borderRadius: `none !important`,
        // borderBottom: `1px solid #888`,
        // borderLeft: `1px solid #888`,
    },
    more: {
        marginTop: `8px`,
    },
    iconButton: {
        "&:focus": {
            outline: `none !important`,
            border: `none !important`,
        },
    },
}));
export default function LikeAnswerStatistic({
    open,
    handleOpen,
    handleClose,
    likes,
    dislikes,
    viewStatus,
    setViewStatus,
    id,
    answer,
    handleOpenLoginRequire,
}) {
    const classes = useStyles();

    const [arrDisplay, setArrDisplay] = useState(likes);
    // console.log("Likes", likes);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const viewStatisticLike = () => {};
    const viewStatisticDislike = () => {};

    useEffect(() => {
        if (viewStatus === 0) {
            setArrDisplay(likes);
        } else {
            setArrDisplay(dislikes);
        }
    }, [likes, dislikes, viewStatus]);

    const rend = () => {
        var jsx = [];
        for (var i = 0; i < 20; i++) {
            jsx.push(
                <React.Fragment>
                    <Card
                        className={cs(classes.cardStatistic)}
                        key={likes.questionId}
                    >
                        <CardHeader
                            avatar={
                                <Avatar>
                                    {" "}
                                    <CardMedia
                                        image={likes.picture}
                                        title="Title"
                                        component="img"
                                        className={classes.media}
                                    />
                                </Avatar>
                            }
                            // title={post.author}
                            title={<span>{likes.name}</span>}
                            // subheader={moment(post.updatedAt).format(
                            //     "HH:MM MMM DD, YYYY"
                            // )}
                            subheader={moment(likes.updatedAt)
                                .tz("Asia/Ho_Chi_Minh")
                                .format("hh:m MMM DD, YYYY")}
                            // action={<IconButton>{<MoreVertIcon />}</IconButton>}
                            action={
                                isAuthenticated ? (
                                    <IconButton
                                        className={cs(classes.iconButton)}
                                        // onClick={handleOpen}
                                    >
                                        <MoreVertIcon
                                            className={cs(classes.more)}
                                        />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        className={cs(classes.moreInQuestion)}
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
                    </Card>
                </React.Fragment>
            );
        }
        return jsx;
    };

    const dp = useDispatch();

    const handleOpenChat = (objId) => {
        if (!isAuthenticated) {
            handleOpenLoginRequire();
            return;
        }
        dp(setCurrentObj.setCurrentObjSuccess(objId));
        dp(setDisplay.setDisplaySuccess(true));
        handleClose();
    };

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className={cs(classes.boxStatistic)}>
                            <Typography
                                id="transition-modal-title"
                                component="div"
                                sx={{
                                    fontFamily: `'Roboto Condensed', sans-serif`,
                                    borderBottom:
                                        viewStatus === 0 && `2px solid #1976D2`,
                                    cursor: `pointer !important`,
                                }}
                                onClick={() => setViewStatus(0)}
                                className={cs(classes.like)}
                            >
                                <IconButton
                                    sx={{
                                        color: viewStatus === 0 && "#1976D2",
                                        "&:focus": {
                                            outline: `none !important`,
                                            border: `none !important`,
                                        },
                                    }}
                                    // onClick={likeQuestion}

                                    // disabled={checkLiked() ? true : false}
                                >
                                    <ThumbUpIcon
                                        sx={{
                                            color:
                                                viewStatus === 0 && "#1976D2",
                                        }}
                                    />
                                </IconButton>
                                Like
                            </Typography>
                            <Typography
                                id="transition-modal-title"
                                component="div"
                                sx={{
                                    fontFamily: `'Roboto Condensed', sans-serif`,

                                    borderBottom:
                                        viewStatus === 1 && `2px solid #1976D2`,
                                    cursor: `pointer !important`,
                                }}
                                onClick={() => setViewStatus(1)}
                            >
                                <IconButton
                                    sx={{
                                        color: viewStatus === 1 && "#1976D2",
                                        "&:focus": {
                                            outline: `none !important`,
                                            border: `none !important`,
                                        },
                                    }}
                                >
                                    <ThumbDownIcon
                                        sx={{
                                            color:
                                                viewStatus === 1 && "#1976D2",
                                        }}
                                    />
                                </IconButton>
                                Dislike
                            </Typography>
                        </div>
                        <Typography
                            sx={{
                                mt: 1,
                                textAlign: `left !important`,
                                height: `90%`,

                                overflowY: `auto`,
                            }}
                            component="div"
                        >
                            {arrDisplay.length > 0 &&
                                arrDisplay.map(
                                    (people) =>
                                        people.answerId === answer?._id &&
                                        people.questionId === id && (
                                            <React.Fragment key={people._id}>
                                                <Card
                                                    className={cs(
                                                        classes.cardStatistic
                                                    )}
                                                >
                                                    <CardHeader
                                                        avatar={
                                                            <Avatar>
                                                                {" "}
                                                                <CardMedia
                                                                    image={
                                                                        people.picture
                                                                    }
                                                                    title="Title"
                                                                    component="img"
                                                                    className={
                                                                        classes.media
                                                                    }
                                                                />
                                                            </Avatar>
                                                        }
                                                        // title={post.author}
                                                        title={
                                                            <span>
                                                                {people.name}
                                                            </span>
                                                        }
                                                        // subheader={moment(post.updatedAt).format(
                                                        //     "HH:MM MMM DD, YYYY"
                                                        // )}
                                                        subheader={moment(
                                                            people.updatedAt
                                                        )
                                                            .tz(
                                                                "Asia/Ho_Chi_Minh"
                                                            )
                                                            .format(
                                                                "hh:m MMM DD, YYYY"
                                                            )}
                                                        // action={<IconButton>{<MoreVertIcon />}</IconButton>}
                                                        action={
                                                            isAuthenticated && (
                                                                // (
                                                                //     <IconButton
                                                                //         className={cs(
                                                                //             classes.iconButton
                                                                //         )}
                                                                //         // onClick={handleOpen}
                                                                //     >
                                                                //         <MoreVertIcon
                                                                //             className={cs(
                                                                //                 classes.more
                                                                //             )}
                                                                //         />
                                                                //     </IconButton>
                                                                // ) :
                                                                <IconButton
                                                                    className={cs(
                                                                        classes.moreInQuestion
                                                                    )}
                                                                    onClick={() =>
                                                                        handleOpenChat(
                                                                            people.objId
                                                                        )
                                                                    }
                                                                >
                                                                    {" "}
                                                                    <QuestionAnswerIcon
                                                                        sx={{
                                                                            // background: `#fff !important`,
                                                                            color: `#555 !important`,
                                                                        }}
                                                                    />
                                                                </IconButton>
                                                            )
                                                        }
                                                        className={cs(
                                                            classes.questionHeader
                                                        )}
                                                    />
                                                </Card>
                                            </React.Fragment>
                                        )
                                )}
                            {/* {rend()} */}

                            {/* <Link to="/login">
                                <Button
                                    sx={{
                                        fontSize: `17px`,
                                    }}
                                >
                                    Login
                                </Button>
                            </Link> */}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
