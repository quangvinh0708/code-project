import {
    Box,
    Button,
    CircularProgress,
    Divider,
    Grid,
    IconButton,
    Avatar,
    CardHeader,
    CardMedia,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Fragment, useEffect, useState } from "react";

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
    setThread,
} from "../../actions/forum";
// import moment from "moment";
import moment from "moment-timezone";

import parse from "html-react-parser";
import Loading from "../Loading/Loading";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LoginRequire from "./LoginRequire";

// const useStyles = makeStyles((theme) => ({
//     dividerB: {
//         color: `#8167a9`,
//         background: `#8167a9`,
//         margin: `8px 0`,
//         height: `7px`,
//         borderRadius: `7px 7px`,
//     },
//     dividerS: {
//         color: `#8167a9`,
//         background: `#8167a9`,
//         margin: `8px 0 15px 0`,
//         height: `3px`,
//         borderRadius: `7px 7px`,

//         margin: `auto !important`,
//         width: `95% !important`,
//         background: `#1976D2`,
//     },
//     forumContainer: {
//         // background: `#fff`,
//         marginBottom: `9%`,
//     },
//     threadList: {
//         width: `95%`,
//         margin: `2% auto`,

//         // ["@media(max-width:412px)"]: {
//         //     width: `90% !important`,
//         //     maxWidth: `90% !important`,
//         //     // margin: `auto`,
//         // },
//     },
//     mainContainer: {
//         width: `80%`,
//         margin: `auto`,
//         marginTop: `9%`,
//         // minWidth: `500px !important`,

//         width: `80% !important`,

//         // height: `150vh`,
//         height: `100%`,

//         // background: `#fff`,
//         borderBottom: `1px solid #e0e0e0`,
//         borderLeft: `1px solid #e0e0e0`,
//         // borderRight: `1px solid #e0e0e0`,
//         // boxShadow: `-10px 7px 10px #e0e0e0`,
//         boxShadow: `-5px -5px 10px 9px #e0e0e0`,
//         // boxShadow: `0 0 5px 2px #000`,
//         borderRadius: `5px`,

//         // marginBottom: `5%`,

//         ["@media(max-width:768px)"]: {
//             // width: `95%`,
//             // margin: `auto`,

//             width: `95% !important`,
//             margin: `auto !important`,
//             borderBottom: `1px solid #e0e0e0`,
//             borderLeft: `1px solid #e0e0e0`,
//             // borderRight: `1px solid #e0e0e0`,
//             boxShadow: `-10px 3px 10px #e0e0e0`,
//             borderRadius: `5px`,
//         },
//         ["@media(max-width:320px)"]: {
//             width: `90% !important`,
//             margin: `auto !important`,
//             borderBottom: `1px solid #e0e0e0`,
//             borderLeft: `1px solid #e0e0e0`,
//             // borderRight: `1px solid #e0e0e0`,
//             boxShadow: `-10px 3px 10px #e0e0e0`,
//             borderRadius: `5px`,
//         },
//     },
//     thread: {
//         marginBottom: `1.2%`,
//         // borderTop: `1px solid #e0e0e0`,
//         borderBottom: `1px solid #e0e0e0`,
//         borderLeft: `1px solid #e0e0e0`,
//         borderRight: `1px solid #e0e0e0`,
//         borderRadius: `8px 8px`,
//         // padding: `15px`,
//         display: `flex`,
//         justifyContent: "space-between",
//         boxSizing: `border-box`,
//         width: `100%`,
//         boxShadow: `0px 2px 2px #e0e0e0`,
//     },
//     threadTitle: {
//         fontSize: "17px",
//         fontWeight: 700,
//         margin: "0",
//         padding: "0",
//         // color: "#8167a9",
//         color: "#1976D2",
//         boxSizing: `border-box`,

//         overflow: "hidden",
//         textOverflow: "ellipsis",
//         display: "-webkit-box",
//         WebkitLineClamp: "2",
//         lineClamp: 2,
//         WebkitBoxOrient: "vertical",

//         paddingTop: `2px`,
//         marginTop: `8px`,
//         ["@media(max-width:768px)"]: {
//             fontSize: `15px`,
//         },
//     },
//     previewContent: {
//         fontSize: "14px",
//         margin: "0",
//         padding: "0",
//         color: "#191e1e",
//         boxSizing: `border-box`,
//         textAlign: `left !important`,

