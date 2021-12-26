import { withStyles } from "@mui/styles";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../actions/tutorial";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./styles";
import cn from "classnames";

// import { connect } from 'react-redux';
// import { checkLogin } from '../../actions/login';

const Tutorial = (props) => {
    const { children, routerProps, classes } = props;
    const openSidebar = useSelector((state) => state.tutorial.openSidebar);
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log("routerProps.match.url", routerProps.match.url);
        dispatch(setLocation.setLocation(routerProps.match.url));
    }, []);
    // console.log(routerProps);
    return (
        <div className={classes.container}>
            <Sidebar openSidebar={openSidebar} />
            <div
                className={cn(classes.content, {
                    [classes.turnLeft]: openSidebar === false,
                })}
            >
                {children}
            </div>
        </div>
    );
};

// const mapActionsToProps = {
//     checkLoginCreator: checkLogin
// }

export default withStyles(styles)(Tutorial);
