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
    recoverPassword,
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
import { loginFailed } from "../../actions/login";
import DirectHelper from "./DirectHelper";
import Loading from "../Loading/Loading";
import { verifyUrlRecover } from "../../actions/direct";

const RecoveryPassword = (props) => {
    const {
        classes,
        err,
        loginCreator,
        setProgressCreator,
        progress,
        setErrorLoginCreator,
        match,
    } = props;
    // const [email, setEmail] = useState("");
    const [account, setAccount] = useState({
        newPassword: "",
        confirmPassword: "",
    });
    const dispatch = useDispatch();
    const errorStatus = useSelector((state) => state.auth.errorStatus);
    const appear = useSelector((state) => state.direct.appear);
    const isVerify = useSelector((state) => state.direct.isVerify);
    // const time = useSelector(state => state.direct.time)

    console.log("RecoveryPassword Component render");
    const onChange = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };
    const handleRecoverPassword = (e) => {
        e.preventDefault();
        dispatch(
            recoverPassword.recoverPasswordRequest({
                ...account,
                url: match.url.slice(1),
            })
        );
    };

    useEffect(() => {
        dispatch(
            verifyUrlRecover.verifyUrlRecoverRequest({
                isVerify: true,
                url: match.url.slice(1),
            })
        );
    }, []);

    return (
        <Fragment>
            {isVerify ? (
                <Loading />
            ) : (
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
                                        id="newPassword"
                                        label="New password"
                                        className={classes.textField}
                                        fullWidth
                                        margin="normal"
                                        name="newPassword"
                                        type="password"
                                        value={account.newPassword}
                                        onChange={onChange}
                                    />
                                    <TextField
                                        id="confirmPassword"
                                        label="Confirm the new password"
                                        className={classes.textField}
                                        fullWidth
                                        margin="normal"
                                        type="password"
                                        name="confirmPassword"
                                        value={account.confirmPassword}
                                        placeholder={`Confirm the new password`}
                                        onChange={onChange}
                                    />
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
                                                dispatch(setErrorLogin(null))
                                            }
                                            // onClick={(e) => directForgotPassword(e)}
                                        >
                                            Send new request?
                                        </Button>
                                    </Link>

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
                                    {appear && <DirectHelper />}

                                    <Box mt={2}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            type="submit"
                                            className={classes.btn}
                                            onClick={(e) =>
                                                handleRecoverPassword(e)
                                            }
                                        >
                                            Continue
                                        </Button>

                                        <Link to="/register">
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
                                                    dispatch(
                                                        setErrorLogin(null)
                                                    )
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
    loginFailedCreator: loginFailed,
};

const withConnect = connect(mapStateToProps, mapActionsToProps);

export default compose(withConnect, withStyles(styles))(RecoveryPassword);
