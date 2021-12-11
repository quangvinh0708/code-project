import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { setOpen } from "../actions/tutorial";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { HTML_TUTORIALS } from "../common/constants/HTMLconstants";
import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//     link: {
//         color: "inherit",
//         textDecoration: "none",
//         "&.active > li": {
//             background: `black`,
//         },
//     },
// });

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function TutorialList() {
    // const [open, setOpen] = React.useState(false);
    const open = useSelector((state) => state.tutorial.open);
    const location = useSelector((state) => state.tutorial.location);
    // const classes = useStyles();
    const tutorialList = useSelector((state) => state.tutorial.tutorialList);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        dispatch(setOpen.setOpen(true));
    };

    const handleClose = () => {
        dispatch(setOpen.setOpen(false));
    };

    const objStyleLink = {
        textDecoration: `none !important`,
        color: "#8167a9 !important",
        "&: hover": {
            background: `rgba(129, 103, 189, 87%)`,
            textDecoration: `none !important`,
            color: `#fff !important`,
        },
        // fontWeight: 490,
    };
    const objStyleLinkActive = {
        textDecoration: `none !important`,
        color: "#fff !important",
        background: `#8167a9`,
        "&: hover": {
            background: `rgba(129, 103, 189, 88%)`,
            textDecoration: `none !important`,
        },
        // fontWeight: 490,
    };
    const renderList = () => {
        const jsx = tutorialList
            ? tutorialList.map((lesson) => {
                  console.log("lesson path: ", lesson.path);
                  return (
                      <React.Fragment key={lesson.path}>
                          {/* <ListItemText primary="Phone ringtone" /> */}
                          <NavLink
                              to={`${lesson.path}`}
                              style={{ textDecoration: `none` }}
                              // className={classes.link}
                          >
                              <ListItem
                                  button
                                  onClick={handleClose}
                                  sx={
                                      location && location === lesson.path
                                          ? objStyleLinkActive
                                          : objStyleLink
                                  }
                              >
                                  {lesson.name}
                              </ListItem>
                          </NavLink>

                          <Divider />
                      </React.Fragment>
                  );
              })
            : null;
        return jsx;
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar
                    sx={{
                        position: "relative",

                        background: `#8167a9`,
                    }}
                >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            <Button autoFocus onClick={handleClose}>
                                <Link
                                    to="/code"
                                    style={{
                                        color: `#fff`,
                                        textDecoration: `none`,
                                    }}
                                >
                                    CLOSE
                                </Link>
                            </Button>
                        </Typography>
                        <Button autoFocus onClick={handleClose}>
                            <Link
                                to="/code"
                                style={{
                                    color: `#fff`,
                                    textDecoration: `none`,
                                }}
                            >
                                Your Project
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>{renderList()}</List>
            </Dialog>
        </div>
    );
}

export default TutorialList;