//         ["@media(max-width:768px)"]: {
//             fontSize: `10px !important`,
//         },
//     },
//     replies: {
//         fontSize: "12px",
//         margin: "0",
//         padding: "0",
//         color: "#191e1e",
//     },
//     views: { fontSize: "12px", margin: "0", padding: "0", color: "#191e1e" },
//     threadLeft: {
//         position: `relative`,
//         display: `flex`,
//         flexDirection: `column`,
//         width: `15%`,
//         // padding: 0,
//         // margin: 0,
//         boxSizing: `border-box`,

//         marginBottom: `7px`,

//         ["@media(min-width:1502px)"]: {
//             width: `unset !important`,
//         },
//         // ["@media(max-width:412px)"]: {
//         //     display: `none`,
//         //     // margin: `auto`,
//         // },
//     },
//     threadRight: {
//         position: `relative`,
//         width: `85%`,
//         marginLeft: `7px`,
//         borderLeft: `1px solid #e0e0e0`,
//         padding: `0px 15px`,
//         marginTop: `8px`,
//         ["@media(max-width:768px)"]: {
//             marginLeft: `20px`,
//         },
//         // ["@media(max-width:412px)"]: {
//         //     borderLeft: `unset`,
//         //     marginLeft: `0`,
//         //     // padding: `0`,

//         //     // margin: `auto`,
//         // },
//     },
//     userImage: {
//         width: `85% !important`,
//         height: `90px !important`,
//         // margin: 0,
//         // padding: 0,
//         boxSizing: `border-box`,
//         ["@media(min-width:1502px)"]: {
//             width: `250px!important`,
//             height: `auto !important`,
//             padding: `15px`,
//         },
//         ["@media(max-width:1501px)"]: {
//             width: `100% !important`,
//             maxWidth: `120px !important`,
//             height: `120px !important`,
//             padding: `9px`,
//             borderRadius: `50% !important`,
//         },
//         ["@media(max-width:768px)"]: {
//             width: `100px !important`,
//             height: `70px !important`,
//         },

//         ["@media(max-width:360px)"]: {
//             display: `table !important`,
//             boxSizing: `border-box`,
//             width: `70px !important`,
//             height: `50px !important`,
//         },
//     },
//     userPostInfo: {
//         fontSize: "12px",
//         padding: "0",
//         color: "#191e1e",
//         boxSizing: `border-box`,
//         // marginLeft: `8px`,
//         padding: `0`,
//         textAlign: `center`,
//         whiteSpace: `nowrap`,
//         ["@media(max-width:768px)"]: {
//             fontSize: `8px`,
//         },
//     },
//     textSpanCollapse: {
//         display: `block`,
//         // position: `absolute`,
//         // whiteSpace: "nowrap",
//         // overflow: "hidden",
//         // textOverflow: "ellipsis",
//         // maxWidth: "100ch",
//         textAlign: `left !important`,
//         marginTop: `4px`,
//         marginLeft: `5px`,
//         overflow: "hidden",
//         textOverflow: "ellipsis",
//         display: "-webkit-box",
//         WebkitLineClamp: "2",
//         lineClamp: 2,
//         WebkitBoxOrient: "vertical",
//         "& h2, & h3, & h4, & p": {
//             fontSize: `14px !important`,
//             fontWeight: `normal !important`,
//             padding: `0px 0px !important`,
//             paddingTop: `5px !important`,
//             textAlign: `left`,
//         },
//         "& table": {
//             display: `none !important`,
//         },
//     },
//     viewInfo: {
//         marginTop: `15px`,
//         position: `absolute`,
//         bottom: `10px`,
//         ["@media(max-width:1030px)"]: {
//             position: `relative !important`,
//             bottom: `none !important`,
//         },
//     },
//     userInfoPreview: {
//         marginTop: `4px`,
//     },
//     waitingByCircle: {
//         // marginTop: `25%`,
//         position: `relative`,
//         textAlign: `center`,
//         background: `#fff !important`,
//         width: `80% !important`,
//         margin: `auto !important`,
//         height: `90vh !important`,
//         borderBottom: `1px solid #e0e0e0`,
//         borderLeft: `1px solid #e0e0e0`,
//         borderRight: `1px solid #e0e0e0`,
//         boxShadow: `-10px 3px 10px #e0e0e0`,
//         borderRadius: `5px`,
//         // border: `1px solid #e0e0e0`,
//     },
//     search: {
//         width: "100%",
//         boxSizing: "border-box",
//         border: "2px solid #ccc",
//         borderRadius: "4px",
//         fontSize: "16px",
//         backgroundColor: "white",
//         backgroundPosition: "10px 10px",
//         backgroundRepeat: "no-repeat",
//         height: `20px`,
//     },
//     boxSearch: {
//         // top: `20%`,
//         height: `15px`,
//     },
//     groupInput: {},
// }));

