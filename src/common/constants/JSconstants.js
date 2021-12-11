import GetStarted from "../../contentLibrary/js/GetStarted/GetStarted";
import Introduction from "../../contentLibrary/js/Introduction/Introduction";
import React from "react";
import Scripts from "../../contentLibrary/js/Scripts/Scripts";
import Output from "../../contentLibrary/js/Output/Output";

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
    {
        path: "/tutorials/js/scripts",
        name: "Scripts",
        exact: true,
        component: (props) => <Scripts {...props} />,
    },
    {
        path: "/tutorials/js/output",
        name: "Output",
        exact: true,
        component: (props) => <Output {...props} />,
    },
];
