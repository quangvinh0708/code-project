import React, { useState, useEffect } from "react";

import styles from "./styles";
import { connect, useDispatch, useSelector } from "react-redux";
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
    checkLogin,
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
import { push } from "connected-react-router";

const Login = (props) => {
    const {
        classes,
        err,
        loginCreator,
        setProgressCreator,
        progress,
        isAuthenticated,
        setErrorLoginCreator,
        checkLoginCreator,
    } = props;
    // const [email, setEmail] = useState("");
    const [account, setAccount] = useState({
        email: "",
        password: "",
    });
    const nameCode = useSelector((state) => state.auth.nameCode);
    const dispatch = useDispatch();
    console.log("Login Component render");
    useEffect(() => {
        // setErrorLoginCreator(null);
        loginCreator(null);
        if (nameCode === null && !isAuthenticated) {
            setErrorLoginCreator(null);
        }
        checkLoginCreator();
    }, []);
    // checkLoginCreator();

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

    // const onClick = (e) => {
    //     window.open("https://youtube.com/");
    // };

    const responseGoogle = (res) => {
        // console.log(res);
        // sessionStorage.setItem("access_token", res.tokenId);
        dispatch(ggLogin.ggLoginRequest(res));
    };
    const responseFailureGoogle = (res) => {
        console.log("Just failed:", res);
        dispatch(push("/login"));
    };

    const responseFacebook = (res) => {
        dispatch(fbLogin.fbLoginRequest(res));
        console.log("FB Login:", res);
        // dispatch(setProgress(false));
    };

    const responseFacebookFailure = (res) => {
        // console.log("FB Login failure:", res);
    };

    // const directForgotPassword = (e) => {
    //     e.preventDefault();
    //     dispatch(push('/identify/user'))
    // }

    return (
        <Fragment>
            <div className={classes.background}>
                <div className={classes.login}>
                    <Card>
                        <CardContent>
                            <form action="">
                                <div className="text-xs-center pb-xs">
                                    <Typography
                                        variant="caption"
                                        sx={{ fontSize: `14.2px` }}
                                    >
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
                                    <Link
                                        to="/identify/user"
                                        className={classes.link}
                                    >
                                        <Button
                                            sx={{
                                                display: `block`,
                                                margin: `5px 0 2px 0`,
                                                padding: 0,
                                                width: `100%`,
                                                textAlign: `right`,
                                                textTransform: `none`,
                                                fontSize: `15px`,
                                                "&:focus": {
                                                    outline: `none`,
                                                },
                                            }}
                                            onClick={() =>
                                                setErrorLoginCreator(null)
                                            }
                                            // onClick={(e) => directForgotPassword(e)}
                                        >
                                            Forgot the password?
                                        </Button>
                                    </Link>
                                </Box>
                                <div
                                    style={{
                                        display: `flex`,
                                        flexDirection: `column`,
                                    }}
                                >
                                    <GoogleLogin
                                        clientId={API_GG}
                                        render={(renderProps) => (
                                            <Button
                                                variant="outlined"
                                                onClick={renderProps.onClick}
                                                style={{
                                                    fontSize: `14.7px`,
                                                    width: `max-content`,
                                                    margin: `7px auto 0 auto`,
                                                }}
                                            >
                                                <GoogleIcon
                                                    sx={{
                                                        marginRight: `5px`,
                                                    }}
                                                />
                                                Login with Google
                                            </Button>
                                        )}
                                        buttonText="Login with Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseFailureGoogle}
                                        cookiePolicy={"single_host_origin"}
                                    />

                                    <FacebookLogin
                                        // appId="430041831912720"
                                        appId="738343767123877" // focus
                                        // appId="1061825257933510" // codesonline
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        cssClass="btn btn-primary my-facebook-button-class pr-2 pl-2 btn-fb-login"
                                        icon="fa-facebook"
                                        callback={responseFacebook}
                                        onFailure={responseFacebookFailure}
                                    />
                                </div>

                                <div className="pt-1 text md-center">
                                    <Link
                                        // onClick={onClick}
                                        to="/register"
                                    >
                                        <Button
                                            sx={{ fontSize: `15px` }}
                                            onClick={() =>
                                                setErrorLoginCreator(null)
                                            }
                                        >
                                            Register new account?
                                        </Button>
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
    checkLoginCreator: checkLogin,
};

const withConnect = connect(mapStateToProps, mapActionsToProps);

export default compose(withConnect, withStyles(styles))(Login);
