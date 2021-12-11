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

const Combinators = (props) => {
    const [language, changeLanguage] = useState("html");
    const [languageDemo, changeDemo] = useState(ex["html"]);
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">CSS Combinators</p>
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
            </div> */}{" "}
            <div className="example mt-5">
                <b>
                    A combinator is something that explains the relationship
                    between the selectors.
                </b>
            </div>{" "}
            <nav className="breadcrumb mt-3">
                A CSS selector can contain more than one simple selector.
                Between the simple selectors, we can include a combinator.
            </nav>
            <nav className="breadcrumb mt-3">
                There are four different combinators in CSS:
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    descendant selector (space)
                </li>
                <li className="list-group-item mt-2">child selector {`(>)`}</li>
                <li className="list-group-item mt-2">
                    adjacent sibling selector (+)
                </li>
                <li className="list-group-item mt-2">
                    general sibling selector (~)
                </li>
            </ul>
            <div className="title mt-4">Descendant Selector</div>
            <Divider className={classes.dividerS} />
            <nav className="breadcrumb mt-3">
                The descendant selector matches all elements that are
                descendants of a specified element.
            </nav>
            <nav className="breadcrumb mt-3">
                The following example selects all{" "}
                <code>{`<p> elements inside <div>`}</code> elements:
            </nav>
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
            <a
                href={`${SHARE_CODE}/LQsHoRsi60cNP3yUb8Nwio0sBg6g8X`}
                target="_blank"
            >
                <button className="btn btn-code btn-large mt-3">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title mt-4">Child Selector {`>`}</div>
            <Divider className={classes.dividerS} />
            <nav className="breadcrumb mt-3">
                The child selector selects all elements that are the children of
                a specified element.
            </nav>
            <nav className="breadcrumb mt-3">
                The following example selects all{" "}
                <code>{`<p> elements that are children of a <div>`}</code>{" "}
                element:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"css"}
                    text={ex["structural"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/gUwXqVNdEQD3lY8Vt6lZ1Z1O2ixzRg`}
                target="_blank"
            >
                <button className="btn btn-code btn-large mt-3">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title mt-4">Adjacent Sibling Selector (+)</div>
            <Divider className={classes.dividerS} />{" "}
            <nav className="breadcrumb mt-3">
                The adjacent sibling selector is used to select an element that
                is directly after another specific element.
            </nav>
            <nav className="breadcrumb mt-3">
                Sibling elements must have the same parent element, and
                "adjacent" means "immediately following".
            </nav>{" "}
            <nav className="breadcrumb mt-3">
                The following example selects the first <code>{`<p>`}</code>{" "}
                element that are placed immediately after <code>{`<div>`}</code>{" "}
                elements:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"css"}
                    text={ex["exTag1"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/bhUQS8ZYqJp0kyeqmOIr0i11jPkTW7`}
                target="_blank"
            >
                <button className="btn btn-code btn-large mt-3">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title mt-4">General Sibling Selector (~)</div>
            <Divider className={classes.dividerS} />{" "}
            <nav className="breadcrumb mt-3">
                The general sibling selector selects all elements that are next
                siblings of a specified element.
            </nav>
            <nav className="breadcrumb mt-3">
                The following example selects all{" "}
                <code>{`<p> elements that are next siblings of <div>`}</code>{" "}
                elements:
            </nav>{" "}
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"css"}
                    text={ex["exTag2"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Combinators);
