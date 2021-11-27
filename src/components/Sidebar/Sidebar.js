import * as React from "react";
// import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { ADMIN_ROUTES } from "../../../constants/index";
import styles from "./styles";
import { withStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { HTML_TUTORIALS } from "../../common/constants/HTMLconstants";
import { CSS_TUTORIALS } from "../../common/constants/CSSconstants";
import { JS_TUTORIALS } from "../../common/constants/JSconstants";

const Sidebar = (props) => {
    // const [open, setOpen] = React.useState(false);
    const { classes, showSidebar, onToggleSidebar, openSidebar } = props;
    const tutorialList = useSelector((state) => state.tutorial.tutorialList);
    const location = useSelector((state) => state.tutorial.location);

    const toggleDrawer = (value) => {
        onToggleSidebar(value);
    };

    const defTutorials = () => {
        const l = window.location.href.toString();
        const tutorialsRoute = HTML_TUTORIALS.concat(
            CSS_TUTORIALS,
            JS_TUTORIALS
        );
        const list = tutorialsRoute.filter(
            (lesson) =>
                l.indexOf(lesson.path.slice(0, lesson.path.lastIndexOf("/"))) >
                0
        );
        return list;
    };

    const renderList = () => {
        let jsx = void 0;

        const tutorialListRender =
            tutorialList != void 0 && tutorialList.length
                ? tutorialList
                : defTutorials()
                ? defTutorials()
                : [];
        jsx = (
            <div className={classes.list}>
                <List component="div">
                    {tutorialListRender.map((lesson) => (
                        <NavLink
                            to={lesson.path}
                            exact={lesson.exact}
                            className={classes.link}
                            key={lesson.path}
                        >
                            <ListItem
                                className={
                                    location && location === lesson.path
                                        ? classes.objStyleLinkActive
                                        : classes.objStyleLink
                                }
                            >
                                {lesson.name}
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </div>
        );
        return jsx;
    };

    return (
        <Drawer
            open={openSidebar}
            onClose={() => toggleDrawer(false)}
            className={classes.drawerPaper}
            variant="persistent"
        >
            {renderList()}
        </Drawer>
    );
};

export default withStyles(styles)(Sidebar);