const Forum = (props) => {
    const open = useSelector((state) => state.forum.open);
    const threads = useSelector((state) => state.forum.threads);
    const isVerify = useSelector((state) => state.direct.isVerify);
    const isLoading = useSelector((state) => state.forum.isLoading);
    const [openSearch, setOpenSearch] = useState(false);

    const handleOpenSearch = () => {
        setOpenSearch(!openSearch);
    };
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

            margin: `auto !important`,
            width: `95% !important`,
            background: `#1976D2`,
        },
        forumContainer: {
            // background: `#fff`,
            marginBottom: `5%`,
        },
        threadList: {
            width: `95%`,
            margin: `2% auto`,

            // ["@media(max-width:412px)"]: {
            //     width: `90% !important`,
            //     maxWidth: `90% !important`,
            //     // margin: `auto`,
            // },
        },
        mainContainer: {
            width: `80%`,
            margin: `auto`,
            marginTop: `9% !important`,
            // minWidth: `500px !important`,

            width: `80% !important`,

            // height: `150vh`,
            height: `100%`,

            // background: `#fff`,
            borderBottom: `1px solid #e0e0e0`,
            borderLeft: `1px solid #e0e0e0`,
            // borderRight: `1px solid #e0e0e0`,
            // boxShadow: `-10px 7px 10px #e0e0e0`,
            boxShadow: `-5px -5px 10px 9px #e0e0e0`,
            // boxShadow: `0 0 5px 2px #000`,
            borderRadius: `5px`,

            marginBottom: `2%`,
            ["@media(max-width:1030px)"]: {
                marginTop: `15% !important`,
            },

            ["@media(max-width:768px)"]: {
                // width: `95%`,
                // margin: `auto`,

                width: `95% !important`,
                margin: `0 auto !important`,
                borderBottom: `1px solid #e0e0e0`,
                borderLeft: `1px solid #e0e0e0`,
                // borderRight: `1px solid #e0e0e0`,
                boxShadow: `-10px 3px 10px #e0e0e0`,
                borderRadius: `5px`,
                marginTop: `15% !important`,
            },
            ["@media(max-width:500px)"]: {
                width: `90% !important`,
                margin: `0 auto !important`,
                borderBottom: `1px solid #e0e0e0`,
                borderLeft: `1px solid #e0e0e0`,
                // borderRight: `1px solid #e0e0e0`,
                boxShadow: `-10px 3px 10px #e0e0e0`,
                borderRadius: `5px`,
                marginTop: `24% !important`,
            },
            ["@media(max-width:472px)"]: {
                width: `90% !important`,
                margin: `0 auto !important`,
                borderBottom: `1px solid #e0e0e0`,
                borderLeft: `1px solid #e0e0e0`,
                // borderRight: `1px solid #e0e0e0`,
                boxShadow: `-10px 3px 10px #e0e0e0`,
                borderRadius: `5px`,
                marginTop: `30% !important`,
            },
            ["@media(max-width:367px)"]: {
                width: `90% !important`,
                margin: `0 auto !important`,
                borderBottom: `1px solid #e0e0e0`,
                borderLeft: `1px solid #e0e0e0`,
                // borderRight: `1px solid #e0e0e0`,
                boxShadow: `-10px 3px 10px #e0e0e0`,
                borderRadius: `5px`,
                marginTop: `45% !important`,
            },
            ["@media(max-width:300px)"]: {
                width: `90% !important`,
                margin: `0 auto !important`,
                borderBottom: `1px solid #e0e0e0`,
                borderLeft: `1px solid #e0e0e0`,
                // borderRight: `1px solid #e0e0e0`,
                boxShadow: `-10px 3px 10px #e0e0e0`,
                borderRadius: `5px`,
                marginTop: `57% !important`,
            },
            ["@media(max-width:260px)"]: {
                marginTop: `70% !important`,
            },
            ["@media(max-width:200px)"]: {
                marginTop: `90% !important`,
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
            ["@media(max-width:189px)"]: {
                display: `table `,
                marginBottom: `3%`,
            },
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
            wordBreak: "break-word",
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
        views: {
            fontSize: "12px",
            margin: "0",
            padding: "0",
            color: "#191e1e",
        },
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
                // width: `unset !important`,
            },
            ["@media(max-width:968px)"]: {
                padding: `0px 2px`,
                marginLeft: `15px !important`,
            },
            ["@media(max-width:768px)"]: {
                // width: `95%`,
                // margin: `auto`,

                display: `none !important`,
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
            ["@media(max-width:968px)"]: {
                marginLeft: `30px`,
                padding: `0px 5px`,
            },
            ["@media(max-width:768px)"]: {
                marginLeft: `20px`,
                borderLeft: `none !important`,
                padding: `0px 5px`,
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
                // width: `250px!important`,
                // height: `auto !important`,
                // padding: `15px`,
                display: `block !important`,
                width: `170px !important`,
                height: `150px !important`,
                padding: `15px`,
                textAlign: `center !important`,
                borderRadius: `50% !important`,

                // width: `100% !important`,
                // maxWidth: `100% !important`,
                // height: `100% !important`,
                // padding: `9px`,
                // borderRadius: `50% !important`,
            },
            ["@media(max-width:1501px)"]: {
                width: `100% !important`,
                maxWidth: `120px !important`,
                height: `120px !important`,
                padding: `9px`,
                borderRadius: `50% !important`,
            },
            ["@media(max-width:969px)"]: {
                width: `100% !important`,
                maxWidth: `120px !important`,
                height: `120px !important`,
                padding: `0`,
                borderRadius: `50% !important`,
                marginLeft: `5px !important`,
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
            // marginTop: `4%`,
            // // marginBottom: `15px`,
            // position: `relative`,
            // bottom: `7px`,
            // ["@media(max-width:1030px)"]: {
            //     position: `relative !important`,
            //     bottom: `none !important`,
            // },
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

        groupInput: {
            position: `fixed !important`,
            width: `300px !important`,
            zIndex: `999`,
            top: `50%`,
            marginLeft: !openSearch ? `-260px` : "0",
            transition: `all .7s`,
            borderRadius: `7px !important`,
        },
        inputSearch: {
            "&:active": {
                outline: `none !important`,
                boxShadow: `none !important`,
                border: `none !important`,
            },
            "&:focus": {
                outline: `none !important`,
                border: `none !important`,
                boxShadow: `#6d9ddf !important`,
            },
        },
        spanNavigate: {
            ["@media(max-width: 380px)"]: {
                fontSize: `15px !important`,
            },
        },
        userInfoInSmallDevice: {
            display: `none !important`,
            ["@media(max-width: 768px)"]: {
                display: `flex !important`,
                position: `absolute`,
                width: `max-content !important`,
                fontFamily: `'Roboto Condensed', sans-serif`,
                fontWeight: `400 !important`,
                right: `3%`,
                bottom: `7% !important`,
            },
            ["@media(max-width: 315px)"]: {
                display: `flex !important`,
                position: `relative`,
                width: `max-content !important`,
                fontFamily: `'Roboto Condensed', sans-serif`,
                fontWeight: `400 !important`,
                right: `3%`,
                bottom: `7% !important`,
                marginTop: `5px !important`,
            },
        },
        imgSmallDevice: {
            width: `25px !important`,
            height: `25px !important`,
            borderRadius: `50% !important`,
            marginRight: `4px !important`,
        },
        usernameSmallDevice: {
            marginTop: `3px !important`,
            ["@media(max-width: 240px)"]: {
                wordBreak: `break-word`,
            },
        },
    }));
    const classes = useStyles();

    const [threadArray, setThreadArray] = useState(threads);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const { match } = props;

    const page = Number(match.params.page);

    const [search, setSearch] = useState("");

    const onChangeInput = (e) => {
        setSearch(e.target.value);
    };

    let perPage = 5;
    let start = perPage * (page - 1);
    let end = page * perPage;

    const dp = useDispatch();

    const [openLoginRequire, setOpenLoginRequire] = React.useState(false);
    const handleOpenLoginRequire = () => setOpenLoginRequire(true);
    const handleCloseLoginRequire = () => setOpenLoginRequire(false);

    const handleOpen = () => {
        if (!isAuthenticated) {
            handleOpenLoginRequire();
            return;
        }
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

    // useEffect(() => {
    //     if (!threads.length) {
    //         dp(setLoadingForum.setLoadingForumRequest());
    //         dp(
    //             getThreads.getThreadsRequest({
    //                 match: null,
    //             })
    //         );
    //     }
    // }, []);

    useEffect(() => {
        if (!threadArray.length) {
            dp(setLoadingForum.setLoadingForumRequest());
            dp(
                getThreads.getThreadsRequest({
                    match: null,
                })
            );
        }
    }, []);

    // const clickQuestion = (e) => {
    //     e.preventDefault();
    // }
    // console.log("threadArray", threadArray);
    // console.log("threads", threads);

    const navigate = () => {
        let jsx = [];
        if (page === 1) {
            for (var i = page; i <= page + 2; i++) {
                jsx.push(
                    <Button
                        key={i}
                        color="secondary"
                        disabled={(i - 1) * perPage >= threads.length}
                        sx={{
                            padding: 0,
                            display:
                                (i - 1) * perPage >= threads.length && `none`,
                        }}
                    >
                        <Link
                            to={`/forum/${i}`}
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
                    disabled={(i - 1) * perPage >= threads.length}
                    sx={{
                        padding: 0,
                        display: (i - 1) * perPage >= threads.length && `none`,
                    }}
                >
                    <Link
                        to={`/forum/${i}`}
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

    const [statusFilter, setStatusFilter] = useState("N");
    const handleFindNewest = () => {
        setStatusFilter("N");
        dp(setThread.setThreadSuccess({ key: "N" }));
        // setThreadArray(
        //     threads.slice(start, end).sort((a, b) => {
        //         return moment(b.createdAt)
        //             .tz("Asia/Ho_Chi_Minh")
        //             .diff(moment(a.createdAt).tz("Asia/Ho_Chi_Minh"));
        //     })
        // );
    };

    useEffect(() => {
        setThreadArray(
            threads
                .slice(start, end)
                .filter(
                    (thread) =>
                        thread.title
                            .toUpperCase()
                            .indexOf(search.toUpperCase()) > -1 && thread
                )
        );
    }, [match, threads, search, page, statusFilter]);

    const handleFindLikes = () => {
        setStatusFilter("L");
        dp(setThread.setThreadSuccess({ key: "L" }));

        // setThreadArray(
        //     threads.slice(start, end).sort((a, b) => {
        //         return b.likes - a.likes;
        //     })
        // );
    };

    const handleFindUnAnswers = () => {
        setStatusFilter("U");
        dp(setThread.setThreadSuccess({ key: "U" }));

        // setThreadArray(
        //     threads.slice(start, end).filter((a) => {
        //         return a.replies === 0 && a;
        //     })
        // );
    };

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
                        <LoginRequire
                            open={openLoginRequire}
                            handleOpen={handleOpenLoginRequire}
                            handleClose={handleCloseLoginRequire}
                        />
                        <div className={cs("input-group", classes.groupInput)}>
                            <input
                                type="text"
                                className={cs(
                                    "form-control",
                                    classes.inputSearch
                                )}
                                placeholder="Search..."
                                name="search"
                                // onClick={openX}
                                value={search}
                                onChange={onChangeInput}
                            />
                            <div
                                className="input-group-btn"
                                style={{
                                    position: !openSearch
                                        ? `relative`
                                        : `relative`,
                                    right: 0,
                                }}
                                onClick={handleOpenSearch}
                            >
                                <button
                                    className="btn btn-default"
                                    type="submit"
                                    style={{ background: `#6d9ddf` }}
                                >
                                    <SearchIcon sx={{ color: `#FFFFFF` }} />
                                </button>
                            </div>
                        </div>
                        <AskModal
                            open={open}
                            handleOpen={handleOpen}
                            handleClose={handleClose}
                            // handleCreate={handleCreate}
                        />
                        <div className={cs(classes.mainContainer)}>
                            <div className={cs(classes.forumContainer)}>
                                <div className={cs(classes.top)}>
                                    <Button
                                        onClick={handleOpen}
                                        sx={{
                                            marginLeft: `21px`,
                                            marginTop: `2.7%`,
                                            "&:focus": {
                                                outline: `none !important`,
                                                border: `none !important`,
                                            },
                                        }}
                                    >
                                        Ask question{" "}
                                        <span
                                            style={{
                                                marginLeft: `3px`,
                                            }}
                                        >
                                            ?
                                        </span>
                                    </Button>
                                    <Button
                                        onClick={handleFindNewest}
                                        sx={{
                                            marginLeft: `21px`,
                                            marginTop: `2.7%`,
                                            borderTop:
                                                statusFilter === "N" &&
                                                `2px solid #1976D2`,
                                            "&:focus": {
                                                outline: `none !important`,
                                            },
                                        }}
                                    >
                                        Newest
                                    </Button>
                                    <Button
                                        onClick={handleFindLikes}
                                        sx={{
                                            marginLeft: `21px`,
                                            marginTop: `2.7%`,
                                            borderTop:
                                                statusFilter === "L" &&
                                                `2px solid #1976D2`,
                                            "&:focus": {
                                                outline: `none !important`,
                                            },
                                        }}
                                    >
                                        Likes
                                    </Button>
                                    <Button
                                        onClick={handleFindUnAnswers}
                                        sx={{
                                            marginLeft: `21px`,
                                            marginTop: `2.7%`,
                                            borderTop:
                                                statusFilter === "U" &&
                                                `2px solid #1976D2`,
                                            "&:focus": {
                                                outline: `none !important`,
                                            },
                                        }}
                                    >
                                        Unanswered
                                    </Button>
                                </div>
                                <Divider className={classes.dividerS} />
                                <div className={cs(classes.threadList)}>
                                    {
                                        // threads.map((thread) => {
                                        threadArray.map((thread) => {
                                            return (
                                                <div
                                                    className={cs(
                                                        classes.thread
                                                    )}
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
                                                                        thread
                                                                            .user
                                                                            .name
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div
                                                                className={cs(
                                                                    classes.userPostInfo
                                                                )}
                                                            >
                                                                {
                                                                    moment(
                                                                        thread.createdAt
                                                                    )
                                                                        .tz(
                                                                            "Asia/Ho_Chi_Minh"
                                                                        )
                                                                        .format(
                                                                            "hh:m MMM DD, YYYY"
                                                                        )
                                                                    // .toLocaleString(
                                                                    //     "en-US",
                                                                    //     {
                                                                    //         timeZone:
                                                                    //             "Asia/Bangkok",
                                                                    //     }
                                                                    // )
                                                                    // .format(
                                                                    //     "HH:MM MMM DD, YYYY"
                                                                    // )
                                                                }
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
                                                            // onClick={clickQuestion}
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
                                                        <div
                                                            className={cs(
                                                                classes.userInfoInSmallDevice
                                                            )}
                                                        >
                                                            <img
                                                                src={
                                                                    thread.user
                                                                        .picture
                                                                }
                                                                alt=""
                                                                className={cs(
                                                                    classes.imgSmallDevice
                                                                )}
                                                            />
                                                            <span
                                                                className={cs(
                                                                    classes.usernameSmallDevice
                                                                )}
                                                            >
                                                                {
                                                                    thread.user
                                                                        .name
                                                                }
                                                            </span>
                                                        </div>

                                                        {/* <CardHeader
                                                            avatar={
                                                                <Avatar>
                                                                    {" "}
                                                                    <CardMedia
                                                                        image={
                                                                            thread
                                                                                .user
                                                                                .picture
                                                                        }
                                                                        title="Title"
                                                                        component="img"
                                                                        className={
                                                                            classes.media
                                                                        }
                                                                    />
                                                                </Avatar>
                                                            }
                                                            sx={{
                                                                background: `#FFFFFF !important`,
                                                            }}
                                                            // title={post.author}
                                                            title={
                                                                <span>
                                                                    {
                                                                        thread
                                                                            .user
                                                                            .name
                                                                    }
                                                                </span>
                                                            }
                                                            subheader={``}
                                                            className={cs(
                                                                classes.userInfoInSmallDevice
                                                            )}
                                                        /> */}
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>

                                <div
                                    style={{
                                        width: `100%`,
                                        textAlign: `center`,
                                    }}
                                >
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
                                            to={`/forum/${page - 1}`}
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
                                        disabled={end >= threads.length}
                                        sx={{
                                            padding: 0,
                                            ["@media(max-width: 380px)"]: {
                                                display: `none`,
                                            },
                                        }}
                                    >
                                        <Link
                                            to={`/forum/${page + 1}`}
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
                            </div>
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default Forum;
