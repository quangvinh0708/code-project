import GetStarted from "../../contentLibrary/css/GetStarted/GetStarted";
import Introduction from "../../contentLibrary/css/Introduction/Introduction";
import React from "react";
import Syntax from "../../contentLibrary/css/Syntax/Syntax";
import Selectors from "../../contentLibrary/css/Selectors/Selectors";
import HowTo from "../../contentLibrary/css/HowTo/HowTo";
import Colors from "../../contentLibrary/css/Colors/Colors";
import Backgrounds from "../../contentLibrary/css/Backgrounds/Backgrounds";
import Images from "../../contentLibrary/css/Images/Images";
import Attachment from "../../contentLibrary/css/Attachment/Attachment";
import Lists from "../../contentLibrary/css/Lists/Lists";
import Responsive from "../../contentLibrary/css/Responsive/Responsive";
import Combinators from "../../contentLibrary/css/Combinators/Combinators";

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
    {
        path: "/tutorials/css/css-syntax",
        name: "CSS Syntax",
        exact: true,
        component: (props) => <Syntax {...props} />,
    },
    {
        path: "/tutorials/css/css-selectors",
        name: "CSS Selectors",
        exact: true,
        component: (props) => <Selectors {...props} />,
    },
    {
        path: "/tutorials/css/css-how-to",
        name: "CSS How To",
        exact: true,
        component: (props) => <HowTo {...props} />,
    },
    {
        path: "/tutorials/css/css-colors",
        name: "CSS Colors",
        exact: true,
        component: (props) => <Colors {...props} />,
    },
    {
        path: "/tutorials/css/css-backgrounds",
        name: "CSS Backgrounds",
        exact: true,
        component: (props) => <Backgrounds {...props} />,
    },
    {
        path: "/tutorials/css/css-images",
        name: "CSS Images",
        exact: true,
        component: (props) => <Images {...props} />,
    },
    {
        path: "/tutorials/css/css-attachment",
        name: "CSS Attachment",
        exact: true,
        component: (props) => <Attachment {...props} />,
    },
    {
        path: "/tutorials/css/css-lists",
        name: "CSS Lists",
        exact: true,
        component: (props) => <Lists {...props} />,
    },
    {
        path: "/tutorials/css/css-responsive",
        name: "CSS responsive",
        exact: true,
        component: (props) => <Responsive {...props} />,
    },
    {
        path: "/tutorials/css/css-combinators",
        name: "CSS Combinators",
        exact: true,
        component: (props) => <Combinators {...props} />,
    },
];
