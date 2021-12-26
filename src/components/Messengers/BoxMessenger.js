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
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import InputAdornment from "@mui/material/InputAdornment";

import {
    Avatar,
    Card,
    CardHeader,
    CardMedia,
    IconButton,
    Menu,
    MenuItem,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import {
    openMessenger,
    setCurrentObj,
    setDisplay,
    setViewMessenger,
} from "../../actions/messenger";
import ForumIcon from "@mui/icons-material/Forum";
import GroupIcon from "@mui/icons-material/Group";
import CircleIcon from "@mui/icons-material/Circle";
import { useCallback } from "react";
import { Fragment } from "react";

// const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: `400px`,
//     bgcolor: "background.paper",
//     boxShadow: 24,
//     p: 1,
//     outline: `none !important`,
//     // borderBottom: `1px solid #e0e0e0`,
//     // borderLeft: `1px solid #e0e0e0`,
//     border: `none !important`,
//     // borderRight: `1px solid #e0e0e0`,
//     boxShadow: `-5px 3px 10px #e0e0e0`,
//     borderRadius: `5px`,
//     height: `520px`,
//     ["@media(max-width: 767px)"]: {
//         width: `95%`,
//         margin: `auto`,

//         p: 2,
//     },
// };
const useStyles = makeStyles((theme) => ({
    boxStatistic: {
        display: `flex`,
        justifyContent: `space-around`,
        zIndex: `1200 !important`,
    },
    cardStatistic: {
        width: `100%`,
        marginBottom: `2px !important`,
        borderRadius: `none !important`,
        border: `none !important`,
        outline: `none !important`,
        // borderBottom: `1px solid #888`,
        // borderLeft: `1px solid #888`,
        boxShadow: `none !important`,
        "& div.MuiAvatar-circular": {
            width: `60px !important`,

            height: `60px !important`,
        },
        "&:hover": {
            cursor: `pointer !important`,
            background: `#e0e0e0 !important`,
        },
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
    searchInput: {
        width: `100% !important`,
        // paddingLeft: `-15px !important`,
    },
    iconButton: {
        fontSize: `16px !important`,
    },
    previewMessage: {
        display: "inline-block",
        maxWidth: "40ch",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        ["@media(max-width: 766px)"]: {
            display: "inline-block",
            maxWidth: "45ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        },
        ["@media(max-width: 574px)"]: {
            display: "inline-block",
            maxWidth: "40ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        },
        ["@media(max-width: 490px)"]: {
            display: "inline-block",
            maxWidth: "22ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        },
        ["@media(max-width: 326px)"]: {
            display: "inline-block",
            maxWidth: "15ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap !important",
        },
    },
}));
export default function BoxMessenger({}) {
    const classes = useStyles();
    const dp = useDispatch();
    const objId = useSelector((state) => state.auth.account.objId);
    const message = useSelector((state) => state.messenger.message);
    const friends = useSelector((state) => state.messenger.friends);
    const viewMessenger = useSelector((state) => state.messenger.viewMessenger);
    const isOpenMessenger = useSelector(
        (state) => state.messenger.isOpenMessenger
    );
    const currentObj = useSelector((state) => state.messenger.currentObj);

    const mess = useSelector((state) => state.messenger.mess);

    const [anchorEL, setAnchorEL] = useState(null);
    const handleOpenMenu = (e) => {
        e.stopPropagation();

        // console.log("OPEN");
        setAnchorEL(e.currentTarget);
    };

    const handleCloseMenu = useCallback(() => {
        setAnchorEL(null);
    }, []);

    const [arrDisplay, setArrDisplay] = useState([]);
    const [arrMessage, setArrMessage] = useState([]);
    const [searchMessage, setSearchMessage] = useState("");
    const [currentTarget, setCurrentTarget] = useState("");

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    // console.log("messssss", mess);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: viewMessenger === 0 ? `500px` : `600px`,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 1,
        outline: `none !important`,
        // borderBottom: `1px solid #e0e0e0`,
        // borderLeft: `1px solid #e0e0e0`,
        border: `none !important`,
        // borderRight: `1px solid #e0e0e0`,
        boxShadow: `0px 0px 10px #e0e0e0`,
        borderRadius: `5px`,
        height: `520px`,
        ["@media(max-width: 767px)"]: {
            width: `95%`,
            margin: `auto`,

            p: 2,
        },
    };
    useEffect(() => {
        // console.log("messssss11111111111111", mess);

        if (viewMessenger === 0) {
            const x =
                mess.length > 0 &&
                mess.filter((m) => m.objIds.includes(objId) && m).reverse();
            const y = [];
            const z = [];
            const p =
                x.length > 0 &&
                x.map((m, i) => {
                    let checkExist = false;
                    y.map((m1) => {
                        // if (
                        //     m1.objIds &&
                        //     m1.objIds.includes(objId) &&
                        //     (m1.objId === objId
                        //         ? m1.objIds[1] === m.currentObjId
                        //         : m1.objIds[1] === objId)
                        // ) {
                        //     checkExist = true;
                        // }
                        if (m1.objIds && m1.objIds.includes(objId)) {
                            if (m1.objIds[0] === objId) {
                                if (m.objIds[0] === objId) {
                                    if (m1.objIds[1] === m.objIds[1]) {
                                        checkExist = true;
                                    }
                                } else if (m.objIds[0] !== objId) {
                                    if (m1.objIds[1] === m.objIds[0]) {
                                        checkExist = true;
                                    }
                                }
                            } else if (m1.objIds[0] !== objId) {
                                if (m.objIds[0] === objId) {
                                    if (m1.objIds[0] === m.objIds[1]) {
                                        checkExist = true;
                                    }
                                } else if (m.objIds[0] !== objId) {
                                    if (m1.objIds[0] === m.objIds[0]) {
                                        checkExist = true;
                                    }
                                }
                            }
                        }
                    });
                    if (!checkExist) {
                        y.push(m);
                    }
                });

            setArrDisplay(y);
            setArrMessage(y);
            // console.log("y loop", y);
            // console.log("x loop", x);
        } else {
            setArrDisplay(friends);
            // console.log("friends", friends);
        }
    }, [mess, viewMessenger, friends, isOpenMessenger]);

    const handleClose = () => {
        setArrDisplay([]);
        setSearchMessage("");

        dp(openMessenger.openMessengerSuccess(false));
    };

    const onSearchMessage = (e) => {
        setSearchMessage(e.target.value);
    };

    const handleOpenChat = (objId) => {
        // console.log("objId ne:", objId);
        dp(setCurrentObj.setCurrentObjSuccess(objId));
        dp(setDisplay.setDisplaySuccess(true));
        dp(openMessenger.openMessengerSuccess(false));
        setArrDisplay([]);
    };

    const handleOpenChatByMenu = () => {
        // console.log("objId ne:", objId);
        setArrDisplay([]);
        dp(setCurrentObj.setCurrentObjSuccess(currentTarget));
        dp(setDisplay.setDisplaySuccess(true));
        handleCloseMenu();
        dp(openMessenger.openMessengerSuccess(false));
    };

    useEffect(() => {
        if (viewMessenger === 0) {
            setArrDisplay(
                arrMessage.filter((obj) => {
                    if (obj.objId === objId) {
                        if (
                            obj.currentObj.name
                                .toUpperCase()
                                .toString()
                                .indexOf(
                                    searchMessage.toUpperCase().toString()
                                ) >= 0
                        ) {
                            return obj;
                        }
                    } else {
                        if (
                            obj.name
                                .toUpperCase()
                                .toString()
                                .indexOf(
                                    searchMessage.toUpperCase().toString()
                                ) >= 0
                        ) {
                            return obj;
                        }
                    }
                })
            );
        } else if (viewMessenger === 1) {
            setArrDisplay(
                friends.filter((fr) => {
                    if (
                        fr.name
                            .toUpperCase()
                            .toString()
                            .indexOf(searchMessage.toUpperCase().toString()) >=
                        0
                    ) {
                        return fr;
                    }
                })
            );
        }
    }, [searchMessage]);

    const countUnreadMessage = (a) => {
        const x =
            mess.length > 0 &&
            mess.filter(
                (m) =>
                    m.objIds.includes(objId) &&
                    m.objIds.includes(a.objId) &&
                    !m.seen &&
                    m.objIds[0] !== objId &&
                    a.objId === m.objIds[0] &&
                    m
            );

        // console.log("countLengthUnreadMessage", x);
        // console.log("currentObj", a);

        return x.length;
    };

    const calculateTime = (time) => {
        const x = moment.duration(moment().diff(moment(time))).asMinutes();
        const y = moment.duration(moment().diff(moment(time)));
        if (x < 1) return `${Math.round(y.asSeconds())} seconds`;
        else if (x >= 1 && x < 60)
            return `${Math.round(y.asMinutes())} minutes`;
        else if (x >= 60 && x < 60 * 24)
            return `${Math.round(y.asHours())} hours`;
        else if (x >= 60 * 24 && x < 60 * 24 * 30)
            return `${Math.round(y.asDays())} days`;
        else if (x >= 24 * 30 * 60) return `${Math.round(y.asMonths())} months`;
    };

    // console.log("currentTarget", currentTarget);
    // console.log("currentTarget", currentTarget);

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpenMessenger}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isOpenMessenger}>
                    <Box sx={style}>
                        <div className={cs(classes.boxStatistic)}>
                            <Typography
                                id="transition-modal-title"
                                component="div"
                                sx={{
                                    fontFamily: `'Roboto Condensed', sans-serif`,
                                    borderBottom:
                                        viewMessenger === 0 &&
                                        `2px solid #1976D2`,
                                    cursor: `pointer !important`,
                                }}
                                onClick={() => {
                                    if (viewMessenger === 0) {
                                        return;
                                    }
                                    setArrDisplay([]);

                                    dp(
                                        setViewMessenger.setViewMessengerSuccess(
                                            0
                                        )
                                    );
                                }}
                                className={cs(classes.like)}
                            >
                                <IconButton
                                    sx={{
                                        color: viewMessenger === 0 && "#1976D2",
                                        "&:focus": {
                                            outline: `none !important`,
                                            border: `none !important`,
                                        },
                                    }}
                                    // onClick={likeQuestion}

                                    // disabled={checkLiked() ? true : false}
                                >
                                    <ForumIcon
                                        sx={{
                                            color:
                                                viewMessenger === 0 &&
                                                "#1976D2",
                                        }}
                                    />
                                </IconButton>
                                Messenger
                            </Typography>
                            <Typography
                                id="transition-modal-title"
                                component="div"
                                sx={{
                                    fontFamily: `'Roboto Condensed', sans-serif`,

                                    borderBottom:
                                        viewMessenger === 1 &&
                                        `2px solid #1976D2`,
                                    cursor: `pointer !important`,
                                }}
                                onClick={() => {
                                    if (viewMessenger === 1) {
                                        return;
                                    }
                                    setArrDisplay([]);

                                    dp(
                                        setViewMessenger.setViewMessengerSuccess(
                                            1
                                        )
                                    );
                                }}
                            >
                                <IconButton
                                    sx={{
                                        color: viewMessenger === 1 && "#1976D2",
                                        "&:focus": {
                                            outline: `none !important`,
                                            border: `none !important`,
                                        },
                                    }}
                                >
                                    <GroupIcon
                                        sx={{
                                            color:
                                                viewMessenger === 1 &&
                                                "#1976D2",
                                        }}
                                    />
                                </IconButton>
                                Search friends
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
                            <TextField
                                id="search-message"
                                InputProps={{
                                    readOnly: true,
                                }}
                                placeholder="Search"
                                value={searchMessage}
                                onChange={onSearchMessage}
                                variant="standard"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <RecordVoiceOverIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                className={classes.searchInput}
                            />
                            {viewMessenger === 0 &&
                                arrDisplay.length > 0 &&
                                arrDisplay.map((m) => (
                                    <React.Fragment key={m._id}>
                                        <Card
                                            className={cs(
                                                classes.cardStatistic
                                            )}
                                            onClick={() =>
                                                m.objId === objId
                                                    ? handleOpenChat(
                                                          m.currentObj.objId
                                                      )
                                                    : handleOpenChat(m.objId)
                                            }
                                        >
                                            <CardHeader
                                                avatar={
                                                    <Avatar>
                                                        {" "}
                                                        <CardMedia
                                                            image={
                                                                m.objId ===
                                                                objId
                                                                    ? m
                                                                          .currentObj
                                                                          .picture
                                                                    : m.picture
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
                                                    <Typography
                                                        component={"span"}
                                                        variant={"body2"}
                                                        sx={{
                                                            position: `relative`,
                                                            display: `block`,
                                                            color:
                                                                m.objId !==
                                                                    objId &&
                                                                !m.seen
                                                                    ? `#000 !important`
                                                                    : `#000 !important`,
                                                            fontWeight:
                                                                m.objId !==
                                                                    objId &&
                                                                !m.seen
                                                                    ? `bold !important`
                                                                    : `500 !important`,
                                                        }}
                                                    >
                                                        {m.objId === objId
                                                            ? m.currentObj.name
                                                            : m.name}
                                                        {countUnreadMessage(m) >
                                                            0 && (
                                                            <Typography
                                                                component={
                                                                    "span"
                                                                }
                                                                variant={
                                                                    "body2"
                                                                }
                                                                sx={{
                                                                    position: `relative !important`,
                                                                    background: `#FF0000`,
                                                                    color: `#FFFFFF`,
                                                                    borderRadius: `15px !important`,
                                                                    fontSize: `13px !important`,
                                                                    left: `5px !important`,
                                                                    top: `-5px !important`,
                                                                    padding:
                                                                        "5px 7px !important",
                                                                }}
                                                            >
                                                                {countUnreadMessage(
                                                                    m
                                                                )}
                                                            </Typography>
                                                        )}
                                                    </Typography>
                                                }
                                                // subheader={moment(post.updatedAt).format(
                                                //     "HH:MM MMM DD, YYYY"
                                                // )}
                                                subheader={
                                                    //     moment(
                                                    //     people.updatedAt
                                                    // )
                                                    //     .tz("Asia/Ho_Chi_Minh")
                                                    //     .format(
                                                    //         "hh:m MMM DD, YYYY"
                                                    //     )
                                                    <Fragment>
                                                        <Typography
                                                            component="span"
                                                            variant={"body2"}
                                                            className={cs(
                                                                classes.previewMessage
                                                            )}
                                                            sx={{
                                                                color:
                                                                    m.objId !==
                                                                        objId &&
                                                                    !m.seen &&
                                                                    `#1976D2 !important`,
                                                                fontWeight:
                                                                    m.objId !==
                                                                        objId &&
                                                                    !m.seen &&
                                                                    `bold !important`,
                                                            }}
                                                        >
                                                            {`${
                                                                m.objId ===
                                                                objId
                                                                    ? "You"
                                                                    : m.name
                                                            }: ${
                                                                m.message
                                                                    ? m.message
                                                                    : `send ${m.pictures.length} images`
                                                            }`}
                                                        </Typography>
                                                        <Typography
                                                            component="span"
                                                            variant={"body2"}
                                                            sx={{
                                                                position: `relative !important`,
                                                                top: `-2px !important`,

                                                                fontWeight:
                                                                    m.objId !==
                                                                        objId &&
                                                                    !m.seen
                                                                        ? `550 !important`
                                                                        : `500 !important`,
                                                                display: `block !important`,
                                                                marginLeft: `0px !important`,
                                                            }}
                                                        >{`${calculateTime(
                                                            m.createdAt
                                                        )}`}</Typography>
                                                    </Fragment>
                                                }
                                                // action={<IconButton>{<MoreVertIcon />}</IconButton>}
                                                action={
                                                    <IconButton
                                                        className={cs(
                                                            classes.iconButton
                                                        )}
                                                        onClick={(e) => {
                                                            m.objId === objId
                                                                ? setCurrentTarget(
                                                                      m
                                                                          .currentObj
                                                                          .objId
                                                                  )
                                                                : setCurrentTarget(
                                                                      m.objId
                                                                  );

                                                            handleOpenMenu(e);
                                                        }}
                                                    >
                                                        <MoreVertIcon
                                                            className={cs(
                                                                classes.more
                                                            )}
                                                        />
                                                    </IconButton>
                                                }
                                                className={cs(
                                                    classes.questionHeader
                                                )}
                                            />
                                        </Card>
                                    </React.Fragment>
                                ))}

                            {viewMessenger === 1 &&
                                arrDisplay.length > 0 &&
                                arrDisplay.map((m) => (
                                    <React.Fragment key={m._id}>
                                        <Card
                                            className={cs(
                                                classes.cardStatistic
                                            )}
                                            onClick={() =>
                                                handleOpenChat(m.objId)
                                            }
                                        >
                                            <CardHeader
                                                avatar={
                                                    <Avatar>
                                                        {" "}
                                                        <CardMedia
                                                            image={m.picture}
                                                            title="Title"
                                                            component="img"
                                                            className={
                                                                classes.media
                                                            }
                                                        />
                                                    </Avatar>
                                                }
                                                // title={post.author}
                                                title={<span>{m.name}</span>}
                                                // subheader={moment(post.updatedAt).format(
                                                //     "HH:MM MMM DD, YYYY"
                                                // )}
                                                subheader={
                                                    <span>
                                                        <CircleIcon
                                                            sx={{
                                                                fontSize: `9px !important`,
                                                                marginRight: `3px`,
                                                                color: m.online
                                                                    ? `green`
                                                                    : "#e0e0e0",
                                                            }}
                                                        />
                                                        {m.online
                                                            ? `Online`
                                                            : `Offline`}
                                                    </span>
                                                }
                                                // action={<IconButton>{<MoreVertIcon />}</IconButton>}
                                                action={
                                                    <IconButton
                                                        className={cs(
                                                            classes.iconButton
                                                        )}
                                                        onClick={(e) => {
                                                            setCurrentTarget(
                                                                m.objId
                                                            );

                                                            handleOpenMenu(e);
                                                        }}
                                                    >
                                                        <MoreVertIcon
                                                            className={cs(
                                                                classes.more
                                                            )}
                                                        />
                                                    </IconButton>
                                                }
                                                className={cs(
                                                    classes.questionHeader
                                                )}
                                            />
                                        </Card>
                                    </React.Fragment>
                                ))}

                            <Menu
                                id="simple-menu-box-mess"
                                anchorEl={anchorEL}
                                open={Boolean(anchorEL)}
                                onClose={handleCloseMenu}
                            >
                                <MenuItem onClick={handleOpenChatByMenu}>
                                    <span>
                                        <QuestionAnswerIcon
                                            fontSize="small"
                                            sx={{
                                                marginRight: 0,
                                                marginTop: `-5px`,
                                            }}
                                        />
                                    </span>
                                    <Button
                                        sx={{
                                            padding: `0 !important`,
                                            "&:focus": {
                                                outline: `none !important`,
                                                border: `none !important`,
                                            },
                                        }}
                                        disableElevation={false}
                                    >
                                        <Typography
                                            component="label"
                                            htmlFor="file-input-upload-messenger"
                                            sx={{
                                                fontWeight: `450`,
                                                fontSize: `16px !important`,
                                                width: `100% !important`,
                                                paddingLeft: `5px !important`,
                                            }}
                                        >
                                            Send message
                                        </Typography>
                                    </Button>
                                </MenuItem>
                            </Menu>
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
