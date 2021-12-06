import GetStarted from "../../contentLibrary/html/GetStarted/GetStarted";
import Introduction from "../../contentLibrary/html/Introduction/Introduction";
import React from "react";
import Basic from "../../contentLibrary/html/Basic/Basic";
import HTMLElements from "../../contentLibrary/html/HTMLElements/HTMLElements";
import Attributes from "../../contentLibrary/html/Attributes/Attributes";

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
    {
        path: "/tutorials/html/html-basic",
        name: "HTML Basic",
        exact: true,
        component: (props) => <Basic {...props} />,
    },
    {
        path: "/tutorials/html/html-elements",
        name: "HTML Elements",
        exact: true,
        component: (props) => <HTMLElements {...props} />,
    },
    {
        path: "/tutorials/html/attributes",
        name: "HTML Attributes",
        exact: true,
        component: (props) => <Attributes {...props} />,
    },
];
