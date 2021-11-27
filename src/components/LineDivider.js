import { Divider } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Fragment } from "react";
import { styles } from "../contentLibrary/html/Introduction/styles";

const LineDivider = ({ size, classes }) => {
    return (
        <Fragment>
            {size === "big" ? (
                <Divider className={classes.dividerB} />
            ) : size === "small" ? (
                <Divider className={classes.dividerS} />
            ) : (
                <Divider className={classes.dividerS} />
            )}
        </Fragment>
    );
};

export default withStyles(styles)(LineDivider);
