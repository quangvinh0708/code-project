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
import { checkLastPwd } from "../../actions/login";
const ForgotPassword = (props) => {
    const {
        classes,
        err,
        loginCreator,
        setProgressCreator,
        progress,
        setErrorLoginCreator,
    } = props;
    // const [email, setEmail] = useState("");
    const [account, setAccount] = useState({
        email: "",
        recentPassword: "",
    });
    const dispatch = useDispatch();
    const errorStatus = useSelector((state) => state.auth.errorStatus);
    // useEffect(() => {
    //     // setErrorLoginCreator(null);
    //     loginCreator(null);
    // }, []);
    // console.log("ForgotPassword Component render");

    const onChange = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };
    const handleCheckLastPwd = (e) => {
        e.preventDefault();
        dispatch(checkLastPwd.checkLastPwdRequest(account));
    };

    return (
        <Fragment>
            <div className={classes.background2}>
                <div className={classes.login}>
                    <Card>
                        <CardContent>
                            <form action="">
                                <div className="text-xs-center pb-xs">
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontSize: `17.2px`,
                                            fontWeight: `499`,
                                        }}
                                    >
                                        Recover account
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
                                <Typography
                                    variant="caption"
                                    sx={{
                                        fontSize: `15.9px`,
                                        textAlign: `left`,
                                    }}
                                >
                                    <span
                                        style={{
                                            textAlign: `left`,
                                            width: `auto`,
                                        }}
                                    >
                                        Enter the last password you remember to
                                        use with this Google Account
                                    </span>
                                </Typography>
                                <TextField
                                    id="recentPassword"
                                    label="Enter the most recent password"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                    type="password"
                                    name="recentPassword"
                                    value={account.recentPassword}
                                    placeholder={`Enter the most recent password`}
                                    onChange={onChange}
                                />

                                {err && (
                                    <Alert
                                        variant="outlined"
                                        severity={errorStatus ? "error" : "success"} 
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
                                        onClick={(e) => handleCheckLastPwd(e)}
                                    >
                                        Continue
                                    </Button>
                                    <Link to="/register" className={classes.link1}>
                                        <Button
                                            sx={{
                                                display: `block`,
                                                margin: `5px 0 2px 0`,
                                                padding: 0,
                                                width: `100%`,
                                                textAlign: `center`,
                                                textTransform: `none`,
                                                fontSize: `16.5px`,
                                                "&:focus": {
                                                    outline: `none`,
                                                },
                                            }}
                                            onClick={() =>
                                                dispatch(setErrorLogin(null))
                                            }
                                        >
                                            Register new account?
                                        </Button>
                                    </Link>
                                </Box>
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

export default compose(withConnect, withStyles(styles))(ForgotPassword);
