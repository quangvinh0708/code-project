import GetStarted from "../../contentLibrary/js/GetStarted/GetStarted";
import Introduction from "../../contentLibrary/js/Introduction/Introduction";
import React from "react";

export const JS_TUTORIALS = [
    {
        path: "/tutorials/js/introduction",
        name: "Introduction",
        exact: true,
        component: (props) => <Introduction {...props} />,
    },
    {
        path: "/tutorials/js/get-started",
        name: "Get Started",
        exact: true,
        component: (props) => <GetStarted {...props} />,
    },
];
