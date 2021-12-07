import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Paragraphs = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">HTML Paragraphs</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    A paragraph always starts on a new line, and is usually a
                    block of text like <code>{`div`}</code> element
                </div>
            </nav>
            <b>
                <coded>{`<p> defines the most important paragraph. <p>`}</coded>
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
                href={`${SHARE_CODE}/yidVBThPrdGOrReEUCEf49lRONN2bH`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">HTML Paragraphs</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-5">
                <ul className="list-group mt-3">
                    <li className="list-group-item ">
                        The HTML <code>{`<p>`}</code> element defines a
                        paragraph.
                    </li>
                    <li className="list-group-item ">
                        A paragraph always starts on a new line, and browsers
                        automatically add some white space (a margin) before and
                        after a paragraph.
                    </li>
                </ul>
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
                href={`${SHARE_CODE}/wmLSd6KUzBOn6kf8cZo4ORWWBEgaDB`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title h5 mt-5">HTML Display</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                You cannot be sure how HTML will be displayed.
            </nav>
            <nav className="breadcrumb mt-3">
                Large or small screens, and resized windows will create
                different results.
            </nav>
            <nav className="breadcrumb mt-3">
                With HTML, you cannot change the display by adding extra spaces
                or extra lines in your HTML code.
            </nav>
            <nav className="breadcrumb mt-3">
                The browser will automatically remove any extra spaces and lines
                when the page is displayed:
            </nav>
            <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["exTag3"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/LJIHabYGvheJrwtRryZzL9VzlG3JGr`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <nav className="breadcrumb mt-3">
                Almost case use <code>{`<p></p>`}</code> tags for common text
            </nav>
            <div className="title h5 mt-5">HTML Horizontal Rules</div>
            <LineDivider size="small" />
            <div>
                <b>
                    The <code>{`<hr>`}</code> tag defines a thematic break in an
                    HTML page, and is most often displayed as a horizontal rule.
                    The<code>{`<hr>`}</code>element is used to separate content
                    (or define a change) in an HTML page:
                </b>
            </div>
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
                href={`${SHARE_CODE}/70b6rZBvYw5FEhJfOldaeNethFMdz1`}
                target="_blank"
                className="mt-5"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <nav className="breadcrumb mt-5">
                {" "}
                <b>
                    The <code>{`<hr>`}</code> tag is an empty tag, which means
                    that it has no end tag.
                </b>
            </nav>
            <div className="title h5 mt-5">HTML Line Breaks</div>
            <LineDivider size="small" />
            <div>
                <b>
                    The HTML <code>{`<br>`}</code> element defines a line break.
                </b>
            </div>{" "}
            <nav className="breadcrumb mt-2">
                Use <code>{`<br>`}</code> if you want a line break (a new line)
                without starting a new paragraph:
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
                href={`${SHARE_CODE}/SDbM321JjNCGJXE1Hn6TIHJPVEVDuS`}
                target="_blank"
                className="mt-5"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <nav className="breadcrumb mt-3">
                <b>
                    The <code>{` <br>`}</code> tag is an empty tag, which means
                    that it has no end tag.
                </b>
            </nav>
            <div className="title h5 mt-5">
                <div className="title h5 mt-5">The Poem Problem</div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-4">
                This poem will display on a single line:
            </nav>{" "}
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
            </div>
            <a
                href={`${SHARE_CODE}/Pxq1BPoi3m1HQ9CjysoyGLGXu4sd0s`}
                target="_blank"
                className="mt-5"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title h5 mt-5">
                <div className="title h5 mt-5">
                    Solution - The HTML <code>{`<pre>`}</code> Element
                </div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-5">
                The HTML <code>{`<pre>`}</code> element defines preformatted
                text.
            </nav>
            <b>
                The text inside a <code>{`<pre>`}</code> element is displayed in
                a fixed-width font (usually Courier), and it preserves both
                spaces and line breaks:
            </b>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag7"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <a
                href={`${SHARE_CODE}/O7MI6gPf7P6FzxXLzZ5akpN5PMdh9l`}
                target="_blank"
                className="mt-5"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag8"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag9"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag10"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Paragraphs);
