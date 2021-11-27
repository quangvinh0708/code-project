import { Button, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { Fragment } from "react";
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
import { API_GG } from "../constant/axios";

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
}) => {
    const [expanded, setExpanded] = React.useState(false);
    const openSidebar = useSelector((state) => state.tutorial.openSidebar);
    const picture = useSelector((state) => state.auth.account.picture);
    const dispatch = useDispatch();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleSave = (e) => {
        e.preventDefault();
        openModalSuccessCreator();
    };
    // const nameCode = localStorage['name'];

    const handleDirect = () => {
        directToCodeCreator();
    };

    const handleLogout = (e, x) => {
        e.preventDefault();
        x();
        // window.FB.logout();
        localStorage.removeItem("access_token");
        logoutCreator();
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

    const renderProjects = () => {
        let jsx;
        jsx = (
            <div className="dropdown-menu">
                <a href="/code" className="dropdown-item">
                    New Project
                </a>
                {projects.map((project, key) => (
                    <a
                        key={key}
                        className="dropdown-item"
                        href={`/${project._id}`}
                    >
                        {project.name}
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

    return (
        <div className="navigation-wrap bg-light start-header start-style">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav
                            className="navbar navbar-expand-md navbar-light static"
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
                                >
                                    <MenuIcon fontSize="medium" />
                                </IconButton>

                                <Link
                                    to="/code"
                                    onClick={handleDirect}
                                    style={{
                                        color: "#8167a9",
                                        fontSize: `1.5rem`,
                                        fontWeight: 680,
                                        padding: `2px 8px`,
                                        textDecoration: `none`,
                                        // boxShadow: "2px 2px",
                                    }}
                                >
                                    {"<Code Yourself />"}
                                </Link>
                            </div>

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
                                    {isAuthenticated && (
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            {isAuthenticated && name && (
                                                <>
                                                    <Link
                                                        className="nav-link dropdown-toggle"
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
                                                        Your Project
                                                        {nameCode
                                                            ? `: ${nameCode}`
                                                            : ""}
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
                                                        }}
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
                                                    onClick={handleChangeName}
                                                >
                                                    Change name
                                                </p>
                                                <p
                                                    className="dropdown-item"
                                                    to="/Employee/Shareholder"
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
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
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
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
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
                                                                        display: `block`,
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={
                                                                            picture
                                                                        }
                                                                        alt=""
                                                                        width="25px"
                                                                        heigh="25px"
                                                                    />
                                                                </span>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </Fragment>
                                                        <Fragment>
                                                            {` ${name}`}
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
                                                Tutorials
                                            </Link>
                                            <div className="dropdown-menu">
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
