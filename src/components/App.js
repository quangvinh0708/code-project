import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

export const history = createBrowserHistory();

function App({ updateCodeCreator, codeData }) {
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

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script defer async>${js}</script>
        </html>
      `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        // <Router>
        <ConnectedRouter history={history}>
            <Nav />
            <ToastContainer />
            <Switch>
                <Route
                    path="/login"
                    exact
                    component={({ match }) => <Login match={match} />}
                />
                <Route
                    path="/:id"
                    exact
                    component={({ match }) => <MainPage match={match} />}
                />
                <Route component={NotFound}></Route>
            </Switch>
            {/* // </Router> */}
        </ConnectedRouter>
    );
}

const mapStateToProps = (state) => ({
    codeData: state.code.codeData,
});

const mapActionsToProps = {
    updateCodeCreator: updateCode,
};

const withConnect = connect(mapStateToProps, mapActionsToProps);

export default compose(withConnect)(App);
