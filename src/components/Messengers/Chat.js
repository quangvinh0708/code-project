import { makeStyles } from "@mui/styles";
import React, {
    Fragment,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import cs from "classnames";
import { host } from "../../constant/axios";
import socketIOClient from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import {
    setAllMess,
    setCurrentObj,
    setDisplay,
    setFriends,
    setId,
    setImageWillBeShow,
    setMess,
    setMessage,
    setUpdateSeen,
} from "../../actions/messenger";
import SendIcon from "@mui/icons-material/Send";
import {
    Avatar,
    CardHeader,
    IconButton,
    Card,
    CardMedia,
    Button,
    Menu,
    MenuItem,
    Typography,
    // Tooltip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment-timezone";
import CircleIcon from "@mui/icons-material/Circle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Picker from "emoji-picker-react";
import MoodIcon from "@mui/icons-material/Mood";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import BlockIcon from "@mui/icons-material/Block";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        fontSize: `14px`,
        padding: `5px 9px!important`,
        borderRadius: `9px !important`,
    },
});

const Chat = (props) => {
    const display = useSelector((state) => state.messenger.display);
    const [previewImg, setPreviewImg] = useState([]);

    const useStyles = makeStyles((theme) => ({
        chatItem: {
            width: `100% !important`,
            // background: `#e0e0e0`,
            wordBreak: `break-word`,

            // maxWidth: `174px !important`,
            // width: `max-content !important`,
            // maxWidth: `max-content !important`,
            // minWidth: `max-content !important`,

            // whiteSpace: `normal !important`,
            // height: `auto !important`,
            // maxWidth: `178px`,
        },
        boxAll: {
            height: `100vh`,
        },
        boxChat: {
            zIndex: `1000 !important`,

            position: `fixed`,
            width: "350px",
            height: `455px !important`,
            borderBottom: `1px solid #e0e0e0`,
            borderLeft: `1px solid #e0e0e0`,
            // background: `#fff`,
            // borderRight: `1px solid #e0e0e0`,
            // boxShadow: `-5px -5px 10px 9px #e0e0e0`,
            boxShadow: `0px 0px 9px #e0e0e0`,

            // boxShadow: `0 0 5px 2px #000`,
            borderRadius: `9px`,
            // right: `200px`,
            right: `120px`,
            bottom: `0 !important`,

            backgroundImage:
                'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg") !important',
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            backgroundSize: "7%",
            display: display ? "" : "none",
            transition: `all .5s`,
            ["@media(max-width: 768px)"]: {
                right: `12px !important`,
            },
        },
        boxChatMessage: {
            // width: `100%`,
            minHeight: "345px",
            maxHeight: "345px",
            overflowY: "auto",

            maxHeight: !previewImg.length
                ? "345px !important"
                : previewImg.length < 5
                ? "279px"
                : "263px !important",
            //     // previewImg.length >= 5
            //     //     ? "279px !important"
            //     previewImg.length < 5 ? "300px" : "345px",
            minHeight: !previewImg.length
                ? "345px !important"
                : previewImg.length < 5
                ? "279px"
                : "263px !important",

            // // previewImg.length >= 5
            // //     ? "279px !important"
            //     previewImg.length < 5 ? "300px" : "345px",
        },
        sendBox: {
            position: `relative`,
            width: "100%",
            // bottom: `-38px !important`,
            display: `flex`,
        },
        textArea: {
            width: "100%",
            height: `41px`,
            margin: "0",
            padding: "0.62em",
            background: "#ebf5fd",
            // background: "#FFFFFF",
            borderRadius: "2em",
            display: "flex",
            float: "left",
            lineHeight: `normal !important`,
        },
        boxInput: {
            width: `90%`,
        },
        cardTop: {
            borderRadius: `none !important`,
            height: `62px`,
        },
        yourMessage: {
            position: `relative`,
            // width: `min-content`,
            // background: "#009bff",
            // margin: "1em",
            borderRadius: "1em",
            // padding: "0.5em",
            padding: "2px !important",
            color: "white",
            float: "right !important",
            textAlign: `right !important`,
            right: `0`,
            // width: `max-content !important`,
        },
        otherMessage: {
            position: `relative`,

            // width: `min-content`,
            // background: "#868686",
            // margin: "1em",
            borderRadius: "1em",
            padding: "0.5em",
            color: "#000",
            textAlign: "left !important",
            left: `0`,
            float: "left !important",
            // width: `max-content !important`,
        },
        p: {
            background: "#009bff",
            display: `block !important`,
            padding: "0.5em",
            color: "white",
            width: `max-content !important`,
            maxWidth: `220px !important`,
            borderRadius: "15px !important",
            // textAlign: `left !important`,
            // float: m.id === id ? "right !important" : "left !important",
        },
        p1: {
            display: `block !important`,
            padding: "0.5em",
            color: "white",
            width: `max-content !important`,
            maxWidth: `220px !important`,
            borderRadius: "15px !important",
            // textAlign: `left !important`,
            // float: m.id === id ? "right !important" : "left !important",
        },
        hideChat: {
            bottom: `-400px !important`,
            transition: `all .5s`,
        },
        previewImg: {
            position: `relative !important`,
            objectFit: `cover !important`,
            borderRadius: `6px !important`,
            width: "48px !important",
            height: "48px !important",
        },
        boxImage: {
            position: `relative !important`,
            float: `left !important`,
            background: `#fff`,
            marginLeft: `19px !important`,
            marginBottom: `2px !important`,
            marginTop: `16px !important`,
        },
        removeImage: {
            display: !previewImg.length && "none !important",
            position: `absolute !important`,
            top: "-15px !important",
            right: "-15px !important",
            background: `#FFFFFF !important`,
        },
        imgContainer: {},
        boxAllImg: {
            position: `relative !important`,
            bottom: `8px !important`,
        },
        boxMessageImg: {
            display: `flex !important`,
            flexWrap: `wrap !important`,
        },
        messageImg: {
            borderRadius: `8px !important`,
            height: "70px !important",
            flexWrap: "wrap !important",
            width: "90px",
            margin: "4px 7px 4px 4px !important",
        },
        messageImg1: {
            borderRadius: `8px !important`,
            margin: "2px 2px 0px 0px !important",
        },
        imgContain2: {
            flexBasis: `1`,
        },
        imgSmall: {
            position: "relative !important",
            display: `block !important`,
            left: "0",
            marginLeft: "5px !important",
            float: "left !important",
            width: `25px !important`,
            height: `25px !important`,
            borderRadius: `25px !important`,
        },
        imgUser: {
            width: `25px !important`,
            height: `25px !important`,
            borderRadius: `50% !important`,
        },
        imgUserSeen: {
            width: `20px !important`,
            height: `20px !important`,
            borderRadius: `50% !important`,
        },
    }));

    const { socketRef } = props;
    const classes = useStyles();
    const dp = useDispatch();

    const objId = useSelector((state) => state.auth.account.objId);
    const message = useSelector((state) => state.messenger.message);
    const mess = useSelector((state) => state.messenger.mess);
    const id = useSelector((state) => state.messenger.id);
    const account = useSelector((state) => state.auth.account);
    const friends = useSelector((state) => state.messenger.friends);
    const currentObj = useSelector((state) => state.messenger.currentObj);
    const currentMess = useSelector((state) => state.messenger.currentMess);
    const [anchorEL, setAnchorEL] = useState(null);
    const [anchorELBoxIcon, setAnchorELBoxIcon] = useState(null);
    const [anchorELBoxIconOpen, setAnchorELBoxIconOpen] = useState(null);
    const [openPicker, setOpenPicker] = useState(null);
    const [anchorELTool, setAnchorELTool] = useState(null);
    const [hide, setHide] = useState(false);
    const handleOpen = (e) => {
        e.stopPropagation();

        // console.log("OPEN");
        setAnchorEL(e.currentTarget);
    };

    const handleClose = useCallback(() => {
        setAnchorEL(null);
    }, []);

    const handleOpenBoxIcon = (e) => {
        // console.log("OPEN");
        setAnchorELBoxIcon(e.currentTarget);
    };

    const handleCloseBoxIcon = useCallback(() => {
        setAnchorELBoxIcon(null);
    }, []);

    const handleOpenBoxIconOpen = (e) => {
        // console.log("e.currentTarget", e.currentTarget);
        // setAnchorELBoxIconOpen(e.currentTarget);
        setOpenPicker(!openPicker);
        handleCloseBoxIcon();
    };

    const handleCloseBoxIconOpen = useCallback(() => {
        setAnchorELBoxIconOpen(null);
    }, []);

    const handleOpenTool = (e) => {
        setAnchorELTool(e.currentTarget);
    };

    const handleCloseTool = useCallback(() => {
        setAnchorELTool(null);
    }, []);

    // const socketRef = useRef();
    const messagesEnd = useRef();
    // const [id, setId] = useState();

    useEffect(() => {
        if (objId) {
            socketRef.current = socketIOClient.connect(host);
            // console.log("socketRef", socketRef);

            socketRef.current.on("getFriendList", (data) => {
                // console.log("FriendList", data);
                dp(setFriends.setFriendsSuccess(data));
            });

            //
            socketRef.current.on("sendListMessage", (data) => {
                // console.log("sendListMessage", data);
                dp(setAllMess.setAllMessSuccess(data.mess));
            });

            socketRef.current.on("getUpdateSeen", (data) => {
                // console.log("getUpdateSeen", data);
                dp(setUpdateSeen.setUpdateSeenSuccess(data.mess));
            });

            socketRef.current.on("getFriendListAfterLogout", (data) => {
                // console.log("FriendListAfterLogout", data);
                dp(setFriends.setFriendsSuccess(data));
            });

            socketRef.current.on("getId", (data) => {
                socketRef.current.emit("sendObjId", objId);
                // socketRef.current.emit("getFriendListOnline", objId);
                // console.log("data", data);
                dp(setId.setIdSuccess(data.id));

                // dp(setId.setIdSuccess(data.id));
            });

            socketRef.current.on("sendDataServer", (dataGot) => {
                // console.log("dataGot", dataGot);
                dp(setMess.setMessSuccess([dataGot.data]));
                scrollToBottom();
            });

            socketRef.current.on("getUpdateBlock", (data) => {
                // console.log("getUpdateBlock", data);
                dp(setFriends.setFriendsSuccess(data.friends));

                // scrollToBottom();
            });

            return () => {
                // socketRef.current.emit("forceDisconnect");

                // console.log("Disconnect!");
                socketRef.current.disconnect();
                // socketRef.current.emit("forceDisconnect", id);
            };
        }
    }, [objId]);
    const scrollToBottom = () => {
        if (messagesEnd.current) {
            messagesEnd.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        document.getElementById("endMess").scrollIntoView();
        clickFocus();
        // document
        //     .getElementById("endMess")
        //     .scrollTo({
        //         bottom: document.getElementById("endMess").scrollHeight,
        //     });
    }, [display, currentObj]);

    const sendMessage = () => {
        if (!message.trim() && previewImg.length <= 0) {
            return;
        }
        if (message || previewImg.length > 0) {
            if (objId !== currentObj.objId) {
                // console.log(message);
                const msg = {
                    message: message.toString().trim() !== "" ? message : "",
                    id: id,
                    objId: objId,
                    currentObj: currentObj,
                    currentObjId: currentObj.objId,
                    objIds: [objId, currentObj.objId],
                    pictures: previewImg,
                    name: account.name,
                    picture: account.picture,
                };
                // console.log("Success: ", previewImg.slice());
                socketRef.current.emit("sendDataClient", msg);
                dp(setMessage.setMessageSuccess(""));
                setPreviewImg([]);
            }
        }
    };

    // const [divScroll, setDivScroll] = useState(null);

    // const [messSlice, setMessSlice] = useState(mess);

    // useEffect(() => {
    //     // setDivScroll(document.getElementById("box-chat-messenger"));
    //     // if (messSlice.length - 5 >= 0) {
    //     //     setMessSlice(mess.slice(10));
    //     // } else {
    //     setMessSlice(mess.slice(mess.length - 10));
    //     // }
    // }, [mess, objId]);

    // const onScroll = (e) => {
    //     var x = document.getElementById("box-chat-messenger");
    //     if (x.scrollTop == 0) {
    //         if (mess.length - messSlice.length - 3 >= 0) {
    //             setMessSlice(mess.slice(mess.length - messSlice.length - 3));
    //             x.scrollBy(0, 25);
    //         } else {
    //             setMessSlice(mess.slice(0));
    //             // document.getElementById("endMess").scrollIntoView(false);
    //         }
    //         console.log("ABC", mess);
    //     }
    // };
    // console.log("messSlice", mess);

    const renderMess = () => {
        const x =
            mess.length > 0 &&
            mess.filter(
                (m) =>
                    m.objIds.includes(objId) &&
                    m.objIds.includes(currentObj.objId) &&
                    currentObj.objId !== null &&
                    currentObj.objId !== objId &&
                    m
            );
        return x.length > 0
            ? x.map(
                  (m, index) =>
                      //   (objId === m.objId &&
                      //       currentObj.objId === m.currentObj.objId) ||
                      //   (objId === m.currentObj.objId &&
                      m.objIds.includes(objId) &&
                      m.objIds.includes(currentObj.objId) &&
                      currentObj.objId !== null &&
                      currentObj.objId !== objId && (
                          <Fragment key={index}>
                              {m.objIds[0] !== objId && (
                                  <Fragment>
                                      <span className={cs(classes.imgSmall)}>
                                          <img
                                              className={cs(classes.imgUser)}
                                              src={currentObj.picture}
                                          ></img>
                                      </span>
                                      {/* <Typography
                                          component={"span"}
                                          variant={"body2"}
                                          sx={{
                                              float: `left !important`,
                                          }}
                                      >
                                          {currentObj.name}
                                      </Typography> */}
                                  </Fragment>
                              )}
                              {m.message && (
                                  <div
                                      className={cs(
                                          classes.chatItem,
                                          {
                                              [classes.yourMessage]:
                                                  objId === m.objIds[0],
                                              //   m.id === id &&
                                              //   m.objIds.includes(objId),
                                          },
                                          {
                                              [classes.otherMessage]:
                                                  m.objIds[0] !== objId,

                                              //   m.id !== id &&
                                              //   m.objIds.includes(
                                              //       currentObj.objId
                                              //   ),
                                          }
                                      )}
                                      //   style={{
                                      //       display:
                                      //           !m.message ||
                                      //           (m.message === "" &&
                                      //               `none !important`),
                                      //   }}
                                  >
                                      <CustomTooltip
                                          className={classes.tooltipTime}
                                          arrow
                                          title={`${moment(m.createdAt)
                                              .tz("Asia/Ho_Chi_Minh")
                                              .format("hh:m MMM DD, YYYY")}`}
                                          placement={
                                              objId === m.objIds[0]
                                                  ? "left"
                                                  : "right"
                                          }
                                      >
                                          <p
                                              data-toggle="collapse"
                                              data-target={`#message${index}`}
                                              id={
                                                  objId === m.objIds[0]
                                                      ? "m-right"
                                                      : "m-left"
                                              }
                                              className={
                                                  cs("p-message", classes.p)
                                                  //   ,
                                                  //   {
                                                  //       "message-right": m.id === id,
                                                  //   },
                                                  //   {
                                                  //       "message-left": m.id !== id,
                                                  //   }
                                              }
                                              style={{
                                                  background:
                                                      objId === m.objIds[0]
                                                          ? "#009bff"
                                                          : "#E4E6EB",
                                                  float:
                                                      objId === m.objIds[0]
                                                          ? "right !important"
                                                          : "left !important",
                                              }}
                                          >
                                              {m.message}
                                              {/* <Typography
                                          component={"span"}
                                          variant={"body2"}
                                          className={cs(classes.boxMessageImg)}
                                          sx={{
                                              display:
                                                  m.pictures.length <= 0 &&
                                                  "none",
                                          }}
                                      >
                                          {m.pictures.length > 0 &&
                                              m.pictures.map((pi, i) => (
                                                  <Typography
                                                      key={i}
                                                      component={"span"}
                                                      variant={"body2"}
                                                      className={cs(
                                                          classes.imgContain2
                                                      )}
                                                  >
                                                      <img
                                                          className={cs(
                                                              {
                                                                  [classes.messageImg]:
                                                                      m.pictures
                                                                          .length >=
                                                                      3,
                                                              },
                                                              {
                                                                  [classes.messageImg1]:
                                                                      m.pictures
                                                                          .length <=
                                                                      2,
                                                              }
                                                          )}
                                                          src={pi}
                                                      ></img>
                                                  </Typography>
                                              ))}
                                      </Typography> */}
                                          </p>
                                      </CustomTooltip>
                                  </div>
                              )}
                              {m.pictures.length > 0 && (
                                  <div
                                      className={cs(
                                          classes.chatItem,
                                          {
                                              [classes.yourMessage]:
                                                  objId === m.objIds[0],
                                          },
                                          {
                                              [classes.otherMessage]:
                                                  m.objIds[0] !== objId,
                                          }
                                      )}
                                  >
                                      <p
                                          id={
                                              objId === m.objIds[0]
                                                  ? "m-right"
                                                  : "m-left"
                                          }
                                          className={cs(
                                              "p-message",
                                              classes.p1
                                          )}
                                          style={{
                                              background:
                                                  objId === m.objIds[0]
                                                      ? "rgba(80, 155, 255, 40%)"
                                                      : "#E4E6EB",
                                              float:
                                                  objId === m.objIds[0]
                                                      ? "right !important"
                                                      : "left !important",
                                          }}
                                      >
                                          <Typography
                                              component={"span"}
                                              variant={"body2"}
                                              className={cs(
                                                  classes.boxMessageImg
                                              )}
                                              sx={{
                                                  display:
                                                      m.pictures.length <= 0 &&
                                                      "none",
                                              }}
                                          >
                                              {m.pictures.length > 0 &&
                                                  m.pictures.map((pi, i) => (
                                                      <CustomTooltip
                                                          key={i}
                                                          className={
                                                              classes.tooltipTime
                                                          }
                                                          arrow
                                                          title={`${moment(
                                                              m.createdAt
                                                          )
                                                              .tz(
                                                                  "Asia/Ho_Chi_Minh"
                                                              )
                                                              .format(
                                                                  "hh:m MMM DD, YYYY"
                                                              )}`}
                                                          placement={
                                                              objId ===
                                                              m.objIds[0]
                                                                  ? "left"
                                                                  : "right"
                                                          }
                                                      >
                                                          <Typography
                                                              key={i}
                                                              component={"span"}
                                                              variant={"body2"}
                                                              className={cs(
                                                                  classes.imgContain2
                                                              )}
                                                              style={{
                                                                  cursor: `pointer`,
                                                              }}
                                                              onClick={() =>
                                                                  dp(
                                                                      setImageWillBeShow.setImageWillBeShowSuccess(
                                                                          pi
                                                                      )
                                                                  )
                                                              }
                                                          >
                                                              <img
                                                                  className={cs(
                                                                      {
                                                                          [classes.messageImg]:
                                                                              m
                                                                                  .pictures
                                                                                  .length >=
                                                                              4,
                                                                      },
                                                                      {
                                                                          [classes.messageImg1]:
                                                                              m
                                                                                  .pictures
                                                                                  .length <
                                                                              4,
                                                                      }
                                                                  )}
                                                                  src={pi}
                                                              ></img>
                                                          </Typography>
                                                      </CustomTooltip>
                                                  ))}
                                          </Typography>
                                      </p>
                                  </div>
                              )}

                              {m.objIds[0] === objId && m.seen && (
                                  <div
                                      className={cs(
                                          classes.chatItem,
                                          {
                                              [classes.yourMessage]:
                                                  objId === m.objIds[0],
                                          },
                                          {
                                              [classes.otherMessage]:
                                                  m.objIds[0] !== objId,
                                          },
                                          { collapse: index !== x.length - 1 }
                                      )}
                                      id={`message${index}`}
                                  >
                                      <p
                                          id={
                                              //   objId === m.objIds[0]
                                              "m-right"
                                              //   : "m-left"
                                          }
                                          className={cs(
                                              "p-message",
                                              classes.p1
                                          )}
                                          style={{
                                              //   background:
                                              //       objId === m.objIds[0]
                                              //           ? "rgba(80, 155, 255, 40%)"
                                              //           : "#E4E6EB",
                                              color: `#000000`,
                                              float:
                                                  objId === m.objIds[0]
                                                      ? "right !important"
                                                      : "left !important",
                                          }}
                                      >
                                          <Typography
                                              component={"span"}
                                              variant={"body2"}
                                              className={cs(
                                                  classes.boxMessageImg
                                              )}
                                              sx={{
                                                  display:
                                                      m.pictures.length <= 0 &&
                                                      "none",
                                              }}
                                          >
                                              <CustomTooltip
                                                  className={
                                                      classes.tooltipTime
                                                  }
                                                  arrow
                                                  title={`Seen at ${moment(
                                                      m.updatedAt
                                                  )
                                                      .tz("Asia/Ho_Chi_Minh")
                                                      .format(
                                                          "hh:m MMM DD, YYYY"
                                                      )}`}
                                                  placement={
                                                      objId === m.objIds[0]
                                                          ? "left"
                                                          : "right"
                                                  }
                                              >
                                                  <Typography
                                                      component={"span"}
                                                      variant={"body2"}
                                                      className={cs(
                                                          classes.imgContain2
                                                      )}
                                                      style={{
                                                          cursor: `pointer`,
                                                      }}
                                                  >
                                                      <span
                                                          className={cs(
                                                              classes.imgSmallSeen
                                                          )}
                                                      >
                                                          <img
                                                              className={cs(
                                                                  classes.imgUserSeen
                                                              )}
                                                              src={
                                                                  currentObj.picture
                                                              }
                                                          ></img>
                                                      </span>
                                                      {/* Seen */}
                                                  </Typography>
                                              </CustomTooltip>
                                          </Typography>
                                      </p>
                                  </div>
                              )}
                          </Fragment>
                      )
              )
            : [];
    };

    const handleChange = (e) => {
        dp(setMessage.setMessageSuccess(e.target.value));
    };

    const onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            sendMessage();
        }
    };

    // console.log("mess", mess);
    // console.log("id", id);

    const setObj = (objId) => {
        dp(setCurrentObj.setCurrentObjSuccess(objId));
    };

    const hideChat = () => {
        setHide(!hide);
        handleClose();
    };

    const close = () => {
        handleClose();

        dp(setDisplay.setDisplaySuccess(false));
    };
    // const display = useSelector((state) => state.messenger.display);
    const onPaste = (event) => {
        var items = (event.clipboardData || event.originalEvent.clipboardData)
            .items;
        // console.log(JSON.stringify(items)); // will give you the mime types
        // find pasted image among pasted items
        var blob = null;
        for (var i = 0; i < items.length; i++) {
            if (items[i].type.indexOf("image") === 0) {
                blob = items[i].getAsFile();
            }
        }
        // load image if there is a pasted image
        if (blob !== null) {
            var reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onload = function (event) {
                // console.log("event.target.result", event.target.result); // data url!
                // document.getElementById("pastedImage").src =
                //     event.target.result;
                const x = previewImg.concat(event.target.result);
                setPreviewImg(x);
            };
            // reader.readAsDataURL(blob);
        }
    };

    const removeImage = (i) => {
        const x = previewImg.filter((pi, index) => i !== index && pi);
        setPreviewImg(x);
    };

    const clickFocus = (e) => {
        if (Object.keys(currentObj).length > 0) {
            dp(setCurrentObj.setCurrentObjSuccess(currentObj.objId));
        }
        if (openPicker) {
            setOpenPicker(!openPicker);
        }
        const x =
            mess.length > 0 &&
            mess.filter(
                (m) =>
                    m.objIds.includes(objId) &&
                    m.objIds.includes(currentObj.objId) &&
                    currentObj.objId !== null &&
                    currentObj.objId !== objId
            );
        const finalMes = x[x.length - 1];
        // console.log("finalMes", finalMes);
        const y = finalMes && finalMes.seen ? finalMes.seen : false;
        const z = finalMes && finalMes.objIds ? finalMes.objIds[0] : null;
        // const y = finalMes.seen;
        // const z = finalMes.objIds[0];
        if (y) {
            return;
        } else if (!y) {
            if (z === objId) {
                return;
            } else if (!z) {
                // console.log("z null");
                return;
            } else {
                // console.log("y ne:", y);

                socketRef.current.emit(
                    "sendUpdateSeen",
                    //  {
                    //     ...finalMes,
                    //     seen: false,
                    // }
                    finalMes
                );
            }
        }
        return;
    };

    const countUnreadMessage = (e) => {
        const x =
            mess.length > 0 &&
            mess.filter(
                (m) =>
                    m.objIds.includes(objId) &&
                    m.objIds.includes(currentObj.objId) &&
                    !m.seen &&
                    m.objIds[0] !== objId &&
                    currentObj.objId !== null &&
                    currentObj.objId !== objId
            );

        // console.log("countLengthUnreadMessage", x);

        return x.length;
    };

    const onEmojiClick = (event, emojiObject) => {
        event.stopPropagation();

        dp(setMessage.setMessageSuccess(message + emojiObject.emoji));
    };

    const onChangeImage = (e) => {
        e.preventDefault();

        // setAccount({ ...account, [e.target.name]: e.target.files[0] });
        previewFile(e.target.files[0]);
    };

    const previewFile = (file) => {
        handleCloseBoxIcon();

        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (e) => {
            const x = previewImg.concat(e.target.result);
            // console.log("x", x);
            setPreviewImg(x);
        };
    };

    const blockMessage = () => {
        socketRef.current.emit("sendUpdateBlock", {
            objId: objId,
            currentObjId: currentObj.objId,
        });
        handleCloseTool();
    };

    const unblockMessage = () => {
        socketRef.current.emit("sendUpdateUnblock", {
            objId: objId,
            currentObjId: currentObj.objId,
        });
        handleCloseTool();
    };

    // console.log("previewImg:", previewImg);

    const beforeMyObj = friends.find((ele) => ele.objId === objId);

    // const myObj = friends.find((ele) => ele.objId === objId) ? ;
    const myObj = beforeMyObj ? beforeMyObj : {};
    // console.log("myObj:", myObj);
    return (
        <Fragment>
            <Fragment>
                {/* <textarea
                    onPaste={onPaste}
                    id="pasteArea"
                    placeholder="Paste Image Here"
                ></textarea> */}
                {currentObj && (
                    <div
                        className={cs(classes.boxChat, "boxChat", {
                            [classes.hideChat]: hide === true,
                        })}
                        // style={{ cursor: `pointer` }}
                        onClick={clickFocus}
                    >
                        <Card
                            className={cs(classes.cardTop)}
                            sx={{
                                cursor: `pointer`,
                            }}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar>
                                        {" "}
                                        <CardMedia
                                            image={currentObj.picture}
                                            title="Title"
                                            component="img"
                                            className={classes.media}
                                        />
                                    </Avatar>
                                }
                                sx={{
                                    background: `#FFFFFF !important`,
                                    "&:hover": {
                                        background: `rgba(224, 224, 224, 40%) !important`,
                                    },
                                }}
                                onClick={handleOpenTool}
                                title={
                                    <span>
                                        <Typography
                                            component={"span"}
                                            variant={"body2"}
                                            sx={{
                                                fontSize: `15px !important`,
                                                fontWeight: `500 !important`,
                                            }}
                                        >
                                            {currentObj.name}
                                        </Typography>
                                        {countUnreadMessage() > 0 && (
                                            <Typography
                                                component={"span"}
                                                variant={"body2"}
                                                sx={{
                                                    position: `absolute !important`,
                                                    background: `#FF0000`,
                                                    color: `#FFFFFF`,
                                                    borderRadius: `15px !important`,
                                                    fontSize: `19px !important`,
                                                    left: "-13px !important",
                                                    top: "-9px !important",
                                                    padding:
                                                        "3px 9px !important",
                                                }}
                                            >
                                                {countUnreadMessage()}
                                            </Typography>
                                        )}
                                    </span>
                                }
                                // subheader={`Asked at ${moment(account.uid)
                                //     .tz("Asia/Ho_Chi_Minh")
                                //     .format("hh:m MMM DD, YYYY")}`}
                                subheader={
                                    <span>
                                        <CircleIcon
                                            sx={{
                                                fontSize: `9px !important`,
                                                marginRight: `3px`,
                                                color: currentObj.online
                                                    ? `green`
                                                    : "#e0e0e0",
                                            }}
                                        />
                                        {currentObj.online
                                            ? `Online`
                                            : `Offline`}{" "}
                                    </span>
                                }
                                action={
                                    <IconButton
                                        className={cs(
                                            "",
                                            classes.moreInQuestion
                                        )}
                                        onClick={handleOpen}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                className={cs(classes.questionHeader)}
                            />
                        </Card>
                        <div
                            className={cs(classes.boxChatMessage)}
                            id="box-chat-messenger"
                            // onScroll={onScroll}
                        >
                            {renderMess()}
                            <div
                                id="endMess"
                                style={{ float: "left", clear: "both" }}
                                ref={messagesEnd}
                            ></div>

                            {openPicker && (
                                <div style={{}}>
                                    <Picker
                                        pickerStyle={{}}
                                        onEmojiClick={onEmojiClick}
                                    />
                                </div>
                            )}
                        </div>
                        {/* <div className={cs(classes.boxImage)}>
                            {previewImg.length > 0  && (
                                <Fragment>
                                    <div className={cs(classes.imgContainer)}>
                                        <img
                                            id="pastedImage"
                                            className={cs(classes.previewImg)}
                                            src={previewImg}
                                        ></img>
                                        <IconButton
                                            className={cs(classes.removeImage)}
                                            onClick={removeImage}
                                        >
                                            <CloseIcon
                                                sx={{
                                                    fontSize: `14px !important`,
                                                }}
                                            />
                                        </IconButton>
                                    </div>
                                </Fragment>
                            )}
                        </div> */}
                        <div
                            style={{
                                display: "flex !important",
                                width: "100% !important",
                                float: "left",
                                whiteSpace: "nowrap !important",
                                overflow: "auto !important",
                            }}
                            className={cs("boxAllImg", classes.boxAllImg)}
                        >
                            {previewImg.length > 0 &&
                                previewImg.map((pi, i) => (
                                    <div
                                        className={cs(classes.boxImage)}
                                        key={i}
                                    >
                                        <Fragment>
                                            <div
                                                className={cs(
                                                    classes.imgContainer
                                                )}
                                            >
                                                <img
                                                    id="pastedImage"
                                                    className={cs(
                                                        classes.previewImg
                                                    )}
                                                    src={pi}
                                                ></img>
                                                <IconButton
                                                    className={cs(
                                                        classes.removeImage
                                                    )}
                                                    onClick={() =>
                                                        removeImage(i)
                                                    }
                                                >
                                                    <CloseIcon
                                                        sx={{
                                                            fontSize: `12px !important`,
                                                        }}
                                                    />
                                                </IconButton>
                                            </div>
                                        </Fragment>
                                    </div>
                                ))}
                        </div>

                        {currentObj &&
                        currentObj.blocklist &&
                        !currentObj.blocklist.includes(objId) &&
                        myObj.blocklist &&
                        !myObj.blocklist.includes(currentObj.objId) ? (
                            <div className={cs(classes.sendBox)}>
                                <div className={cs(classes.boxMore)}>
                                    <IconButton onClick={handleOpenBoxIcon}>
                                        <AppsIcon
                                            sx={{
                                                color:
                                                    message.trim().length > 0 &&
                                                    `#0666c4`,
                                                transition: `all .5s`,
                                            }}
                                        />
                                    </IconButton>
                                </div>
                                <div className={cs(classes.boxInput)}>
                                    <textarea
                                        className={cs(classes.textArea)}
                                        value={message}
                                        onKeyDown={onEnterPress}
                                        onChange={handleChange}
                                        onPaste={onPaste}
                                        placeholder="Aa..."
                                        // disabled={true}
                                        // autocomplete="off"
                                        // autocorrect="off"
                                        // autocapitalize="off"
                                        // spellcheck="false"
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        // ng-model-options="{ updateOn: 'blur' }"
                                    ></textarea>
                                </div>

                                <div>
                                    <IconButton
                                        onClick={sendMessage}
                                        sx={{
                                            color:
                                                message.trim().length > 0 &&
                                                `#1976D2`,
                                            transition: `all .5s`,
                                        }}
                                    >
                                        <SendIcon />
                                    </IconButton>
                                </div>
                            </div>
                        ) : (
                            myObj &&
                            myObj.blocklist &&
                            (myObj.blocklist.includes(currentObj.objId) ||
                                (currentObj &&
                                    currentObj.blocklist &&
                                    currentObj.blocklist.includes(objId))) && (
                                <div
                                    className={cs(classes.sendBox)}
                                    sx={{
                                        textAlign: `center !important`,
                                        width: `100% !important`,
                                    }}
                                >
                                    <div className={cs(classes.boxInput)}>
                                        <Button
                                            variant="contained"
                                            color="warning"
                                            sx={{
                                                fontSize: `14px !important`,
                                                whiteSpace: `nowrap !important`,
                                            }}
                                        >
                                            You now cannot send a reply to this
                                            chat
                                        </Button>
                                    </div>
                                </div>
                            )
                        )}

                        <Menu
                            id="simple-menu-option-view"
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
                            <MenuItem onClick={hideChat}>
                                {!hide ? (
                                    <Fragment>
                                        <span>
                                            <ExpandMoreIcon
                                                fontSize="small"
                                                sx={{
                                                    marginRight: 0,
                                                    marginTop: 0,
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
                                        >
                                            Hide
                                        </Button>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <span>
                                            <ExpandLessIcon
                                                fontSize="small"
                                                sx={{
                                                    marginRight: 0,
                                                    marginTop: 0,
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
                                        >
                                            Open
                                        </Button>
                                    </Fragment>
                                )}
                            </MenuItem>
                            <MenuItem onClick={close}>
                                {" "}
                                <span>
                                    <CloseIcon
                                        fontSize="small"
                                        sx={{
                                            marginRight: 0,
                                            marginLeft: `3px`,
                                            fontSize: `16px`,
                                        }}
                                    />
                                </span>
                                <Button
                                    sx={{
                                        padding: `0 !important`,
                                        marginTop: `3px !important`,
                                        "&:focus": {
                                            outline: `none !important`,
                                            border: `none !important`,
                                        },
                                    }}
                                >
                                    Close
                                </Button>
                            </MenuItem>
                        </Menu>

                        <Menu
                            id="simple-menu-image"
                            anchorEl={anchorELBoxIcon}
                            open={Boolean(anchorELBoxIcon)}
                            onClose={handleCloseBoxIcon}
                        >
                            <MenuItem onClick={handleOpenBoxIconOpen}>
                                {
                                    <Fragment>
                                        <span>
                                            <MoodIcon
                                                fontSize="small"
                                                sx={{
                                                    marginRight: 0,
                                                    marginTop: `-2px`,
                                                }}
                                            />
                                        </span>
                                        <Button
                                            disableElevation={false}
                                            sx={{
                                                padding: `0 !important`,
                                                "&:focus": {
                                                    outline: `none !important`,
                                                    border: `none !important`,
                                                },
                                            }}
                                        >
                                            Icons
                                        </Button>
                                    </Fragment>
                                }
                            </MenuItem>
                            <MenuItem
                                component="label"
                                htmlFor="file-input-upload-messenger"
                                // onClick={handleCloseBoxIcon}
                            >
                                <span>
                                    <AttachFileIcon
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
                                        }}
                                    >
                                        File
                                    </Typography>
                                </Button>
                                <input
                                    id="file-input-upload-messenger"
                                    type="file"
                                    name="image"
                                    onChange={onChangeImage}
                                    style={{ display: `none` }}
                                />
                            </MenuItem>
                        </Menu>

                        <Menu
                            id="simple-menu-tool"
                            anchorEl={anchorELTool}
                            open={Boolean(anchorELTool)}
                            onClose={handleCloseTool}
                        >
                            {myObj &&
                            myObj.blocklist &&
                            !myObj.blocklist.includes(currentObj.objId) ? (
                                <MenuItem
                                    onClick={blockMessage}
                                    sx={{
                                        background: `#FFFFFF !important`,
                                    }}
                                >
                                    {
                                        <Fragment>
                                            <span>
                                                <BlockIcon
                                                    fontSize="small"
                                                    sx={{
                                                        marginRight: 0,
                                                        marginTop: `-2px`,
                                                    }}
                                                />
                                            </span>
                                            <Button
                                                disableElevation={false}
                                                sx={{
                                                    padding: `0 !important`,
                                                    "&:focus": {
                                                        outline: `none !important`,
                                                        border: `none !important`,
                                                    },
                                                }}
                                            >
                                                Block
                                            </Button>
                                        </Fragment>
                                    }
                                </MenuItem>
                            ) : (
                                <MenuItem
                                    onClick={unblockMessage}
                                    sx={{
                                        background: `#FFFFFF !important`,
                                    }}
                                >
                                    {
                                        <Fragment>
                                            <span>
                                                <PeopleAltIcon
                                                    fontSize="small"
                                                    sx={{
                                                        marginRight: 0,
                                                        marginTop: `-2px`,
                                                    }}
                                                />
                                            </span>
                                            <Button
                                                disableElevation={false}
                                                sx={{
                                                    // padding: `0 !important`,
                                                    "&:focus": {
                                                        outline: `none !important`,
                                                        border: `none !important`,
                                                    },
                                                }}
                                            >
                                                Unblock
                                            </Button>
                                        </Fragment>
                                    }
                                </MenuItem>
                            )}
                            {/* <MenuItem

                            // onClick={handleCloseBoxIcon}
                            >
                                <span>
                                    <AttachFileIcon
                                        fontSize="small"
                                        sx={{
                                            marginRight: 0,
                                            marginTop: `-5px`,
                                        }}
                                    />
                                </span>
                                <Button sx={{ padding: `0 !important` }}>
                                    Notifications
                                </Button>
                            </MenuItem> */}
                        </Menu>
                    </div>
                )}
                {/* </div> */}
            </Fragment>
        </Fragment>
    );
};

export default Chat;
