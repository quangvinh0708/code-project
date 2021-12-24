import GetStarted from "../../contentLibrary/js/GetStarted/GetStarted";
import Introduction from "../../contentLibrary/js/Introduction/Introduction";
import React from "react";
import Scripts from "../../contentLibrary/js/Scripts/Scripts";
import Output from "../../contentLibrary/js/Output/Output";
import Structure from "../../contentLibrary/js/Structure/Structure";
import BasicOperator from "../../contentLibrary/js/BasicOperator/BasicOperator";
import Switch from "../../contentLibrary/js/Switch/Switch";
import Function from "../../contentLibrary/js/Function/Function";
import Variables from "../../contentLibrary/js/Variables/Variables";

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
    {
        path: "/tutorials/js/structure",
        name: "Structure",
        exact: true,
        component: (props) => <Structure {...props} />,
    },
    {
        path: "/tutorials/js/basic-operator",
        name: "Basic Operator",
        exact: true,
        component: (props) => <BasicOperator {...props} />,
    },
    {
        path: "/tutorials/js/switch-statement",
        name: "Switch Statement",
        exact: true,
        component: (props) => <Switch {...props} />,
    },
    {
        path: "/tutorials/js/function",
        name: "Function",
        exact: true,
        component: (props) => <Function {...props} />,
    },
    {
        path: "/tutorials/js/variables",
        name: "Variables",
        exact: true,
        component: (props) => <Variables {...props} />,
    },
];
