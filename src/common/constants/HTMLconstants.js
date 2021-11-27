import GetStarted from "../../contentLibrary/html/GetStarted/GetStarted";
import Introduction from "../../contentLibrary/html/Introduction/Introduction";
import React from "react";

export const HTML_TUTORIALS = [
    {
        path: "/tutorials/html/introduction",
        name: "Introduction",
        exact: true,
        component: (props) => <Introduction {...props} />,
    },
    {
        path: "/tutorials/html/get-started",
        name: "Get Started",
        exact: true,
        component: (props) => <GetStarted {...props} />,
    },
];
