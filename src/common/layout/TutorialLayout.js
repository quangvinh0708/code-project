import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Tutorial from "../../pages/tutorials/Tutorial";

const TutorialLayout = (props) => {
    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(routerProps) => (
                <Tutorial {...rest} routerProps={routerProps}>{Component(routerProps)}</Tutorial>
            )}
        />
    );
};

export default TutorialLayout;
