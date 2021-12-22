import React, { useState, useEffect, Fragment } from "react";
import {
    Modal,
    TextField,
    Box,
    Button,
    Typography,
    LinearProgress,
    Alert,
    Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import {
    changeName,
    deleteProject,
    setCode,
    setError,
    setIsChanging,
    setIsDeleting,
    updateCode,
} from "../actions/code";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import { closeModal } from "../actions/modal";

const useStyles = makeStyles((theme) => ({
    modal: {
        top: `57%`,
        left: `50%`,
        transform: `translate(-50%, -90%)`,
        position: `absolute`,
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: `2px solid rgb(167, 202, 237)`,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 4),
        outline: `none`,
        padding: 0,
        borderRadius: `8px 8px`,
        "@media(max-width: 442px)": {
            width: `95% !important`,
        },
    },
    header: {
        backgroundColor: theme.color.textColor,
        color: theme.color.textColor,
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: theme.color.textColor,
        fontWeight: 700,

        width: `100%`,
    },
    content: {
        padding: theme.spacing(2),
    },
    textField: {
        width: `100%`,
    },
    textFieldOld: {
        display: `block`,
        minWidth: `100%`,
        // marginBottom: `50px`,
    },
    box: {
        margin: `0 15px 10px 0`,
    },
    typography1: {
        margin: `5px 0 0 0px`,
        fontSize: `15.5px`,
        color: theme.color.error,
    },
    progress: {
        color: "#ff6278",
    },
    typography2: {
        textTransform: `none`,
        width: `max-content`,
        color: `#1ba700`,
        fontWeight: `bold`,
        fontSize: `13px !important`,
    },
    typography3: {
        textTransform: `none`,
        width: `max-content`,
        color: `#29b117`,
        fontSize: `16px !important`,
        textDecoration: `none`,
        "& > a:hover": {
            color: `#5dd0e8`,
        },
    },
    box1: {
        marginLeft: `7px`,
        marginTop: `9x`,
    },
    box2: {
        marginTop: `9x`,
        marginLeft: `5px`,
    },
    icon: {
        marginTop: 5,
        cursor: `pointer`,
    },
}));

