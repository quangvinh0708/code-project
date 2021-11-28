import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@mui/styles";
import theme from "./common/theme/theme.js";
import { CssBaseline } from "@mui/material";
// import "bootstrap/dist/css/bootstrap.min.css";
import { StylesProvider, createGenerateClassName } from "@mui/styles";
const generateClassName = createGenerateClassName({
    productionPrefix: "c",
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <StylesProvider generateClassName={generateClassName}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </StylesProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
