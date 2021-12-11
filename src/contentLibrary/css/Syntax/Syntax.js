import React, { useState } from "react";
import { makeStyles, withStyles } from "@mui/styles";
import { CopyBlock, dracula, googlecode } from "react-code-blocks";
import ex from "./example";
import "../Introduction/Introduction.css";
import Divider from "@mui/material/Divider";
import { styles } from "../Introduction/styles";
import { Button } from "@mui/material";
import Direct from "../../../components/Direct";
import { CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Syntax = (props) => {
    const [language, changeLanguage] = useState("html");
    const [languageDemo, changeDemo] = useState(ex["html"]);
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">CSS Syntax</p>
            <Direct />
            <Divider className={classes.dividerB} />
            {/* <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["introduction"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div> */}
            <div className="example mt-5">
                <b>
                    A CSS rule consists of a selector and a declaration block.
                </b>
            </div>{" "}
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    The selector points to the HTML element you want to style.
                </li>
                <li className="list-group-item mt-2">
                    The declaration block contains one or more declarations
                    separated by semicolons.
                </li>
                <li className="list-group-item mt-2">
                    Each declaration includes a CSS property name and a value,
                    separated by a colon.
                </li>
                <li className="list-group-item mt-2">
                    Multiple CSS declarations are separated with semicolons, and
                    declaration blocks are surrounded by curly braces.
                </li>
            </ul>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"css"}
                    text={ex["getStarted"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <div className="title mt-4">Example Explained</div>
            <Divider className={classes.dividerS} />
            {/* <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["structural"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div> */}
            <div className="h4 mt-2 ">
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        p is a selector in CSS (it points to the HTML element
                        you want to style: <code>{`<p>`}</code>).
                    </div>
                </nav>
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        color is a property, and red is the property value
                    </div>
                </nav>
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        text-align is a property, and center is the property
                        value
                    </div>
                </nav>

                {/* <div className="example">
                    <CopyBlock
                        language={"html"}
                        text={ex["exTag1"]}
                        showLineNumbers={true}
                        theme={googlecode}
                        wrapLines={true}
                        codeBlock
                    />
                </div> */}
                {/* <div className="example">
                    <CopyBlock
                        language={"html"}
                        text={ex["exTag2"]}
                        showLineNumbers={true}
                        theme={googlecode}
                        wrapLines={true}
                        codeBlock
                    />
                </div> */}
            </div>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Syntax);
