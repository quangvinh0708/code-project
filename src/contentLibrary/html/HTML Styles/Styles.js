import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Styles = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">HTML Styles</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    The HTML style attribute is used to add styles to an
                    element, such as color, font, size, and more.
                </div>
            </nav>
            <nav className="breadcrumb mt-5">
                {" "}
                <code>{`<a style="something in here..." href="">Some text...</a>`}</code>{" "}
                tags.
            </nav>
            <b>
                <coded>{`<h1> defines the most important heading. <h6>`}</coded>{" "}
                defines the least important heading.
            </b>
            <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["getStarted"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/4QIp3swnMkWNGILFbjXTyt5UDBEemf`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">The HTML Style Attribute</div>
            <LineDivider size="small" />
            <ul className="list-group mt-3">
                <li className="list-group-item ">
                    And so on..., not just one style, you can define more style
                    on style attribute on each tag
                </li>
                <li className="list-group-item ">
                    Setting the style of an HTML element, can be done with the
                    style attribute.
                </li>
                <li className="list-group-item">
                    The HTML style attribute has the following syntax:
                </li>
            </ul>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag0"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <div className="title h5 mt-5">Background Color</div>
            <nav className="breadcrumb mt-3">
                The CSS background-color property defines the background color
                for an HTML element.
            </nav>
            <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["exTag1"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/3uzB6cwWYuC2bsm0M6CU1vhOcPk21x`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag2"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <a
                href={`${SHARE_CODE}/7jpea0kGuIOLKBjwMkGZN4dCiCH0vG`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">Text Color</div>
            <nav className="breadcrumb mt-4">
                The CSS color property defines the text color for an HTML
                element:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag3"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <a
                href={`${SHARE_CODE}/L7Uqs1d0cZOg2ib9OclleIc7Zm0omn`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">Fonts</div>
            <nav className="breadcrumb mt-4">
                The CSS font-family property defines the font to be used for an
                HTML element:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag4"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <a
                href={`${SHARE_CODE}/HnAYEhvMo9JDkUY3BpyqNjwjuTR5qX`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">Text Size</div>
            <nav className="breadcrumb mt-4">
                The CSS font-size property defines the text size for an HTML
                element:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag5"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <a
                href={`${SHARE_CODE}/EMLH8yWy9D4UkWmNhezTR0UMLmsuda`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">Text Alignment</div>
            <nav className="breadcrumb mt-4">
                The CSS text-align property defines the horizontal text
                alignment for an HTML element:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag6"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <a
                href={`${SHARE_CODE}/6Xh1kilej8CazF3tEMwerpwj8mKyYR`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <LineDivider size="small" />
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Styles);
