import { Box, Button, CircularProgress, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Fragment, useEffect } from "react";

import cs from "classnames";
import { Link } from "react-router-dom";
import AskModal from "./AskModal";
import { useDispatch, useSelector } from "react-redux";
import {
    createThread,
    getThreads,
    setLoadingForum,
    setNotify,
    setOpenAskModal,
} from "../../actions/forum";
import moment from "moment";
import parse from "html-react-parser";
import Loading from "../Loading/Loading";

const useStyles = makeStyles((theme) => ({
    dividerB: {
        color: `#8167a9`,
        background: `#8167a9`,
        margin: `8px 0`,
        height: `7px`,
        borderRadius: `7px 7px`,
    },
    dividerS: {
        color: `#8167a9`,
        background: `#8167a9`,
        margin: `8px 0 15px 0`,
        height: `3px`,
        borderRadius: `7px 7px`,
    },
    forumContainer: {
        background: `#fff`,
    },
    threadList: {
        marginTop: `8px`,
        // ["@media(max-width:412px)"]: {
        //     width: `90% !important`,
        //     maxWidth: `90% !important`,
        //     // margin: `auto`,
        // },
    },
    mainContainer: {
        width: `80%`,
        margin: `auto`,
        marginTop: `9%`,
        minWidth: `500px !important`,
        height: `150vh`,
        ["@media(max-width:768px)"]: {
            width: `95%`,
            margin: `auto`,
        },
        ["@media(max-width:320px)"]: {
            width: `90%`,
            margin: `auto`,
        },
    },
    thread: {
        marginBottom: `1.2%`,
        // borderTop: `1px solid #e0e0e0`,
        borderBottom: `1px solid #e0e0e0`,
        borderLeft: `1px solid #e0e0e0`,
        borderRight: `1px solid #e0e0e0`,
        borderRadius: `8px 8px`,
        // padding: `15px`,
        display: `flex`,
        justifyContent: "space-between",
        boxSizing: `border-box`,
        width: `100%`,
        boxShadow: `0px 2px 2px #e0e0e0`,
    },
    threadTitle: {
        fontSize: "17px",
        fontWeight: 700,
        margin: "0",
        padding: "0",
        // color: "#8167a9",
        color: "#1976D2",
        boxSizing: `border-box`,

        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: "2",
        lineClamp: 2,
        WebkitBoxOrient: "vertical",

        paddingTop: `2px`,
        marginTop: `8px`,
        ["@media(max-width:768px)"]: {
            fontSize: `15px`,
        },
    },
    previewContent: {
        fontSize: "14px",
        margin: "0",
        padding: "0",
        color: "#191e1e",
        boxSizing: `border-box`,
        textAlign: `left !important`,

        ["@media(max-width:768px)"]: {
            fontSize: `10px !important`,
        },
    },
    replies: {
        fontSize: "12px",
        margin: "0",
        padding: "0",
        color: "#191e1e",
    },
    views: { fontSize: "12px", margin: "0", padding: "0", color: "#191e1e" },
    threadLeft: {
        position: `relative`,
        display: `flex`,
        flexDirection: `column`,
        width: `15%`,
        // padding: 0,
        // margin: 0,
        boxSizing: `border-box`,

        marginBottom: `7px`,

        ["@media(min-width:1502px)"]: {
            width: `unset !important`,
        },
        // ["@media(max-width:412px)"]: {
        //     display: `none`,
        //     // margin: `auto`,
        // },
    },
    threadRight: {
        position: `relative`,
        width: `85%`,
        marginLeft: `7px`,
        borderLeft: `1px solid #e0e0e0`,
        padding: `0px 15px`,
        marginTop: `8px`,
        ["@media(max-width:768px)"]: {
            marginLeft: `20px`,
        },
        // ["@media(max-width:412px)"]: {
        //     borderLeft: `unset`,
        //     marginLeft: `0`,
        //     // padding: `0`,

        //     // margin: `auto`,
        // },
    },
    userImage: {
        width: `85% !important`,
        height: `90px !important`,
        // margin: 0,
        // padding: 0,
        boxSizing: `border-box`,
        ["@media(min-width:1502px)"]: {
            width: `250px!important`,
            height: `auto !important`,
            padding: `15px`,
        },
        ["@media(max-width:1501px)"]: {
            width: `100% !important`,
            maxWidth: `120px !important`,
            height: `120px !important`,
            padding: `9px`,
            borderRadius: `50% !important`,
        },
        ["@media(max-width:768px)"]: {
            width: `100px !important`,
            height: `70px !important`,
        },

        ["@media(max-width:360px)"]: {
            display: `table !important`,
            boxSizing: `border-box`,
            width: `70px !important`,
            height: `50px !important`,
        },
    },
    userPostInfo: {
        fontSize: "12px",
        padding: "0",
        color: "#191e1e",
        boxSizing: `border-box`,
        // marginLeft: `8px`,
        padding: `0`,
        textAlign: `center`,
        whiteSpace: `nowrap`,
        ["@media(max-width:768px)"]: {
            fontSize: `8px`,
        },
    },
    textSpanCollapse: {
        display: `block`,
        // position: `absolute`,
        // whiteSpace: "nowrap",
        // overflow: "hidden",
        // textOverflow: "ellipsis",
        // maxWidth: "100ch",
        textAlign: `left !important`,
        marginTop: `4px`,
        marginLeft: `5px`,
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: "2",
        lineClamp: 2,
        WebkitBoxOrient: "vertical",
        "& h2, & h3, & h4, & p": {
            fontSize: `14px !important`,
            fontWeight: `normal !important`,
            padding: `0px 0px !important`,
            paddingTop: `5px !important`,
            textAlign: `left`,
        },
        "& table": {
            display: `none !important`,
        },
    },
    viewInfo: {
        marginTop: `15px`,
        position: `absolute`,
        bottom: `10px`,
        ["@media(max-width:1030px)"]: {
            position: `relative !important`,
            bottom: `none !important`,
        },
    },
    userInfoPreview: {
        marginTop: `4px`,
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
}));

const Forum = (props) => {
    const classes = useStyles();
    const open = useSelector((state) => state.forum.open);
    const threads = useSelector((state) => state.forum.threads);
    const isVerify = useSelector((state) => state.direct.isVerify);
    const isLoading = useSelector((state) => state.forum.isLoading);

    const dp = useDispatch();

    const handleOpen = () => {
        dp(setOpenAskModal.setOpenAskModalSuccess(true));
    };
    const handleClose = () => {
        dp(setNotify.setNotifySuccess(""));

        dp(setOpenAskModal.setOpenAskModalSuccess(false));
    };

    // useEffect(() => {
    //     dp(getThreads.getThreadsRequest());
    // }, []);

    function ChangeToSlug(title) {
        var slug;

        //Lấy text từ thẻ input title

        //Đổi chữ hoa thành chữ thường
        slug = title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
        return slug;
    }

    useEffect(() => {
        if (!threads.length) {
            dp(setLoadingForum.setLoadingForumRequest());
            dp(
                getThreads.getThreadsRequest({
                    match: null,
                })
            );
        }
    }, [threads]);

    return (
        <Fragment>
            {
                // isVerify && !threads.length ? (
                //     <Loading />
                // )
                isLoading ? (
                    <Box className={cs(classes.waitingByCircle)}>
                        <div className={cs(classes.backgroundLoading)}>
                            <CircularProgress sx={{ marginTop: `25%` }} />
                        </div>
                    </Box>
                ) : (
                    <Fragment>
                        <AskModal
                            open={open}
                            handleOpen={handleOpen}
                            handleClose={handleClose}
                            // handleCreate={handleCreate}
                        />
                        <div className={cs(classes.mainContainer)}>
                            <div className={cs(classes.forumContainer)}>
                                <div>
                                    <Button onClick={handleOpen}>
                                        Ask question
                                    </Button>
                                </div>
                                <Divider className={classes.dividerS} />
                                <div className={cs(classes.threadList)}>
                                    {threads.map((thread) => {
                                        return (
                                            <div
                                                className={cs(classes.thread)}
                                                key={thread._id}
                                            >
                                                <div
                                                    className={cs(
                                                        classes.threadLeft
                                                    )}
                                                >
                                                    <div>
                                                        <img
                                                            src={
                                                                thread.user
                                                                    .picture
                                                            }
                                                            alt=""
                                                            className={cs(
                                                                classes.userImage
                                                            )}
                                                        />
                                                    </div>

                                                    <div
                                                        className={cs(
                                                            classes.userInfoPreview
                                                        )}
                                                    >
                                                        <div
                                                            className={cs(
                                                                classes.userPostInfo
                                                            )}
                                                        >
                                                            <span
                                                                style={{
                                                                    display: `inline-block`,
                                                                    whiteSpace:
                                                                        "nowrap",
                                                                    overflow:
                                                                        "hidden",
                                                                    textOverflow:
                                                                        "ellipsis",
                                                                    maxWidth:
                                                                        "19ch",
                                                                    // fontSize: "15px",
                                                                    // marginTop: `17px !important`,
                                                                }}
                                                            >
                                                                by{" "}
                                                                {
                                                                    thread.user
                                                                        .name
                                                                }
                                                            </span>
                                                        </div>
                                                        <div
                                                            className={cs(
                                                                classes.userPostInfo
                                                            )}
                                                        >
                                                            {moment(
                                                                thread.updatedAt
                                                            ).format(
                                                                "HH:MM MMM DD, YYYY"
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={cs(
                                                        classes.threadRight
                                                    )}
                                                >
                                                    <Link
                                                        to={`/questions/${ChangeToSlug(
                                                            thread.title
                                                        )}/${thread._id}/1`}
                                                    >
                                                        <div
                                                            className={cs(
                                                                classes.threadTitle
                                                            )}
                                                        >
                                                            {thread.title}
                                                        </div>
                                                    </Link>
                                                    <div
                                                        className={cs(
                                                            classes.previewContent
                                                        )}
                                                    >
                                                        <span
                                                            className={cs(
                                                                classes.textSpanCollapse
                                                            )}
                                                            style={{
                                                                overflow:
                                                                    "hidden",
                                                                textOverflow:
                                                                    "ellipsis",
                                                                display:
                                                                    "-webkit-box",
                                                                WebkitLineClamp:
                                                                    "2",
                                                                lineClamp: 2,
                                                                WebkitBoxOrient:
                                                                    "vertical",
                                                            }}
                                                        >
                                                            {parse(
                                                                thread.content
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div
                                                        className={cs(
                                                            classes.viewInfo
                                                        )}
                                                    >
                                                        {" "}
                                                        <div
                                                            className={cs(
                                                                classes.replies
                                                            )}
                                                        >
                                                            Replies:{" "}
                                                            {thread.replies}
                                                        </div>
                                                        <div
                                                            className={cs(
                                                                classes.views
                                                            )}
                                                        >
                                                            Views:{" "}
                                                            {thread.views}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default Forum;
