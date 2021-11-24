import { Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    directToCode,
    updateCode,
    getProjects,
    changeName,
    setIsChanging,
    setIsDeleting,
} from "../actions/code";
import { logout } from "../actions/login";
import { openModalSuccess } from "../actions/modal";
import "./Nav.css";

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
    setIsDeletingCreator
}) => {
    const handleSave = (e) => {
        e.preventDefault();
        openModalSuccessCreator();
    };
    // const nameCode = localStorage['name'];

    const handleDirect = () => {
        directToCodeCreator();
    };

    const handleLogout = (e) => {
        e.preventDefault();
        logoutCreator();
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
    }

    const renderProjects = () => {
        let jsx;
        jsx = (
            <div className="dropdown-menu">
                <a href="/code" className="dropdown-item">New Project</a>
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

    return (
        <div className="navigation-wrap bg-light start-header start-style">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav
                            className="navbar navbar-expand-md navbar-light static"
                            style={{ position: `relative` }}
                        >
                            <Link
                                className="navbar-brand"
                                to="/code"
                                style={{
                                    color: "#8167a9",
                                    fontSize: `1.5rem`,
                                    fontWeight: 680,
                                    padding: `2px 8px`,
                                    boxShadow: "2px 2px",
                                }}
                                onClick={handleDirect}
                            >
                                {"<Code Yourself />"}
                            </Link>

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
                            >
                                <ul className="navbar-nav ml-auto py-4 py-md-0">
                                    {isAuthenticated && (
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            {isAuthenticated && name && (
                                                <>
                                                    {" "}
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
                                            Save code
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
                                                Hi!{""}
                                                <span
                                                    style={{
                                                        color: `#8167a9 !important`,
                                                        fontWeight: `780`,
                                                    }}
                                                >
                                                    {` ${name}`}
                                                </span>
                                            </Link>
                                        )}
                                        <div className="dropdown-menu">
                                            {/* <a
                                                className="dropdown-item"
                                                href="/Employee/ViewRecord"
                                            >
                                                Log out
                                            </a> */}

                                            <Link
                                                className="dropdown-item"
                                                to="/Employee/Shareholder"
                                                onClick={handleLogout}
                                            >
                                                Sign out
                                            </Link>
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
});

const mapActionsToProps = {
    openModalSuccessCreator: openModalSuccess,
    updateCodeCreator: updateCode,
    directToCodeCreator: directToCode,
    logoutCreator: logout,
    getProjectsCreator: getProjects,
    setIsChangingCreator: setIsChanging,
    setIsDeletingCreator: setIsDeleting
};

export default connect(mapStateToProps, mapActionsToProps)(Nav);
