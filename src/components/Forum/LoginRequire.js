import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `400px`,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,

    // borderBottom: `1px solid #e0e0e0`,
    // borderLeft: `1px solid #e0e0e0`,
    // // borderRight: `1px solid #e0e0e0`,
    // boxShadow: `-5px 3px 10px #e0e0e0`,
    // borderRadius: `5px`,

    outline: `none !important`,
    borderBottom: `1px solid #e0e0e0`,
    borderLeft: `1px solid #e0e0e0`,
    // borderRight: `1px solid #e0e0e0`,
    // boxShadow: `-10px 7px 10px #e0e0e0`,
    boxShadow: `0px 0px 8px 5px #e0e0e0`,
    // boxShadow: `0 0 5px 2px #000`,
    borderRadius: `5px`,

    ["@media(max-width: 767px)"]: {
        width: `95%`,
        margin: `auto`,
    },
};

export default function TransitionsModal({ open, handleOpen, handleClose }) {
    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{
                                fontFamily: `'Roboto Condensed', sans-serif`,
                            }}
                        >
                            Login required!
                        </Typography>
                        <Typography
                            id="transition-modal-description"
                            sx={{
                                mt: 1,
                                textAlign: `left !important`,
                            }}
                        >
                            You need to login to use this!
                            <Link to="/login">
                                <Button
                                    sx={{
                                        fontSize: `17px`,
                                    }}
                                >
                                    Login
                                </Button>
                            </Link>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
