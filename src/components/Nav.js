import {
    Button,
    IconButton,
    LinearProgress,
    Typography,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { Fragment, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    directToCode,
    updateCode,
    getProjects,
    changeName,
    setIsChanging,
    setIsDeleting,
} from "../actions/code";
import { logout, setNameCode } from "../actions/login";
import { openModalSuccess } from "../actions/modal";
import "./Nav.css";

import { setListTutorial, setOpen, setSidebar } from "../actions/tutorial";
import { HTML_TUTORIALS } from "../common/constants/HTMLconstants";
import { CSS_TUTORIALS } from "../common/constants/CSSconstants";
import { JS_TUTORIALS } from "../common/constants/JSconstants";
import { GoogleLogout } from "react-google-login";
import { API_GG, CODE } from "../constant/axios";
import useLocalStorage from "../hooks/useLocalStorage";
import { push } from "connected-react-router";
import { openModalShare } from "../actions/modalShareCode";
import { setFullScreen, setView, setLargeScreen } from "../actions/view";
import SearchIcon from "@mui/icons-material/Search";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { makeStyles } from "@mui/styles";
import { setFriends } from "../actions/messenger";
const Nav = ({
    openModalSuccessCreator,
    updateCodeCreator,
    name,
    isAuthenticated,
    nameCode,
    directToCodeCreator,
    logoutCreator,
    getProjectsCreator,
    projects,
    setIsChangingCreator,
    setIsDeletingCreator,
    url,
    locationForNav,
    socketRef,
}) => {
    const useStyles = makeStyles((theme) => ({
        displaySave: {
            ["@media(max-width:960px)"]: {
                display: nameCode ? `none !important` : `block !important`,
            },
        },
    }));

    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);
    const openSidebar = useSelector((state) => state.tutorial.openSidebar);
    const picture = useSelector((state) => state.auth.account.picture);
    const progress = useSelector((state) => state.modal.progress);
    const fullScreen = useSelector((state) => state.view.fullScreen);
    const largeScreen = useSelector((state) => state.view.largeScreen);

    const dispatch = useDispatch();

    let [html, setHtml] = useLocalStorage("html", "");
    const [css, setCss] = useLocalStorage("css", "");
    const [js, setJs] = useLocalStorage("js", "");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleSave = (e) => {
        e.preventDefault();
        openModalSuccessCreator();
    };

    const handleDirect = () => {
        directToCodeCreator();
        dispatch(setNameCode(null));
    };

    const objId = useSelector((state) => state.auth.account.objId);

    const handleLogout = (e, x) => {
        e.preventDefault();

        // Socket logout
        socketRef.current.emit("sendLogout", objId);
        // dispatch(setFriends.setFriendsSuccess([]));

        x();

        // console.log("Answer", typeof window.FB.logout === 'function');

        localStorage.removeItem("access_token");
        logoutCreator();
        dispatch(push("/login"));
    };

    const onLogoutGGSuccess = (res) => {
        localStorage.removeItem("access_token");
    };

    const handleGetProjects = (e) => {
        e.preventDefault();
        console.log("handleGetProjects run...");
        getProjectsCreator();
    };

    const handleChangeName = () => {
        setIsChangingCreator(true);
        openModalSuccessCreator();
    };

    const handleDelete = (e) => {
        e.preventDefault();

        setIsDeletingCreator(true);
        openModalSuccessCreator();
    };
    const newProject = (e) => {
        e.preventDefault();
        localStorage.setItem(
            "code-html",
            JSON.stringify(`<div style="parent">
  <div class="text-type">
    <p>WELCOME to CODE-ONLINE&nbsp;</p>
  </div>
  <div class="text-type flow">
    <p>Type something to-start&nbsp;</p>
  </div>
</div>
      `)
        );
        localStorage.setItem(
            "code-css",
            JSON.stringify(`body {
  margin:0px;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  color: #fff;

}
.parent {
  display: flex;
  flex-direction: column;
}
.text-type {
  padding:20px 30px;
  background:#f5f5f5;
  font-size:35px;
  font-family:monospace;
  border-radius:50px;
  position: relative;
  font-weight: 650;
  top: -60px;
  margin-top: 15px;
  background-image: linear-gradient(45deg, #98DBC6 45.02%, #ffe6e1 10%);
}
.text-type p {
  margin:0px;
  white-space:nowrap;
  overflow:hidden;
  animation:typing 4s steps(22,end) forwards, blink 1s infinite;

}
.flow {
  display: none;
  padding:20px 30px;
  background:#f5f5f5;
  font-size:35px;
  font-family:monospace;
  border-radius:50px;
  position: relative;
  font-weight: 550;
  top: -60px;
  margin-top: 15px;
  background-image: linear-gradient(to right, #98EDC6 60%, #98EDC6);
}
@keyframes typing {
  0% { width:0% }
  100% { width:100% }
}
@keyframes blink {
  0%,100% {
    border-right:2px solid transparent;
  }
  50% {
    border-right:2px solid #222;
  }
}`)
        );
        localStorage.setItem(
            "code-js",
            JSON.stringify(`setTimeout(() => {
            var x = document.getElementsByClassName('flow')[0];
            x.style.cssText = "display: flex !important" },1000)`)
        );
        // window.open("http://localhost:3000/code");
        // dispatch(push("/code"));
        window.location.href = CODE;
    };

    const [projectsFiltered, setProjectsFiltered] = useState(projects);
    const [keySearch, setKeySearch] = useState("");
    useEffect(() => {
        setProjectsFiltered(
            projects.filter(
                (x) =>
                    x.name
                        .toString()
                        .toLowerCase()
                        .indexOf(keySearch.toLowerCase()) > -1 && x
            )
        );
    }, [keySearch, projects]);
    const onSearch = (e) => {
        const value = e.target.value;
        setKeySearch(value);
    };
    const renderProjects = () => {
        let jsx;
        jsx = (
            <div
                className="dropdown-menu"
                style={{
                    maxHeight: `500px`,
                    position: `absolute`,
                    background: `#fff`,
                    zIndex: `2000`,
                    overflowY: projects.length >= 15 ? `scroll` : "hidden",
                    maxWidth: `290px`,
                    overflowX: `auto`,
                    left: 0,
                }}
            >
                <a
                    href={CODE}
                    // to="/code"
                    className="dropdown-item"
                    onClick={(e) => newProject(e)}
                >
                    <div
                        style={{
                            display: `flex`,
                            justifyContent: "space-between",
                        }}
                    >
                        {" "}
                        <div>New Project</div>
                        <div>
                            {" "}
                            <CreateNewFolderIcon
                                sx={{
                                    fontSize:
                                        projects.length !== 0 ? `20px` : `18px`,
                                    // paddingLeft: `3px`,
                                }}
                            />
                        </div>
                    </div>
                </a>
                <div
                    style={{
                        position: `relative`,
                        marginBottom: `2.9px`,
                        marginTop: `2.9px`,
                    }}
                >
                    <SearchIcon
                        sx={{
                            position: `absolute`,
                            left: 7,
                            top: 5.9,
                            borderRight: `1px solid #000`,
                            padding: `0 5px 0 0`,
                        }}
                    />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search.."
                        onChange={onSearch}
                    />
                </div>
                {projectsFiltered.map((project, key) => (
                    <a
                        key={key}
                        className="dropdown-item limit-drop"
                        href={`/${project._id}`}
                        style={{
                            background: project.name === nameCode && `#8167a9`,
                            color: project.name === nameCode && `#fff`,
                        }}
                    >
                        {" "}
                        <span
                            style={{
                                display: "inline-block",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxWidth: "25ch",
                                padding: `0`,
                            }}
                        >
                            {project.name === nameCode ? (
                                <FolderIcon
                                    sx={{
                                        fontSize: `20px`,
                                        paddingRight: `5px`,
                                    }}
                                />
                            ) : (
                                <FolderOpenIcon
                                    sx={{
                                        fontSize: `20px`,
                                        paddingRight: `5px`,
                                    }}
                                />
                            )}
                            {/* <FolderOpenIcon
                                sx={{
                                    fontSize: `20px`,
                                    paddingRight: `5px`,
                                }}
                            /> */}

                            {project.name}
                        </span>
                    </a>
                ))}
            </div>
        );
        return jsx;
    };

    const openListHTML = () => {
        dispatch(setNameCode(null));
        dispatch(setListTutorial.setListTutorial(HTML_TUTORIALS));
        dispatch(setOpen.setOpen(true));
    };

    const openListCSS = () => {
        dispatch(setNameCode(null));
        dispatch(setListTutorial.setListTutorial(CSS_TUTORIALS));
        dispatch(setOpen.setOpen(true));
    };
    const openListJS = () => {
        dispatch(setNameCode(null));
        dispatch(setListTutorial.setListTutorial(JS_TUTORIALS));
        dispatch(setOpen.setOpen(true));
    };
    const handleToggleSidebar = (e) => {
        e.persist();
        setTimeout(() => {
            dispatch(setSidebar.setSidebar(!openSidebar));
        }, 70);
    };

    const handleShare = () => {
        dispatch(openModalShare.openModalShareRequest(url));
    };

    const status = useSelector((state) => state.view.status);

    useEffect(() => {
        getProjectsCreator();
    }, [nameCode, name]);

    // let checkLocation = useSelector((state) => state.tutorial.location);
    // checkLocation = checkLocation.split("/")[1];
    // // console.log("checkLocation", checkLocation);

    return (
        <div className="navigation-wrap bg-light start-header start-style">
            <div className="container1">
                <div className="row">
                    <div className="col-12">
                        <nav
                            className="navbar navbar-expand-md navbar-light static ml-auto"
                            style={{
                                position: `relative`,
                            }}
                        >
                            <div
                                className="navbar-brand"
                                style={{
                                    color: "#8167a9",
                                    fontSize: `1.5rem`,
                                    fontWeight: 680,
                                    padding: `2px 8px`,
                                    border: `none`,
                                    outline: `none`,
                                    background: `inherit`,
                                    // boxShadow: "2px 2px",
                                }}
                            >
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={(e) => handleToggleSidebar(e)}
                                    // disabled={
                                    //     checkLocation === "tutorials"
                                    //         ? false
                                    //         : true
                                    // }
                                >
                                    <MenuIcon fontSize="medium" />
                                </IconButton>

                                <Link
                                    to="/code"
                                    // onClick={handleDirect}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (!status)
                                            dispatch(
                                                setView.setViewSuccess(true)
                                            );
                                        else
                                            dispatch(
                                                setView.setViewSuccess(false)
                                            );
                                        dispatch(push("/code"));
                                    }}
                                    style={{
                                        color: "#8167a9",
                                        fontSize: `1.5rem`,
                                        fontWeight: 680,
                                        padding: `2px 8px`,
                                        textDecoration: `none`,
                                        fontFamily: `'Roboto Condensed', sans-serif`,
                                        // boxShadow: "2px 2px",
                                    }}
                                >
                                    <span>
                                        <span
                                            style={{ visibility: `hidden` }}
                                        >{`<`}</span>
                                        Code Online{" "}
                                        <span
                                            style={{ visibility: `hidden` }}
                                        >{`aaaa/>`}</span>
                                    </span>
                                </Link>
                            </div>

                            {/* <Button
                                sx={{
                                    color: "#8167a9",
                                    ["@media(max-width: 600px"]: {
                                        float: "right",
                                        border: "none",
                                        paddingRight: "0",
                                        padding: 0,
                                        margin: 0,
                                        marginBottom: `-5px`,
                                        color: "#8167a9",
                                    },
                                }}
                                onClick={() => {
                                    dispatch(setView.setViewSuccess(!status));
                                }}
                            >
                                View 2
                            </Button> */}

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                                style={{ marginRight: 17 }}
                            >
                                <ul className="navbar-nav ml-auto py-4 py-md-0">
                                    <li className="nav-item pl-4 pl-md-0 ml-0 md-4 v">
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            data-toggle="dropdown"
                                            type="button"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            // onClick={(e) => {
                                            //     e.preventDefault();
                                            //     dispatch(
                                            //         setView.setViewSuccess(
                                            //             !status
                                            //         )
                                            //     );
                                            // }}
                                            style={{
                                                color: "#8167a9 !important",
                                                fontWeight: 780,
                                                padding: `2px 8px`,
                                            }}
                                            to="/"
                                        >
                                            {" "}
                                            View
                                        </Link>
                                        <div className="dropdown-menu">
                                            <p
                                                style={{
                                                    cursor: `pointer`,
                                                    background:
                                                        status === false &&
                                                        fullScreen === false &&
                                                        `#8167a9`,
                                                    color:
                                                        status === false &&
                                                        fullScreen === false &&
                                                        `#fff`,
                                                }}
                                                className="dropdown-item"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    dispatch(
                                                        setView.setViewSuccess(
                                                            false
                                                        )
                                                    );
                                                }}
                                            >
                                                View 1
                                            </p>
                                            <p
                                                style={{
                                                    cursor: `pointer`,
                                                    background:
                                                        status === true &&
                                                        !largeScreen &&
                                                        `#8167a9`,
                                                    color:
                                                        status === true &&
                                                        !largeScreen &&
                                                        `#fff`,
                                                }}
                                                className="dropdown-item"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    dispatch(
                                                        setView.setViewSuccess(
                                                            true
                                                        )
                                                    );
                                                }}
                                            >
                                                View 2
                                            </p>
                                            <p
                                                style={{
                                                    cursor: `pointer`,
                                                    background:
                                                        largeScreen === true &&
                                                        `#8167a9`,
                                                    color:
                                                        largeScreen === true &&
                                                        `#fff`,
                                                }}
                                                className="dropdown-item"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    dispatch(
                                                        setLargeScreen.setLargeScreenSuccess(
                                                            !largeScreen
                                                        )
                                                    );
                                                }}
                                            >
                                                Large Screen
                                            </p>
                                            <p
                                                className="dropdown-item"
                                                to=""
                                                style={{
                                                    cursor: `pointer`,
                                                    background:
                                                        fullScreen === true &&
                                                        `#8167a9`,
                                                    color:
                                                        fullScreen === true &&
                                                        `#fff`,
                                                }}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (!fullScreen) {
                                                        dispatch(
                                                            setFullScreen.setFullScreenSuccess()
                                                        );
                                                    } else
                                                        dispatch(
                                                            setFullScreen.setFullScreenFailure()
                                                        );
                                                }}
                                            >
                                                {!fullScreen
                                                    ? "Full Screen"
                                                    : "Display Code"}
                                            </p>
                                        </div>
                                    </li>
                                    {isAuthenticated && (
                                        <li
                                            className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                                            style={{ position: `relative` }}
                                        >
                                            {isAuthenticated && name && (
                                                <>
                                                    <Link
                                                        className="nav-link dropdown-toggle yp"
                                                        data-toggle="dropdown"
                                                        role="button"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        // to={url}
                                                        to=""
                                                        style={{
                                                            color: "#8167a9 !important",
                                                            fontWeight: 780,
                                                            // marginLeft: `25%`
                                                        }}
                                                        onClick={
                                                            handleGetProjects
                                                        }
                                                    >
                                                        <span
                                                            style={{
                                                                display:
                                                                    "inline-block",
                                                                whiteSpace:
                                                                    "nowrap",
                                                                overflow:
                                                                    "hidden",
                                                                textOverflow:
                                                                    "ellipsis",
                                                                maxWidth:
                                                                    "14ch",
                                                                padding: `0`,
                                                            }}
                                                        >
                                                            Your Project
                                                        </span>
                                                        <span
                                                            style={{
                                                                display:
                                                                    "inline-block",
                                                                whiteSpace:
                                                                    "nowrap",
                                                                overflow:
                                                                    "hidden",
                                                                textOverflow:
                                                                    "ellipsis",
                                                                maxWidth:
                                                                    "14ch",
                                                                padding: `0`,
                                                            }}
                                                            className="span-nameCode"
                                                        >
                                                            {nameCode
                                                                ? `: ${nameCode}`
                                                                : ""}
                                                        </span>
                                                    </Link>
                                                    {renderProjects()}
                                                </>
                                            )}
                                        </li>
                                    )}

                                    {nameCode && isAuthenticated && (
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            {isAuthenticated && name && (
                                                <p
                                                    className="nav-link dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <span
                                                        style={{
                                                            color: `#8167a9 !important`,
                                                            fontWeight: `780`,
                                                            display:
                                                                "inline-block",
                                                            whiteSpace:
                                                                "nowrap",
                                                            overflow: "hidden",
                                                            textOverflow:
                                                                "ellipsis",
                                                            maxWidth: "8ch",
                                                            padding: `0`,
                                                        }}
                                                        className="nameCode"
                                                    >
                                                        {nameCode}
                                                    </span>
                                                </p>
                                            )}
                                            <div className="dropdown-menu">
                                                <p
                                                    style={{
                                                        cursor: `pointer`,
                                                    }}
                                                    className="dropdown-item"
                                                    onClick={handleShare}
                                                >
                                                    Share
                                                </p>
                                                <p
                                                    style={{
                                                        cursor: `pointer`,
                                                    }}
                                                    className="dropdown-item"
                                                    onClick={(e) =>
                                                        handleSave(e)
                                                    }
                                                >
                                                    Save
                                                </p>
                                                <p
                                                    style={{
                                                        cursor: `pointer`,
                                                    }}
                                                    className="dropdown-item"
                                                    onClick={handleChangeName}
                                                >
                                                    Change name
                                                </p>
                                                <p
                                                    className="dropdown-item"
                                                    to=""
                                                    style={{
                                                        cursor: `pointer`,
                                                    }}
                                                    onClick={handleDelete}
                                                >
                                                    Delete
                                                </p>
                                            </div>
                                        </li>
                                    )}
                                    <li
                                        className={`nav-item pl-4 pl-md-0 ml-0 ml-md-4 ${classes.displaySave}`}
                                    >
                                        <Link
                                            className="nav-link"
                                            type="button"
                                            onClick={(e) => handleSave(e)}
                                            style={{
                                                color: "#8167a9 !important",
                                                fontWeight: 780,
                                                padding: `2px 8px`,
                                            }}
                                            to="/"
                                        >
                                            Save
                                        </Link>
                                    </li>
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 contain-profile">
                                        {isAuthenticated && name && (
                                            <Link
                                                className="nav-link dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                to=""
                                            >
                                                <span
                                                    style={{
                                                        color: `#8167a9 !important`,
                                                        fontWeight: `780`,
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: `flex`,
                                                        }}
                                                    >
                                                        <Fragment>
                                                            {picture ? (
                                                                <span
                                                                    style={{
                                                                        marginRight: `5px`,
                                                                        marginTop: `1.9px`,
                                                                        display: `block`,
                                                                        alignSelf: `center`,
                                                                        width: "25px important",
                                                                        height: `25px !important`,
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={
                                                                            picture
                                                                        }
                                                                        alt=""
                                                                        width="25px"
                                                                        heigh="25px"
                                                                        style={{
                                                                            width: "25px important",
                                                                            maxHeight: `25px !important`,
                                                                        }}
                                                                        className="avatar-user"
                                                                    />
                                                                </span>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </Fragment>
                                                        <Fragment>
                                                            <span
                                                                style={{
                                                                    alignSelf: `center`,
                                                                }}
                                                            >{` ${name}`}</span>
                                                        </Fragment>
                                                    </div>
                                                </span>
                                            </Link>
                                        )}
                                        <div className="dropdown-menu">
                                            {/* <Link
                                                className="dropdown-item"
                                                to="/Employee/Shareholder"
                                                onClick={handleLogout}
                                            >
                                                Sign out
                                            </Link> */}
                                            <Link
                                                className="dropdown-item"
                                                to={`/users/profile/${localStorage["access_token"]}`}
                                            >
                                                Profile
                                            </Link>
                                            <GoogleLogout
                                                clientId={API_GG}
                                                render={(renderProps) => (
                                                    <Link
                                                        className="dropdown-item"
                                                        to=""
                                                        onClick={(e) =>
                                                            handleLogout(
                                                                e,
                                                                renderProps.onClick
                                                            )
                                                        }
                                                    >
                                                        Sign out
                                                    </Link>
                                                )}
                                                onLogoutSuccess={
                                                    onLogoutGGSuccess
                                                }
                                            ></GoogleLogout>
                                        </div>
                                    </li>

                                    {!isAuthenticated && (
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link
                                                className="nav-link"
                                                to="/login"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                    )}

                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <>
                                            <Link
                                                className="nav-link dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                to=""
                                                style={{
                                                    color: "#8167a9 !important",
                                                    fontWeight: 780,
                                                    // marginLeft: `25%`
                                                }}
                                            >
                                                More
                                            </Link>
                                            <div className="dropdown-menu">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/forum/1"
                                                >
                                                    Forum
                                                </Link>

                                                <button
                                                    className="dropdown-item"
                                                    onClick={openListHTML}
                                                >
                                                    HTML
                                                </button>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={openListCSS}
                                                >
                                                    CSS
                                                </button>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={openListJS}
                                                >
                                                    JS
                                                </button>
                                            </div>
                                            {/* {renderProjects()} */}
                                        </>
                                    </li>

                                    {/* <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <Link className="nav-link" to="/code">
                                            {"<Code />"}
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {progress && (
                <Box
                    sx={{
                        width: "100%",
                        marginBottom: `-25.5px`,
                        paddingBottom: 0,
                    }}
                >
                    <LinearProgress />
                </Box>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    name: state.auth.account.name,
    nameCode: state.auth.nameCode,
    projects: state.code.projects,
    url: state.code.url,
});

const mapActionsToProps = {
    openModalSuccessCreator: openModalSuccess,
    updateCodeCreator: updateCode,
    directToCodeCreator: directToCode,
    logoutCreator: logout,
    getProjectsCreator: getProjects,
    setIsChangingCreator: setIsChanging,
    setIsDeletingCreator: setIsDeleting,
};

export default connect(mapStateToProps, mapActionsToProps)(Nav);
