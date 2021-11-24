import React, { useState, useEffect } from "react";

import styles from "./styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStyles } from "@mui/styles";

import {
    Typography,
    Card,
    CardContent,
    Button,
    TextField,
    Alert,
    Box,
    LinearProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { login, setErrorLogin } from "../../actions/login";
import { setProgress } from "../../actions/modal";
import { set } from "mongoose";
import Nav from "../Nav.js";
import { Fragment } from "react";

const Login = (props) => {
    const {
        classes,
        err,
        loginCreator,
        setProgressCreator,
        progress,
        setErrorLoginCreator,
    } = props;
    const [email, setEmail] = useState("");
    const [account, setAccount] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        // setErrorLoginCreator(null);
        loginCreator(null);
    }, []);

    const onChange = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        loginCreator(account);
    };

    const onClick = (e) => {
        window.open("https://youtube.com/");
    };

    return (
        <Fragment>
            <Nav />

            <div className={classes.background}>
                <div className={classes.login}>
                    <Card>
                        <CardContent>
                            <form action="">
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Login to continue
                                    </Typography>
                                </div>
                                <TextField
                                    id="email"
                                    label="Email"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                    name="email"
                                    value={account.email}
                                    onChange={onChange}
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                    type="password"
                                    name="password"
                                    value={account.password}
                                    onChange={onChange}
                                />

                                {err && (
                                    <Alert
                                        variant="outlined"
                                        severity="error"
                                        className={classes.alert}
                                    >
                                        {err}
                                    </Alert>
                                )}

                                <Box mt={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        type="submit"
                                        className={classes.btn}
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </Button>
                                </Box>

                                <div className="pt-1 text md-center">
                                    <Link
                                        onClick={onClick}
                                        target="_blank"
                                        to=""
                                    >
                                        <Button>Register new account!</Button>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                        {progress && (
                            <Box sx={{ width: "100%", marginBottom: 0 }}>
                                <LinearProgress />
                            </Box>
                        )}
                    </Card>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    // codeData: state.code.codeData,
    // modalIsOpen: state.modal.modalIsOpen,
    isAuthenticated: state.auth.isAuthenticated,
    // err: state.code.error,
    err: state.auth.error,
    progress: state.modal.progress,
    isAuthenticated: state.auth.isAuthenticated,
});

const mapActionsToProps = {
    // updateCodeCreator: updateCode,
    // getCodeCreator: getCode,
    // openModalCreator: openModal,
    // closeModalCreator: closeModal,
    loginCreator: login,
    setProgressCreator: setProgress,
    setErrorLoginCreator: setErrorLogin,
};

const withConnect = connect(mapStateToProps, mapActionsToProps);

export default compose(withConnect, withStyles(styles))(Login);
