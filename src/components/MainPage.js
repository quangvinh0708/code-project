import React, { useState, useEffect, Fragment } from "react";
import Code from "./Code";
import useLocalStorage from "../hooks/useLocalStorage";
import { compose } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import { getCode, updateCode } from "../actions/code";
import { closeModal, openModal } from "../actions/modal";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import NameProject from "./NameProject";
import Login from "./AuthPage/Login";
import { login, setErrorLogin } from "../actions/login";
// import { Redirect } from "react-router";
// import Navbar from "./Navbar";
// import Nav from "./Nav.js";
import ModalShare from "./ModalShare/ModalShare";
import { makeStyles } from "@mui/styles";
import cs from "classnames";
// import Loading from "./Loading/Loading";
// import { openModalShare } from "../actions/modalShareCode";
const useStyles = makeStyles((them) => ({
    codeContainer: {
        // background: `#fff`,
        display: `flex`,
        flexDirection: `column`,
        marginTop: `70px`,
        transitionTimingFunction: `linear`,
        transition: `all 2s`,
        zIndex: `0 !important`,
    },
    "@keyframes fadeInFromBot": {
        "0%": {
            marginTop: "500px",
        },
        "100%": {
            opacity: 1,
            marginTop: "0px",
        },
    },
    "@keyframes fadeInFromLeft": {
        "0%": {
            marginLeft: "-700px",
        },
        "100%": {
            opacity: 1,
            marginLeft: "0px",
        },
    },
    topPane: {
        // width: status && !largeScreen ? "50% !important" : "42% !important",
        width: "50% !important",
        float: "right",
        display: "flex !important",
        flexDirection: "column !important",
        height: "min-content !important",
        transitionTimingFunction: `linear`,
        transition: `all 2s`,
        animation: `$fadeInFromLeft .5s ease-in-out`,
    },
    view: {
        // width: status && !largeScreen ? "50% !important" : "58% !important",
        width: "50% !important",
        float: "left !important",
        zIndex: "0",
        position: "fixed !important",
        right: "0",
        height: "100%",
        transitionTimingFunction: `linear`,
        transition: `all 2s`,
        animation: `$fadeInFromBot .4s ease-in-out`,
        ["@media(max-width: 500px)"]: {
            marginTop: `1% !important`,
        },
    },
    fullScreen: {
        display: `none !important`,
    },
    fullHeight: {
        height: `150vh`,
        minHeight: `150vh`,
        marginTop: `1.5%`,
        // overflowY: `hidden !important`,
    },
}));
const MainPage = ({
    // updateCodeCreator,
    getCodeCreator,
    codeData,
    match: { url: q },
    modalIsOpen,
    openModalCreator,
    closeModalCreator,
    isAuthenticated,
    loginCreator,
    err,
    errLogin,
    // isLoading,
    useStyles2,
}) => {
    let [html, setHtml] = useLocalStorage("html", "");

    // if (!html) {
    //   setHtml(`<!DOCTYPE html>
    //   <html lang="en">
    //   <head>
    //       <meta charset="UTF-8">
    //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //       <title>Document</title>
    //   </head>
    //   <body>

    //   </body>
    //   </html>`)
    // }

    const [css, setCss] = useLocalStorage("css", "");
    const [js, setJs] = useLocalStorage("js", "");
    const [srcDoc, setSrcDoc] = useState("");
    // const [openModal, setOpenModal] = useState(false);

    const status = useSelector((state) => state.view.status);
    const isLoad = useSelector((state) => state.modalShare.isLoading);
    const fullScreen = useSelector((state) => state.view.fullScreen);
    const largeScreen = useSelector((state) => state.view.largeScreen);
    // const useStyles = makeStyles((theme) => ({
    //     codeContainer: {
    //         // background: `#fff`,
    //         display: `flex`,
    //         flexDirection: `column`,
    //         marginTop: `70px`,
    //         transitionTimingFunction: `linear`,
    //         transition: `all 2s`,
    //         zIndex: `0 !important`,
    //     },
    //     "@keyframes fadeInFromBot": {
    //         "0%": {
    //             marginTop: "500px",
    //         },
    //         "100%": {
    //             opacity: 1,
    //             marginTop: "0px",
    //         },
    //     },
    //     "@keyframes fadeInFromLeft": {
    //         "0%": {
    //             marginLeft: "-700px",
    //         },
    //         "100%": {
    //             opacity: 1,
    //             marginLeft: "0px",
    //         },
    //     },
    //     topPane: {
    //         // width: status && !largeScreen ? "50% !important" : "42% !important",
    //         width: "50% !important",
    //         float: "right",
    //         display: "flex !important",
    //         flexDirection: "column !important",
    //         height: "min-content !important",
    //         transitionTimingFunction: `linear`,
    //         transition: `all 2s`,
    //         animation: `$fadeInFromLeft .5s ease-in-out`,
    //     },
    //     view: {
    //         // width: status && !largeScreen ? "50% !important" : "58% !important",
    //         width: "50% !important",
    //         float: "left !important",
    //         zIndex: "0",
    //         position: "fixed !important",
    //         right: "0",
    //         height: "100%",
    //         transitionTimingFunction: `linear`,
    //         transition: `all 2s`,
    //         animation: `$fadeInFromBot .4s ease-in-out`,
    //         ["@media(max-width: 500px)"]: {
    //             marginTop: `1% !important`,
    //         },
    //     },
    //     fullScreen: {
    //         display: `none !important`,
    //     },
    //     fullHeight: {
    //         height: `150vh`,
    //         minHeight: `150vh`,
    //         // overflowY: `hidden !important`,
    //     },
    // }));
    const classes = useStyles();
    const classes2 = useStyles2();

    // const url = useSelector((state) => state.code.url);
    const modalShareIsOpen = useSelector(
        (state) => state.modalShare.modalShareIsOpen
    );

    // !
    const dispatch = useDispatch();
    // dispatch(setErrorLogin(null));

    useEffect(() => {
        dispatch(setErrorLogin(null));
        getCodeCreator(q);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script defer async>${js}</script>
        </html>
      `);
        }, 270);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    const alertUser = (e) => {
        e.preventDefault();
        e.returnValue = "";
    };
    useEffect(() => {
        window.addEventListener("beforeunload", alertUser);
        return () => {
            window.removeEventListener("beforeunload", alertUser);
        };
    }, []);

    const renderForm = () => {
        let jsx;
        if (!isAuthenticated) {
            jsx = (
                <Login
                    err={errLogin}
                    loginCreator={(acc) => loginCreator(acc)}
                />
            );
        } else {
            jsx = (
                <NameProject
                    modalIsOpen={modalIsOpen}
                    handleCloseModal={() => handleCloseModal()}
                    isAuthenticated={isAuthenticated}
                    err={err}
                />
            );
        }
        return jsx;
    };

    const handleSave = () => {
        openModalCreator();
        // updateCodeCreator(html, css, js, q);
    };

    const handleCloseModal = () => {
        closeModalCreator();
    };

    return (
        <div
            // style={{
            //     display: `flex`,
            //     flexDirection: `column`,
            //     marginTop: `70px`,
            // }}
            // className={
            //     isLoading
            //         ? "loading-container code-container"
            //         : "code-container"
            // }
            style={{
                display: `flex`,
                flexDirection: `column`,
                marginTop: `70px`,
            }}
            className={cs("code-container", {
                [classes.codeContainer]: status === true,
            })}
        >
            <Fragment>
                {/* {isAuthenticated && ( */}

                <NameProject
                    modalIsOpen={modalIsOpen}
                    handleCloseModal={() => handleCloseModal()}
                    isAuthenticated={isAuthenticated}
                    err={err}
                />
                <ModalShare
                    modalShareIsOpen={modalShareIsOpen}
                    // handleCloseModal={() => handleCloseModal()}
                    isAuthenticated={isAuthenticated}
                />
                {/* )} */}
                {/* {!isAuthenticated && (
                <Redirect to='/login'></Redirect>
            )} */}
                {/* {renderForm()} */}
                {/* <button onClick={() => handleSave()}>Save</button> */}
                {!isLoad && (
                    <Fragment>
                        <div
                            className={cs(
                                "pane",
                                "top-pane",
                                {
                                    [classes.topPane]: status === true,
                                    [classes.fullScreen]: fullScreen === true,
                                },
                                {
                                    [classes2.topPane]:
                                        status === true && largeScreen === true,
                                }
                            )}
                        >
                            <Code
                                language="xml"
                                displayName="HTML"
                                value={html}
                                onChange={setHtml}
                                color="#f59251"
                                pro="html"
                                q={q}
                            />
                            <Code
                                language="css"
                                displayName="CSS"
                                value={css}
                                onChange={setCss}
                                color="lightskyblue"
                                pro="css"
                                q={q}
                            />
                            <Code
                                color="gold"
                                language="javascript"
                                displayName="JS"
                                value={js}
                                onChange={setJs}
                                pro="js"
                                q={q}
                            />
                        </div>
                        <div
                            className={cs(
                                "pane",
                                "view",
                                {
                                    [classes.view]: status === true,
                                    [classes.fullHeight]: fullScreen === true,
                                },
                                {
                                    [classes2.view]:
                                        status === true && largeScreen === true,
                                }
                            )}
                        >
                            <iframe
                                srcDoc={srcDoc}
                                title="output"
                                sandbox="allow-scripts"
                                frameBorder="0"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </Fragment>
                )}
            </Fragment>
        </div>
    );
};

const mapStateToProps = (state) => ({
    codeData: state.code.codeData,
    modalIsOpen: state.modal.modalIsOpen,
    isAuthenticated: state.auth.isAuthenticated,
    err: state.code.error,
    errLogin: state.auth.error,
    isLoading: state.modal.isLoading,
});

const mapActionsToProps = {
    updateCodeCreator: updateCode,
    getCodeCreator: getCode,
    openModalCreator: openModal,
    closeModalCreator: closeModal,
    loginCreator: login,
};

const withConnect = connect(mapStateToProps, mapActionsToProps);

export default compose(withConnect)(MainPage);
