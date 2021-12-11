import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "./styles";
import "./Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Introduction = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">JavaScript Introduction</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    This page contains some examples of what JavaScript can do.
                </div>
            </nav>
            <div className="h4 title mt-5">
                JavaScript Can Change HTML Content
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                One of many JavaScript HTML methods is getElementById().
            </nav>
            <nav className="breadcrumb mt-3">
                The example below "finds" an HTML element (with id="demo"), and
                changes the element content (innerHTML) to "Hello JavaScript":
            </nav>
            <a
                href={`${SHARE_CODE}/PosyxyJfqpmzt96dik5VD07HdSGEd9`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <nav className="breadcrumb mt-3">
                <b>
                    Tip: The word cascading means that a style applied to a
                    parent element will also apply to all children elements
                    within the parent. So, if you set the color of the body text
                    to "blue", all headings, paragraphs, and other text elements
                    within the body will also get the same color (unless you
                    specify something else)!
                </b>
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["introduction"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <nav className="breadcrumb mt-3">
                <b>JavaScript accepts both double and single quotes:</b>
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["getStarted"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <div className="h4 title mt-5">Overview</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                JavaScript is a multi-paradigm, dynamic language with types and
                operators, standard built-in objects, and methods.
            </nav>

            <nav className="breadcrumb mt-3">
                Its syntax is based on the Java and C languages — many
                structures from those languages apply to JavaScript as well.
                JavaScript supports object-oriented programming with object
                prototypes, instead of classes (see more about prototypical
                inheritance and ES2015 classes). JavaScript also supports
                functional programming — because they are objects, functions may
                be stored in variables and passed around like any other object.
            </nav>

            <nav className="breadcrumb mt-3">
                Let's start off by looking at the building blocks of any
                language: the types. JavaScript programs manipulate values, and
                those values all belong to a type. JavaScript's types are:
            </nav>
            <nav className="breadcrumb mt-3">
                oh, and undefined and null, which are ... slightly odd. And
                Array, which is a special kind of object. And Date and RegExp,
                which are objects that you get for free. And to be technically
                accurate, functions are just a special type of object. So the
                type diagram looks more like this:
            </nav>
            <nav className="breadcrumb mt-3">
                And there are some built-in Error types as well. Things are a
                lot easier if we stick with the first diagram, however, so we'll
                discuss the types listed there for now.
            </nav>

            <Direct />
        </div>
    );
};

export default withStyles(styles)(Introduction);
