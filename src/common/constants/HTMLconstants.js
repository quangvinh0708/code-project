import GetStarted from "../../contentLibrary/html/GetStarted/GetStarted";
import Introduction from "../../contentLibrary/html/Introduction/Introduction";
import React from "react";
import Basic from "../../contentLibrary/html/Basic/Basic";
import HTMLElements from "../../contentLibrary/html/HTMLElements/HTMLElements";
import Attributes from "../../contentLibrary/html/Attributes/Attributes";
import Heading from "../../contentLibrary/html/Heading/Heading";
import Paragraphs from "../../contentLibrary/html/Paragraphs/Paragraphs";
import Styles from "../../contentLibrary/html/HTML Styles/Styles";
import Formatting from "../../contentLibrary/html/Formatting/Formatting";
import HTMLCSS from "../../contentLibrary/html/HTMLCSS/HTMLCSS";
import Links from "../../contentLibrary/html/Links/Links";
import Images from "../../contentLibrary/html/Images/Images";

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
        path: "/tutorials/html/heading",
        name: "Heading",
        exact: true,
        component: (props) => <Heading {...props} />,
    },
    {
        path: "/tutorials/html/paragraphs",
        name: "Paragraphs",
        exact: true,
        component: (props) => <Paragraphs {...props} />,
    },
    {
        path: "/tutorials/html/styles",
        name: "HTML Styles",
        exact: true,
        component: (props) => <Styles {...props} />,
    },
    {
        path: "/tutorials/html/formatting",
        name: "HTML Formatting",
        exact: true,
        component: (props) => <Formatting {...props} />,
    },
    {
        path: "/tutorials/html/html-css",
        name: "HTML - CSS",
        exact: true,
        component: (props) => <HTMLCSS {...props} />,
    },
    {
        path: "/tutorials/html/html-links",
        name: "HTML - Links",
        exact: true,
        component: (props) => <Links {...props} />,
    },
    {
        path: "/tutorials/html/html-images",
        name: "HTML - Images",
        exact: true,
        component: (props) => <Images {...props} />,
    },
];
