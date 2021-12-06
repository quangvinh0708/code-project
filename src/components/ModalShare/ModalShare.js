import React, { useState, useEffect, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import {
    Modal,
    TextField,
    Box,
    Button,
    Typography,
    LinearProgress,
    Alert,
    Tooltip,
    SliderValueLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import { openModalShare } from "../../actions/modalShareCode";
import Loading from "../Loading/Loading";

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
        fontWeight: `500`,
        fontSize: `15px !important`,
        margin: `4px 0 0 0px`,
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

const ModalShare = (props) => {
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
                        <span style={{ margin: `2px 0 0 6px` }}>Copied!</span>
                    </Typography>
                )}
                {value ? (
                    <Box className={classes.box1}>
                        <Typography
                            component="div"
                            gutterBottom
                            className={classes.typography2}
                        >
                            <DoneAllIcon sx={{ marginBottom: `3px` }} /> COPIED!
                        </Typography>
                    </Box>
                ) : (
                    ""
                )}
            </Fragment>
        );
        return jsx;
    };

    const [value, setValue] = useState("");
    const textRef = useRef(null);
    const modalShareIsOpen = useSelector(
        (state) => state.modalShare.modalShareIsOpen
    );
    const link = useSelector((state) => state.modalShare.link);
    const isLoading = useSelector((state) => state.modalShare.isLoading);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(openModalShare.openModalShareFailure());
        setValue("");
    };

    const onCopy = (e) => {
        console.log("textAreaRef", textRef.current.value);
        navigator.clipboard.writeText(
            textRef.current._wrapperState.initialValue
        );
        setValue(textRef.current.value);
    };
    useEffect(() => {}, []);

    return (
        <Fragment>
            {isLoading ? (
                <Loading />
            ) : (
                <Modal open={modalShareIsOpen}>
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
                                        {!isDeleting
                                            ? "Share your link"
                                            : "DELETE"}
                                    </p>
                                    <CancelIcon
                                        className={classes.icon}
                                        onClick={() => handleClose()}
                                    />
                                </div>
                            </Alert>
                        </div>
                        <div
                            className={classes.header}
                            style={{ marginTop: `7px` }}
                        >
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
                                            className={`${classes.textField} value`}
                                            value={nameCode}
                                            sx={{ marginBottom: `15px` }}
                                        />
                                    </Tooltip>
                                )}
                                <Tooltip
                                    arrow
                                    title={"Your link here"}
                                    placement={nameCode ? "top" : "top"}
                                >
                                    <TextField
                                        required
                                        readOnly={true}
                                        id="outlined-required"
                                        label={"Your Link Here"}
                                        placeholder="Your Link Here"
                                        className={classes.textField}
                                        value={link}
                                        // onChange={handleChange}
                                        inputRef={textRef}
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
                                    disabled={false}
                                    onClick={onCopy}
                                >
                                    COPY
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
            )}
        </Fragment>
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

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(ModalShare);
