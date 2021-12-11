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

const Selectors = (props) => {
    const [language, changeLanguage] = useState("html");
    const [languageDemo, changeDemo] = useState(ex["html"]);
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">CSS Selectors</p>
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
            <Divider className={classes.dividerS} />
            <div className="example mt-5">
                <b>
                    A CSS selector selects the HTML element(s) you want to
                    style.
                </b>
            </div>{" "}
            <div className="title mt-4">CSS Selectors</div>
            <Divider className={classes.dividerS} />{" "}
            <div className="example mt-5">
                <b>
                    CSS selectors are used to "find" (or select) the HTML
                    elements you want to style.
                </b>
            </div>{" "}
            <nav className="breadcrumb mt-3">
                We can divide CSS selectors into five categories:
            </nav>
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
            <div className="title mt-4">The CSS element Selector</div>
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
            <div className="mt-3">
                <b>
                    The element selector selects HTML elements based on the
                    element name.
                </b>
            </div>
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
                <div className="title mt-4">CSS Selectors</div>
                <Divider className={classes.dividerS} />{" "}
                <div className="example mt-3"></div>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["structural"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
                <a
                    href={`${SHARE_CODE}/0oxnMgCjL1OZg9o8wCEpoxY0cwFQe9`}
                    target="_blank"
                >
                    <button className="btn btn-code btn-large">
                        {CODES_ONLINE}
                    </button>
                </a>
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        The id selector uses the id attribute of an HTML element
                        to select a specific element.
                    </div>
                </nav>
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        The id of an element is unique within a page, so the id
                        selector is used to select one unique element!
                    </div>
                </nav>
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        To select an element with a specific id, write a hash
                        (#) character, followed by the id of the element.
                    </div>
                </nav>
                <div className="title mt-4">The CSS class Selector</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        The class selector selects HTML elements with a specific
                        class attribute.
                    </div>
                </nav>
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        To select elements with a specific class, write a period
                        (.) character, followed by the class name.
                    </div>
                </nav>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag1"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
                <a
                    href={`${SHARE_CODE}/usKglW52AcgoFjxEGTxowowUQJp4OG`}
                    target="_blank"
                >
                    <button className="btn btn-code btn-large">
                        {CODES_ONLINE}
                    </button>
                </a>
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        You can also specify that only specific HTML elements
                        should be affected by a class.
                    </div>
                </nav>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag2"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        HTML elements can also refer to more than one class.
                    </div>
                </nav>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag3"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
                <div className="title mt-4">The CSS Universal Selector</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        The universal selector (*) selects all HTML elements on
                        the page.
                    </div>
                </nav>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag4"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
                <div className="title mt-4">The CSS Grouping Selector</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        The grouping selector selects all the HTML elements with
                        the same style definitions.
                    </div>
                </nav>
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        Look at the following CSS code (the h1, h2, and p
                        elements have the same style definitions):
                    </div>
                </nav>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag5"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        It will be better to group the selectors, to minimize
                        the code.
                    </div>
                </nav>
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        To group selectors, separate each selector with a comma.
                    </div>
                </nav>{" "}
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag6"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />{" "}
            </div>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Selectors);
