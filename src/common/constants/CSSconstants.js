import GetStarted from "../../contentLibrary/css/GetStarted/GetStarted";
import Introduction from "../../contentLibrary/css/Introduction/Introduction";
import React from "react";

export const CSS_TUTORIALS = [
    {
        path: "/tutorials/css/introduction",
        name: "Introduction",
        exact: true,
        component: (props) => <Introduction {...props} />,
    },
    {
        path: "/tutorials/css/get-started",
        name: "Get Started",
        exact: true,
        component: (props) => <GetStarted {...props} />,
    },
];
