import React, { Fragment, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { compose } from "redux";
import { updateCode } from "../actions/code";
import useLocalStorage from "../hooks/useLocalStorage";
import Code from "./Code";
import MainPage from "./MainPage";
import NotFound from "./NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";
import Login from "./AuthPage/Login";
import Navbar from "../components/Navbar";
import Nav from "./Nav.js";
import Tutorial from "../pages/tutorials/Tutorial";
import TutorialLayout from "../common/layout/TutorialLayout";
import { HTML_TUTORIALS } from "../common/constants/HTMLconstants";
import { checkLogin } from "../actions/login";
import TutorialList from "./TutorialList";
import Sidebar from "./Sidebar/Sidebar";
import { CSS_TUTORIALS } from "../common/constants/CSSconstants";
import { JS_TUTORIALS } from "../common/constants/JSconstants";
import { Divider } from "@mui/material";
import Register from "./AuthPage/Register";
import ForgotPassword from "./AuthPage/ForgotPassword";
import HandleForgot from "./AuthPage/HandleForgot";
import RecoveryPassword from "./AuthPage/RecoveryPassword";
import AvatarUser from "./Avatar/AvatarUser";
import Profile from "./AuthPage/Profile.js/Profile";

export const history = createBrowserHistory();

function App({ updateCodeCreator, codeData, checkLoginCreator }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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

    // const [css, setCss] = useLocalStorage("css", "");
    // const [js, setJs] = useLocalStorage("js", "");
    // const [srcDoc, setSrcDoc] = useState("");
    checkLoginCreator();

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setSrcDoc(`
    //     <html>
    //       <body>${html}</body>
    //       <style>${css}</style>
    //       <script defer async>${js}</script>
    //     </html>
    //   `);
    //     }, 250);

    //     return () => clearTimeout(timeout);
    // }, [html, css, js]);

    const renderHTMLTutorials = () =>
        HTML_TUTORIALS.map((route) => {
            return <TutorialLayout {...route} key={route.path} />;
        });

    const renderCSSTutorials = () =>
        CSS_TUTORIALS.map((route) => {
            return <TutorialLayout {...route} key={route.path} />;
        });

    const renderJSTutorials = () =>
        JS_TUTORIALS.map((route) => {
            return <TutorialLayout {...route} key={route.path} />;
        });

    return (
        // <Router>
        <ConnectedRouter history={history}>
            <Nav />
            <div style={{ marginTop: 90 }}>
                <ToastContainer />
                <TutorialList />
                <Switch>
                    {/* <Route to="/Sidebar" exact component={Sidebar}/> */}
                    <Route
                        path="/users/profile/:id"
                        exact
                        component={({ match }) => <Profile match={match} />}
                    />
                    <Route
                        path="/recover/user/pwd/:id"
                        exact
                        component={({ match }) => (
                            <RecoveryPassword match={match} />
                        )}
                    />
                    <Route
                        path="/identify/user"
                        exact
                        component={ForgotPassword}
                    />
                    <Route
                        path="/"
                        exact
                        component={() => <Redirect to="/login"></Redirect>}
                    />
                    <Route
                        path="/register"
                        exact
                        // render={() => {
                        //     if (isAuthenticated) {
                        //         return <Redirect to="/login"></Redirect>;
                        //     } else return <Register />;
                        // }}
                        component={Register}
                    />

                    <Route
                        path="/login"
                        exact
                        component={({ match }) => <Login match={match} />}
                    />
                    {renderHTMLTutorials()}
                    {renderCSSTutorials()}
                    {renderJSTutorials()}
                    <Route
                        path="/:id"
                        exact
                        component={({ match }) => <MainPage match={match} />}
                    />
                    <Route component={NotFound}></Route>
                </Switch>
                {/* // </Router> */}
            </div>
        </ConnectedRouter>
    );
}

const mapStateToProps = (state) => ({
    codeData: state.code.codeData,
});

const mapActionsToProps = {
    updateCodeCreator: updateCode,
    checkLoginCreator: checkLogin,
};

const withConnect = connect(mapStateToProps, mapActionsToProps);

export default compose(withConnect)(App);
