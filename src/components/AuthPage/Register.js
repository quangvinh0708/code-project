import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
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
    register,
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
import Login from "./Login";

const Register = (props) => {
    const {
        classes,
        err,
        loginCreator,
        setProgressCreator,
        progress,
        setErrorLoginCreator,
        isAuthenticated,
    } = props;
    // const [email, setEmail] = useState("");
    const [account, setAccount] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    });
    const dispatch = useDispatch();
    const errorStatus = useSelector((state) => state.auth.errorStatus);

    useEffect(() => {
        // setErrorLoginCreator(null);
        loginCreator(null);
    }, []);
    console.log("Register Component render");

    const onChange = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register.registerRequest(account));
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

    const jsx = (
        <Redirect
            to="/login"
            component={({ match }) => <Login match={match} />}
        ></Redirect>
    );
    console.log(`isAuthenticated ${isAuthenticated}`);
    return (
        <Fragment>
            {localStorage["access_token"] ? (
                jsx
            ) : (
                <Fragment>
                    <div
                        className={classes.background1}
                        style={{ marginTop: `4.9%`, height: `300px` }}
                    >
                        <div className={classes.login1}>
                            <Card
                                sx={{
                                    ["@media(max-width: 1500px)"]: {
                                        marginTop: `-6%`,
                                    },
                                    ["@media(max-width: 900px)"]: {
                                        marginTop: `3%`,
                                    },
                                    ["@media(max-width: 550px)"]: {
                                        marginTop: `10%`,
                                    },
                                }}
                            >
                                <CardContent style={{ width: `100%` }}>
                                    <form action="">
                                        <div className="text-xs-center pb-xs mt-3">
                                            <Typography
                                                variant="caption"
                                                sx={{ fontSize: `14.2px` }}
                                            >
                                                Register to continue
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
                                            id="name"
                                            label="Name"
                                            className={classes.textField}
                                            fullWidth
                                            margin="normal"
                                            name="name"
                                            value={account.name}
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
                                        <TextField
                                            id="confirmPassword"
                                            label="Confirm Password"
                                            className={classes.textField}
                                            fullWidth
                                            margin="normal"
                                            type="password"
                                            name="confirmPassword"
                                            value={account.confirmPassword}
                                            onChange={onChange}
                                        />

                                        {err && (
                                            <Alert
                                                variant="outlined"
                                                severity={
                                                    errorStatus
                                                        ? "error"
                                                        : "success"
                                                }
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
                                                onClick={handleRegister}
                                            >
                                                Register
                                            </Button>
                                        </Box>

                                        {/* <div
                                    style={{
                                        display: `flex`,
                                        flexDirection: `column`,
                                    }}
                                >
                                    <GoogleLogin
                                        clientId={API_GG}
                                        render={(renderProps) => (
                                            <Button
                                                onClick={renderProps.onClick}
                                                variant="outlined"
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
                                        appId="738343767123877"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        cssClass="btn btn-primary my-facebook-button-class pr-2 pl-2 btn-fb-login"
                                        icon="fa-facebook"
                                        callback={responseFacebook}
                                    />
                                </div> */}

                                        <div className="pt-1 text md-center">
                                            <Link
                                                // onClick={onClick}
                                                // target="_blank"
                                                to="/login"
                                            >
                                                <Button
                                                    sx={{
                                                        textTransform: `none`,
                                                        fontSize: `15.7px`,
                                                        margin: `0 0 0 0`,
                                                        padding: 0,
                                                    }}
                                                    onClick={() =>
                                                        dispatch(
                                                            setErrorLogin(null)
                                                        )
                                                    }
                                                >
                                                    Already have an account?
                                                    Login
                                                </Button>
                                            </Link>
                                        </div>
                                    </form>
                                </CardContent>
                                {progress && (
                                    <Box
                                        sx={{ width: "100%", marginBottom: 0 }}
                                    >
                                        <LinearProgress />
                                    </Box>
                                )}
                            </Card>
                        </div>
                    </div>
                </Fragment>
            )}
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

export default compose(withConnect, withStyles(styles))(Register);
