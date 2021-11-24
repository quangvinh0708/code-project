import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { connect } from "react-redux";
import { compose } from "redux";

const Navbar = (props) => {
    const { isAuthenticated } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                color="transparent"
                sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
                <Toolbar>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        News
                    </Typography>
                    {!isAuthenticated && <Button color="inherit">Login</Button>}
                </Toolbar>
            </AppBar>
        </Box>
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

// const mapActionsToProps = {
//     // updateCodeCreator: updateCode,
//     // getCodeCreator: getCode,
//     // openModalCreator: openModal,
//     // closeModalCreator: closeModal,
//     loginCreator: login,
//     setProgressCreator: setProgress,
//     setErrorLoginCreator: setErrorLogin,
// };

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(Navbar);
