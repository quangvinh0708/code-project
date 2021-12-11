import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";
import Divider from "@mui/material/Divider";

const Scripts = (props) => {
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">Scripts</p>
            <Direct />
            <Divider className={classes.dividerB} />
            <nav className="breadcrumb my-bread mt-4">
                <div className="guide">
                    The <code>{`<script>`}</code> Tag
                </div>
            </nav>
            <div className="h4 title mt-5">
                {" "}
                The <code>{`<script>`}</code> Tag
            </div>
            <LineDivider size="small" />
            <div className="guide">
                In HTML, JavaScript code is inserted between{" "}
                <code>{`<script> and </script>`}</code> tags.
            </div>
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
            <a
                href={`${SHARE_CODE}/fV9WPWAk8PkCnUasaJ2KwLeZxvrjPl`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <nav className="breadcrumb mt-4">
                Old JavaScript examples may use a type attribute:{" "}
                <code>{`<script type="text/javascript">`}</code>The type
                attribute is not required. JavaScript is the default scripting
                language in HTML.
            </nav>
            <div className="h4 title mt-5">JavaScript Functions and Events</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                A JavaScript function is a block of JavaScript code, that can be
                executed when "called" for.
            </nav>
            <nav className="breadcrumb mt-3">
                For example, a function can be called when an event occurs, like
                when the user clicks a button.
            </nav>
            <nav className="breadcrumb mt-3">
                You will learn much more about functions and events in later
                chapters.
            </nav>
            <div className="h4 title mt-5">
                <code>{`JavaScript in <head> or <body>`}</code>
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                You can place any number of scripts in an HTML document.
            </nav>
            <nav className="breadcrumb mt-3">
                Scripts can be placed in the{" "}
                <code>{`<body>, or in the <head>`}</code> section of an HTML
                page, or in both.
            </nav>{" "}
            <div className="h4 title mt-5">
                JavaScript in <code>{`<head>`}</code>
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                In this example, a JavaScript function is placed in the{" "}
                <code>{`<head>`}</code> section of an HTML page.
            </nav>
            <nav className="breadcrumb mt-3">
                The function is invoked (called) when a button is clicked:
            </nav>{" "}
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["structural"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/GODrpVIbDpohSxrzKAg0YNfutqeVTp`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">
                JavaScript in <code>{`<body>`}</code>
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                In this example, a JavaScript function is placed in the{" "}
                <code>{`<body>`}</code> section of an HTML page.
            </nav>
            <nav className="breadcrumb mt-3">
                The function is invoked (called) when a button is clicked:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["structural"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/GODrpVIbDpohSxrzKAg0YNfutqeVTp`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">External JavaScript</div>
            <LineDivider size="small" />
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag1"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <nav className="breadcrumb mt-3">
                External scripts are practical when the same code is used in
                many different web pages.
            </nav>
            <nav className="breadcrumb mt-3">
                JavaScript files have the file extension .js.
            </nav>
            <nav className="breadcrumb mt-3">
                To use an external script, put the name of the script file in
                the src (source) attribute of a <code>{`<script>`}</code> tag:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag2"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <nav className="breadcrumb mt-3">
                You can place an external script reference in{" "}
                <code>{`<head> or <body>`}</code> as you like.
            </nav>
            <nav className="breadcrumb mt-3">
                The script will behave as if it was located exactly where the{" "}
                <code>{`<script>`}</code> tag is located.
            </nav>
            <nav className="breadcrumb mt-3">
                External scripts cannot contain <code>{`<script>`}</code> tags.
            </nav>
            <div className="h4 title mt-5">External JavaScript Advantages</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">It separates HTML and code</nav>
            <nav className="breadcrumb mt-3">
                It makes HTML and JavaScript easier to read and maintain
            </nav>
            <nav className="breadcrumb mt-3">
                Cached JavaScript files can speed up page loads
            </nav>
            <nav className="breadcrumb mt-3">
                To add several script files to one page - use several script
                tags:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag3"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <div className="h4 title mt-5">External References</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                An external script can be referenced in 3 different ways:
            </nav>
            <nav className="breadcrumb mt-3">
                With a full URL (a full web address)
            </nav>
            <nav className="breadcrumb mt-3">With a file path (like /js/)</nav>
            <nav className="breadcrumb mt-3">Without any path</nav>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Scripts);
