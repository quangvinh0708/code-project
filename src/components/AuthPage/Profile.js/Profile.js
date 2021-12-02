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
    Grid,
    CardHeader,
    Avatar,
    CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
    ggLogin,
    fbLogin,
    GGLogin,
    login,
    setErrorLogin,
    recoverPassword,
} from "../../../actions/login";
import { setProgress } from "../../../actions/modal";
import { set } from "mongoose";
import Nav from "../../Nav.js";
import { Fragment } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import FacebookLogin from "react-facebook-login";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { API_GG } from "../../../constant/axios";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { push } from "connected-react-router";
import { checkLastPwd } from "../../../actions/login";
import { loginFailed } from "../../../actions/login";
import DirectHelper from "../DirectHelper";
import Loading from "../../Loading/Loading";
import { verifyUrlRecover } from "../../../actions/direct";
import { useForm } from "react-hook-form";
import { getProfile, updateProfile } from "../../../actions/profile";
import useId from "@mui/utils/useId";

const Profile = (props) => {
    const { classes, match } = props;
    // const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const [preview, setPreview] = useState();
    const appear = useSelector((state) => state.direct.appear);
    const account = useSelector((state) => state.profile.profile);
    const isVerify = useSelector((state) => state.direct.isVerify);
    const fid = useSelector((state) => state.auth.fbAccountInfo.fid);
    const gid = useSelector((state) => state.auth.ggAccountInfo.gid);
    const uid = useSelector((state) => state.auth.account.uid);
    const name = useSelector((state) => state.auth.account.name);
    // const time = useSelector(state => state.direct.time)

    console.log("Profile Component render");
    const onChange = (e) => {
        dispatch(
            updateProfile.updateProfileSuccess({
                [e.target.name]: e.target.value,
            })
        );
    };
    // const handleRecoverPassword = (e) => {
    //     e.preventDefault();
    //     dispatch(
    //         recoverPassword.recoverPasswordRequest({
    //             ...account,
    //             url: match.url.slice(1),
    //         })
    //     );
    // };

    const previewFile = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            dispatch(
                updateProfile.updateProfileSuccess({ picture: reader.result })
            );
        };
    };

    const onChangeImage = (e) => {
        e.preventDefault();
        // setAccount({ ...account, [e.target.name]: e.target.files[0] });
        previewFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        const i = Number(match.url.lastIndexOf("/"));
        e.preventDefault();
        dispatch(
            updateProfile.updateProfileRequest({
                account: account,
                isVerify: true,
                url: match.url.slice(i + 1),
                fid: fid,
                gid: gid,
            })
        );
    };

    useEffect(() => {
        const i = Number(match.url.lastIndexOf("/"));
        console.log("useEffect Profile run...");
        dispatch(
            getProfile.getProfileRequest({
                isVerify: true,
                url: match.url.slice(i + 1),
            })
        );
    }, []);

    return (
        <Fragment>
            {isVerify ? (
                <Loading />
            ) : (
                <Box className={classes.contain}>
                    <Box className={classes.cardProfile}>
                        <Grid item xs={12} sm={12} className={classes.title}>
                            <CardHeader title={`${name}'s Information`} />
                        </Grid>
                        <div className={classes.profile}>
                            <Grid item sm={12} className={classes.left}>
                                {/* <CardHeader
                                    avatar={<Avatar>A</Avatar>}
                                    title="This is title"
                                /> */}

                                <div className={classes.imageBox}>
                                    <label
                                        htmlFor="file-input"
                                        className={classes.labelImage}
                                    >
                                        {!account.picture && (
                                            <CardMedia
                                                className={classes.avatar}
                                                component="img"
                                                image="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                            />
                                        )}
                                        {account.picture && (
                                            <img
                                                className={classes.avatar}
                                                src={account.picture}
                                            />
                                        )}
                                    </label>

                                    <input
                                        id="file-input"
                                        type="file"
                                        name="image"
                                        onChange={onChangeImage}
                                        style={{ display: `none` }}
                                    />
                                </div>
                            </Grid>
                            <Grid item sm={12} className={classes.right}>
                                <Box mt={1}>
                                    <TextField
                                        id="email"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        label="Email"
                                        value={account.email}
                                        variant="standard"
                                        className={classes.textInfo}
                                    />
                                    {uid && (
                                        <TextField
                                            id="uid"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            label="ID"
                                            value={uid}
                                            variant="standard"
                                            className={classes.textInfo}
                                        />
                                    )}
                                    {fid && (
                                        <TextField
                                            id="fid"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            label="ID"
                                            value={fid}
                                            variant="standard"
                                            className={classes.textInfo}
                                        />
                                    )}
                                    {gid && (
                                        <TextField
                                            id="gid"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            label="ID"
                                            value={gid}
                                            variant="standard"
                                            className={classes.textInfo}
                                        />
                                    )}

                                    <TextField
                                        id="name"
                                        // InputProps={{
                                        //     readOnly: true,
                                        // }}
                                        label="Name"
                                        name="name"
                                        required={true}
                                        value={account.name}
                                        onChange={onChange}
                                        variant="standard"
                                        className={classes.textInfo}
                                    />
                                    <TextField
                                        id="password"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        type="password"
                                        label="Password"
                                        value={account.password}
                                        variant="standard"
                                        className={classes.textInfo}
                                    />
                                    <TextField
                                        id="country"
                                        // InputProps={{
                                        //     readOnly: true,
                                        // }}
                                        label="Country"
                                        value={account.country}
                                        name="country"
                                        variant="standard"
                                        className={classes.textInfo}
                                        onChange={onChange}
                                    />
                                    <TextField
                                        id="phone"
                                        // InputProps={{
                                        //     readOnly: true,
                                        // }}
                                        label="Phone"
                                        value={account.phone}
                                        variant="standard"
                                        className={classes.textInfo}
                                        onChange={onChange}
                                        name="phone"
                                    />
                                    <TextField
                                        id="job"
                                        // InputProps={{
                                        //     readOnly: true,
                                        // }}
                                        label="Job"
                                        value={account.job}
                                        variant="standard"
                                        className={classes.textInfo}
                                        onChange={onChange}
                                        name="job"
                                    />
                                    <Box mt={2} mb={1}>
                                        <Button
                                            variant="contained"
                                            // color="secondary"
                                            onClick={handleSubmit}
                                            sx={{
                                                background: `#55DDC6`,
                                                "&:hover": {
                                                    background: `#28EEC6 !important`,
                                                },
                                            }}
                                        >
                                            Save
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </div>
                    </Box>
                </Box>
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

export default compose(withConnect, withStyles(styles))(Profile);
