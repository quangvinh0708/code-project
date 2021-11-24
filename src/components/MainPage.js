import React, { useState, useEffect, Fragment } from "react";
import Code from "./Code";
import useLocalStorage from "../hooks/useLocalStorage";
import { compose } from "redux";
import { connect } from "react-redux";
import { getCode, updateCode } from "../actions/code";
import { closeModal, openModal } from "../actions/modal";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import NameProject from "./NameProject";
import Login from "./AuthPage/Login";
import { login } from "../actions/login";
import { Redirect } from "react-router";
import Navbar from "./Navbar";
import Nav from "./Nav.js";


const MainPage = ({
    updateCodeCreator,
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
    isLoading,
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
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
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
            style={{
                display: `flex`,
                flexDirection: `column`,
                marginTop: `70px`,
            }}
            className={isLoading ? "loading-container" : ""}
        >
          
            <Fragment>
                {/* {isAuthenticated && ( */}

                <NameProject
                    modalIsOpen={modalIsOpen}
                    handleCloseModal={() => handleCloseModal()}
                    isAuthenticated={isAuthenticated}
                    err={err}
                />
                {/* )} */}
                {/* {!isAuthenticated && (
                <Redirect to='/login'></Redirect>
            )} */}
                {/* {renderForm()} */}
                {/* <button onClick={() => handleSave()}>Save</button> */}
                <div className="pane top-pane">
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
                <div className="pane">
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
        </div>
    );
};

const mapStateToProps = (state) => ({
    codeData: state.code.codeData,
    modalIsOpen: state.modal.modalIsOpen,
    isAuthenticated: state.auth.isAuthenticated,
    err: state.code.error,
    errLogin: state.auth.error,
    isLoading: state.modal.isLoading
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