const NameProject = (props) => {
    const classes = useStyles();
    const {
        modalIsOpen,
        handleCloseModal,
        isAuthenticated,
        err,
        progress,
        updateCodeCreator,
        errCode,
        setCodeCreator,
        nameCode,
        isChanging,
        changeNameCreator,
        setIsChangingCreator,
        isDeleting,
        deleteProjectCreator,
        setIsDeletingCreator,
        setErrorCreator,
        closeModalCreator,
    } = props;

    const renderCheck = () => {
        let jsx = null;
        jsx = (
            <Fragment>
                {errCode && (
                    <Typography className={classes.typography1} component="div">
                        <span style={{ margin: `2px 0 0 6px` }}>
                            {errCode ? errCode : ""}
                        </span>
                    </Typography>
                )}
                {nameCode && !errCode ? (
                    <Box className={classes.box1}>
                        <Typography
                            component="div"
                            gutterBottom
                            className={classes.typography2}
                        >
                            {!isDeleting
                                ? "Click SAVE to continue to update"
                                : "Click DELETE if you really want to delete"}
                        </Typography>
                    </Box>
                ) : null}
                {!isAuthenticated && (
                    <Box className={classes.box2}>
                        <Typography
                            component="span"
                            gutterBottom
                            className={classes.typography3}
                        >
                            <Link
                                style={{ textDecoration: `none` }}
                                to="/login"
                            >
                                LOGIN?{" "}
                            </Link>{" "}
                            <span
                                style={{
                                    color: `#000`,
                                    fontSize: `13px`,
                                    fontWeight: 401,
                                }}
                            >
                                Don't worry, your code will still be here!
                            </span>
                        </Typography>
                    </Box>
                )}
            </Fragment>
        );
        return jsx;
    };

    const [value, setValue] = useState("");

    useEffect(() => {
        if (nameCode && isChanging) {
            setValue("");
        } else if (nameCode) {
            setValue(nameCode);
        } else setValue("");

        // setValue("");
    }, [isChanging, nameCode]);

    const handleChange = (e) => {
        setValue(e.target.value);
        // setValue(value);
    };

    const handleUpdate = () => {
        updateCodeCreator(value);
    };

    const handleChangeName = () => {
        changeNameCreator(value);
    };

    const handleDelete = () => {
        deleteProjectCreator();
    };

    const handleClose = () => {
        setErrorCreator(null);
        setIsChangingCreator(false);
        setIsDeletingCreator(false);
        closeModalCreator();
        if (nameCode && !isChanging) {
            setValue(nameCode);
        } else setValue("");
        handleCloseModal();
    };

    return (
        <Modal open={modalIsOpen}>
            <div className={classes.modal}>
                <div
                    style={{
                        display: `flex`,

                        padding: 0,
                        margin: 0,
                    }}
                >
                    {/* <div style={{ display: `flex`, justifyContent: `space-between`, background: `#1565C0`, height: `35px`, padding: 0, margin: 0 }}>NOTE</div> */}
                    <Alert
                        icon={false}
                        severity="success"
                        sx={{
                            width: `100%`,
                            display: `block`,
                        }}
                    >
                        <div
                            style={{
                                display: `flex`,
                                justifyContent: `space-between`,
                            }}
                        >
                            <p
                                style={{
                                    fontWeight: `700`,
                                    fontSize: `17px`,
                                    marginBottom: `3px`,
                                }}
                            >
                                {!isDeleting ? "Save your work" : "DELETE"}
                            </p>
                            <CancelIcon
                                className={classes.icon}
                                onClick={() => handleClose()}
                            />
                        </div>
                    </Alert>
                </div>
                <div className={classes.header} style={{ marginTop: `7px` }}>
                    <span className={classes.title}>
                        {isChanging && nameCode && (
                            <Tooltip
                                arrow
                                title={"Previous Project Name"}
                                placement={nameCode ? "top" : "top"}
                            >
                                <TextField
                                    readOnly={true}
                                    id="outlined-required"
                                    label={"Current Project Name"}
                                    placeholder="Your Project Name"
                                    placeholder="Your Project Name"
                                    className={classes.textField}
                                    value={nameCode}
                                    sx={{ marginBottom: `15px` }}
                                />
                            </Tooltip>
                        )}
                        <Tooltip
                            arrow
                            title={
                                nameCode && isAuthenticated && !isChanging
                                    ? "Name cannot be change in here"
                                    : !nameCode &&
                                      isAuthenticated &&
                                      !isChanging
                                    ? "Enter a name"
                                    : nameCode && isAuthenticated && isChanging
                                    ? "Give your new project name"
                                    : "You need to log in to use this feature"
                            }
                            placement={nameCode ? "top" : "top"}
                        >
                            <TextField
                                disabled={isAuthenticated ? false : true}
                                required
                                readOnly={
                                    nameCode && !isChanging ? true : false
                                }
                                id="outlined-required"
                                label={
                                    !nameCode && isAuthenticated && !isChanging
                                        ? "Give a name for your project"
                                        : isChanging
                                        ? "Give a new name you want in here"
                                        : "Your Project Name"
                                }
                                placeholder="Your Project Name"
                                className={classes.textField}
                                value={
                                    nameCode && !isChanging
                                        ? nameCode
                                        : isChanging
                                        ? value
                                        : nameCode
                                        ? nameCode
                                        : value
                                }
                                onChange={handleChange}
                            />
                        </Tooltip>

                        {renderCheck()}
                    </span>
                </div>
                <Box
                    display="flex"
                    flexDirection="row-reverse"
                    mt={2}
                    className={classes.box}
                >
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={!isAuthenticated || err ? true : false}
                            onClick={
                                !isChanging && !isDeleting
                                    ? handleUpdate
                                    : isChanging
                                    ? handleChangeName
                                    : handleDelete
                            }
                        >
                            {!nameCode && !isChanging && !isDeleting
                                ? "SAVE"
                                : isDeleting
                                ? "DELETE"
                                : "UPDATE"}
                        </Button>
                    </Box>
                    <Box mr={1}>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleClose()}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Box>

                {/* <div className={classes.content}>{component}</div> */}
                {progress && (
                    <Box sx={{ width: "100%" }}>
                        <LinearProgress />
                    </Box>
                )}
            </div>
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    // codeData: state.code.codeData,
    // modalIsOpen: state.modal.modalIsOpen,
    isAuthenticated: state.auth.isAuthenticated,
    errCode: state.code.error,
    err: state.auth.error,
    progress: state.modal.progress,
    isAuthenticated: state.auth.isAuthenticated,
    nameCode: state.auth.nameCode,
    isChanging: state.code.isChanging,
    isDeleting: state.code.isDeleting,
});

const mapActionsToProps = {
    updateCodeCreator: updateCode,
    setCodeCreator: setCode,
    changeNameCreator: changeName,
    setIsChangingCreator: setIsChanging,
    deleteProjectCreator: deleteProject,
    setIsDeletingCreator: setIsDeleting,
    setErrorCreator: setError,
    // getCodeCreator: getCode,
    // openModalCreator: openModal,
    closeModalCreator: closeModal,
    // loginCreator: login,
    // setProgressCreator: setProgress,
    // setErrorLoginCreator: setErrorLogin,
};

export default connect(mapStateToProps, mapActionsToProps)(NameProject);
