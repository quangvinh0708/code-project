import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Images = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">HTML Images</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    Images can improve the design and the appearance of a web
                    page.
                </div>
            </nav>
            <img
                src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/263589965_1116181812456413_4271057305934982282_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=g6oSeW1i7JQAX8RHOAk&tn=AHJTDg93Zew1RfnP&_nc_ht=scontent.fdad3-1.fna&oh=67d24a2ca5f360a6dda20b526c9b96c8&oe=61D39242"
                alt=""
            />
            <div className="example mt-3">
                <div className="guide">An example</div>

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
                href={`${SHARE_CODE}/6hdXyHq3PZge7p8iA53VsQUkiPV4Mo`}
                target="_blank"
                className="mt-5"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">HTML Formatting Elements</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                Formatting elements were designed to display special types of
                text:
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item ">
                    <code>{` <b>`}</code> - Bold text
                </li>
                <li className="list-group-item ">
                    <code>{`<strong> - Important text`}</code>
                </li>
                <li className="list-group-item">
                    <code>{`<i> - Italic text`}</code>
                </li>
                <li className="list-group-item">
                    <code>{`<em> - Emphasized text`}</code>
                </li>
                <li className="list-group-item">
                    <code>{`<mark> - Marked text`}</code>
                </li>
                <li className="list-group-item">
                    <code>{`<small> - Smaller text`}</code>
                </li>
                <li className="list-group-item">
                    <code>{`<del> - Deleted text`}</code>
                </li>
                <li className="list-group-item">
                    <code>{`<ins> - Inserted text`}</code>
                </li>
                <li className="list-group-item">
                    <code>{`<sub> - Subscript text`}</code>
                </li>
                <li className="list-group-item">
                    <code>{`<sup> - Superscript text`}</code>
                </li>
            </ul>
            <div className="title h5 mt-5">
                <code>{`HTML <b> and <strong> Elements`}</code>
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The HTML <code>{`<b>`}</code> element defines bold text, without
                any extra importance.
            </nav>
            <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["structural"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/KwRUFwcBDJX92qpnMU5jdN22mDMxoI`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title h5 mt-5">The strong Attribute</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The HTML <code>{`<strong>`}</code> element defines text with
                strong importance. The content inside is typically displayed in
                bold.
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
                href={`${SHARE_CODE}/BuiTtqwWhYT9C1v1S7JE0aO2bs04T6`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title h5 mt-5">
                {" "}
                HTML <code>{`<i> and <em>`}</code> Elements
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The HTML <code>{`<i>`}</code> element defines a part of text in
                an alternate voice or mood. The content inside is typically
                displayed in italic.
            </nav>
            <nav className="breadcrumb mt-3">
                Tip: The <code>{`<i>`}</code> tag is often used to indicate a
                technical term, a phrase from another language, a thought, a
                ship name, etc.
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
            </div>
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <nav className="breadcrumb mt-3">
                The HTML <code>{`<em>`}</code> element defines emphasized text.
                The content inside is typically displayed in italic.
            </nav>
            <nav className="breadcrumb mt-3">
                Tip: A screen reader will pronounce the words in{" "}
                <code>{`<em>`}</code> with an emphasis, using verbal stress.
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
            </div>
            <div className="title h5 mt-5">
                HTML <code>{`<small>`}</code> Element
            </div>
            <LineDivider size="small" />
            <div>
                <b>
                    <code>{`The HTML <small> element defines smaller text:`}</code>
                </b>
            </div>
            <small>This is some smaller text.</small>
            <div className="title h5 mt-5">
                HTML <code>{`<mark>`}</code> Element
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The HTML <code>{`<mark>`}</code> element defines text that
                should be marked or highlighted:
            </nav>
            <div>
                <b>
                    <code>{`<p>Do not forget to buy <mark>milk</mark> today.</p>`}</code>
                </b>
            </div>
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large mt-3">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title h5 mt-5">
                <div className="title h5 mt-5">
                    HTML <code>{`<del>`}</code> Element
                </div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-3">
                The HTML <code>{`<del>`}</code> element defines text that has
                been deleted from a document. Browsers will usually strike a
                line through deleted text:
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
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large mt-3">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title h5 mt-5">
                <div className="title h5 mt-5">
                    HTML <code>{`<ins>`}</code> Element
                </div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-3">
                The HTML <code>{`<ins>`}</code> element defines text that has
                been deleted from a document. Browsers will usually strike a
                line through deleted text:
            </nav>
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
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large mt-3">
                    {CODES_ONLINE}
                </button>
            </a>{" "}
            <div className="title h5 mt-5">
                <div className="title h5 mt-5">
                    HTML <code>{`<sub>`}</code> Element
                </div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-3">
                The HTML <code>{`<sub>`}</code> element defines subscript text.
                Subscript text appears half a character below the normal line,
                and is sometimes rendered in a smaller font. Subscript text can
                be used for chemical formulas, like H2O:
            </nav>
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
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large mt-3">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title h5 mt-5">
                <div className="title h5 mt-5">
                    HTML <code>{`<sup>`}</code> Element
                </div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-3">
                The HTML <code>{`<sup>`}</code> element defines superscript
                text. Superscript text appears half a character above the normal
                line, and is sometimes rendered in a smaller font. Superscript
                text can be used for footnotes, like WWW[1]:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag11"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large mt-3">
                    {CODES_ONLINE}
                </button>
            </a>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Images);
