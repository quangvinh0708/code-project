import React, { useState, useEffect } from "react";

import styles from "./styles";
import { connect, useDispatch } from "react-redux";
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
import {
    ggLogin,
    fbLogin,
    GGLogin,
    login,
    setErrorLogin,
} from "../../actions/login";
import { setProgress } from "../../actions/modal";
import { set } from "mongoose";
import Nav from "../Nav.js";
import { Fragment } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import FacebookLogin from "react-facebook-login";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { API_GG } from "../../constant/axios";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

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
    const dispatch = useDispatch();
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

    const responseGoogle = (res) => {
        // console.log(res);
        // sessionStorage.setItem("access_token", res.tokenId);
        dispatch(ggLogin.ggLoginRequest(res));
    };
    const responseFailureGoogle = (res) => {
        console.log("Just failed:", res);
    };
    const check = () => {
        console.log("CHECK!!!");
    };
    const logout = (res) => {
        console.log(res);
    };

    const responseFacebook = (res) => {
        dispatch(fbLogin.fbLoginRequest(res));
        console.log("FB Login:", res);
    };

    return (
        <Fragment>
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
                                <div style={{ width: `100%` }}>
                                    <GoogleLogin
                                        clientId={API_GG}
                                        render={(renderProps) => (
                                            <button
                                                className="btn btn-primary"
                                                onClick={renderProps.onClick}
                                                style={{
                                                    fontSize: `16.7px`,
                                                    width: `max-content`,
                                                    margin: `7px 0 0 0`,
                                                }}
                                            >
                                                <GoogleIcon
                                                    sx={{ marginRight: `5px` }}
                                                />
                                                Login with Google
                                            </button>
                                        )}
                                        buttonText="Login with Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseFailureGoogle}
                                        cookiePolicy={"single_host_origin"}
                                    />
                                </div>

                                <FacebookLogin
                                    // appId="430041831912720"
                                    appId="738343767123877"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    cssClass="btn btn-primary my-facebook-button-class pr-2 pl-2 btn-fb-login"
                                    icon="fa-facebook"
                                    // onClick={componentClicked}
                                    // render={(renderProps) => (
                                    //     <button
                                    //         className="btn btn-primary"
                                    //         onClick={renderProps.onClick}
                                    //         disabled={renderProps.disabled}
                                    //         style={{
                                    //             fontSize: `16.7px`,
                                    //             width: `max-content`,
                                    //             margin: `7px 0 0 0`,
                                    //         }}
                                    //     >
                                    //         <FacebookIcon
                                    //             sx={{ marginRight: `5px` }}
                                    //         />
                                    //         Login with Facebook
                                    //     </button>
                                    // )}
                                    callback={responseFacebook}
                                />

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
