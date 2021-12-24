import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { setImageWillBeShow } from "../../actions/messenger";
import { CardMedia, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import cs from "classnames";
import { makeStyles } from "@mui/styles";

const style = {
    position: "absolute",
    top: "49%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `85% !important`,
    // bgcolor: "background.paper",
    // boxShadow: 24,
    // padding: `60px 0px !important`,
    p: 5,

    outline: `none !important`,
    border: `none !important`,
    // borderBottom: `1px solid #e0e0e0`,
    // borderLeft: `1px solid #e0e0e0`,
    // // borderRight: `1px solid #e0e0e0`,
    // boxShadow: `-5px 3px 10px #e0e0e0`,
    // borderRadius: `5px`,

    // height: `520px`,
    // margin: `25px 0px 0px 0px !important`,

    margin: `auto !important`,
    ["@media(max-width: 767px)"]: {
        width: `95%`,
        margin: `auto`,

        p: 1,
    },
    // ["@media(min-width: 1267px)"]: {
    //     width: `95%`,
    //     margin: `auto`,

    //     p: 1,
    // },
};

const useStyles = makeStyles((theme) => ({
    closeImageShow: {
        zIndex: `1000 !important`,
        position: "absolute !important",
        top: "50% !important",
        background: "#FFFFFF !important",
        right: "-18px !important",
        ["@media(max-width: 1032px)"]: {
            zIndex: `1000 !important`,
            position: "absolute !important",
            top: "-9px !important",
            left: "-15px !important",
        },
        ["@media(min-width: 2200px)"]: {
            zIndex: `1000 !important`,
            position: "relative !important",
            top: "-9px !important",
            // left: "-15px !important",
        },
    },
    boxImage: {
        position: `relative !important`,
        // outline: `none !important`,
        // borderBottom: `1px solid #e0e0e0`,
        // borderLeft: `1px solid #e0e0e0`,
        // // borderRight: `1px solid #e0e0e0`,
        // boxShadow: `-5px 3px 10px #e0e0e0`,
        // borderRadius: `5px`,
        ["@media(max-width: 1032px)"]: {
            outline: `none !important`,
            borderBottom: `1px solid #e0e0e0`,
            borderLeft: `1px solid #e0e0e0`,
            borderRight: `1px solid #e0e0e0`,
            boxShadow: `0px 0px 10px 9px #e0e0e0`,

            borderRadius: `5px`,
            transition: `all 2s !important`,
        },
    },
    imgShow: {
        // borderBottom: `1px solid #e0e0e0 !important`,
        // borderLeft: `1px solid #e0e0e0 !important`,
        // // borderRight: `1px solid #e0e0e0`,
        // boxShadow: `-5px 3px 10px #e0e0e0 !important`,
        // borderRadius: `5px`,
    },
}));

export default function ImageModal() {
    const classes = useStyles();
    const dp = useDispatch();
    const handleOpen = () => dp(setImageWillBeShow.setImageWillBeShowSuccess());
    const handleClose = () =>
        dp(setImageWillBeShow.setImageWillBeShowFailure());

    const imageWillBeShow = useSelector(
        (state) => state.messenger.imageWillBeShow
    );
    const openImageModal = useSelector(
        (state) => state.messenger.openImageModal
    );

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openImageModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                sx={{ width: `100% !important`, margin: `auto !important` }}
            >
                <Fade in={openImageModal}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-description"
                            className={cs(classes.boxImage)}
                        >
                            <img
                                src={imageWillBeShow}
                                alt=""
                                className={cs(classes.imgShow)}
                            />
                            <IconButton
                                className={cs(classes.closeImageShow)}
                                onClick={handleClose}
                            >
                                <CloseIcon
                                    sx={{
                                        fontSize: `15px !important`,
                                        ["@media(min-width: 1532px)"]: {
                                            fontSize: `24px !important`,
                                        },
                                    }}
                                />
                            </IconButton>
                        </Typography>

                        {/* <Typography
                            id="transition-modal-description"
                            sx={{ mt: 0 }}
                        >
                            <CardMedia
                                image={imageWillBeShow}
                                title="Title"
                                component="img"
                                sx={{
                                    width: `50px !important`,
                                    height: `50px !important`,
                                }}
                            />
                        </Typography> */}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
