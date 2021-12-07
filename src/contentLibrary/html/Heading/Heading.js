import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Heading = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">Heading</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    HTML headings are defined with the{" "}
                    <code>{`<h1> to <h6> `}</code>tags.
                </div>
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
                href={`${SHARE_CODE}/kLTjUsvo2KiJ4geUlReY1Dlxh0RtgI`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">Headings Are Important</div>
            <LineDivider size="small" />
            <ul className="list-group mt-3">
                <li className="list-group-item ">
                    Search engines use the headings to index the structure and
                    content of your web pages.
                </li>
                <li className="list-group-item ">
                    Users often skim a page by its headings. It is important to
                    use headings to show the document structure.
                </li>
                <li className="list-group-item">
                    <code>{`<h1>`}</code> headings should be used for main
                    headings, followed by{" "}
                    <code>{`<h2> headings, then the less important <h3>`}</code>
                    , and so on.
                </li>
            </ul>
            <div className="title h5 mt-5">Bigger Headings</div>
            <nav className="breadcrumb mt-3">
                Each HTML heading has a default size. However, you can specify
                the size for any heading with the style attribute, using the CSS
                font-size property:
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
                href={`${SHARE_CODE}/lXVKl4IDk3eLkbUX0W98WijFJNRLfi`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>

            <Direct />
        </div>
    );
};

export default withStyles(styles)(Heading);
