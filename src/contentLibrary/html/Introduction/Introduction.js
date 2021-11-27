import React, { useState } from "react";
import { makeStyles, withStyles } from "@mui/styles";
import { CopyBlock, dracula, googlecode } from "react-code-blocks";
import ex from "./example";
import "./Introduction.css";
import Divider from "@mui/material/Divider";
import { styles } from "./styles";
import { Button } from "@mui/material";
import Direct from "../../../components/Direct";

const Introduction = (props) => {
    const [language, changeLanguage] = useState("html");
    const [languageDemo, changeDemo] = useState(ex["html"]);
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">Introduction</p>
            <Direct />

            <Divider className={classes.dividerB} />
            <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["introduction"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>

            <p className="guide">
                The HyperText Markup Language, or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser. It can be assisted by technologies such as Cascading
                Style Sheets (CSS) and scripting languages such as JavaScript.
                Web browsers receive HTML documents from a web server or from
                local storage and render the documents into multimedia web
                pages. HTML describes the structure of a web page semantically
                and originally included cues for the appearance of the document.
                HTML elements are the building blocks of HTML pages. With HTML
                constructs, images and other objects such as interactive forms
                may be embedded into the rendered page.
            </p>
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
            <p className="guide">
                HTML provides a means to create structured documents by denoting
                structural semantics for text such as headings, paragraphs,
                lists, links, quotes and other items. HTML elements are
                delineated by tags, written using angle brackets. Tags such as{" "}
                <code className="code"> {" <img /> and <input /> "}</code>
                directly introduce content into the page.
            </p>
            <div className="title">What is an HTML Element?</div>
            <Divider className={classes.dividerS} />
            <div className="guide">
                An HTML element is defined by a start tag, some content, and an
                end tag. The HTML element is everything from the start tag to
                the end tag:
                <div className="h4 mt-2 ">
                    <nav className="breadcrumb">
                        <div className="guide font-weight-bold">
                            <code className="h4">{`<tagname>Contents in here...</tagname>`}</code>
                        </div>
                    </nav>
                </div>
                <div className="guide font-weight-bold">
                    An example for you:{" "}
                </div>
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
                <p className="font-weight-bold h5 text-left">or</p>
                <div className="example">
                    <CopyBlock
                        language={"html"}
                        text={ex["exTag2"]}
                        showLineNumbers={true}
                        theme={googlecode}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        Note: Some HTML elements have no content (like the{" "}
                        {"<br>"} element). These elements are called empty
                        elements. Empty elements do not have an end tag!
                    </div>
                </nav>
                <div className="title">With browser</div>
                <Divider className={classes.dividerS} />
                <div className="guide">
                    The purpose of a web browser (Chrome, Edge, Firefox, Safari)
                    is to read HTML documents and display them correctly
                </div>
                <div className="guide">
                    A browser does not display the HTML tags, but uses them to
                    determine how to display the document:
                </div>
                <img
                    src="https://www.w3schools.com/html/img_chrome.png"
                    className="mt-4"
                    width={700}
                    height="450"
                    alt=""
                />
                <p className="h4 font-weight-bold text-left mt-2">
                    HTML Page Structure
                </p>
                <div className="guide mb-3 mt-3">
                    Below is a visualization of an HTML page structure:
                </div>
                <img
                    src="https://i.ytimg.com/vi/90kC1YLNF3U/maxresdefault.jpg"
                    alt=""
                    width="700"
                    height="400"
                />
            </div>
            <nav className="breadcrumb mt-3">
                <div className="guide font-weight-bold">
                    Note: The content inside the {"<body>"} section (the white
                    area above) will be displayed in a browser. The content
                    inside the {"<title>"} element will be shown in the
                    browser's title bar or in the page's tab.
                </div>
            </nav>
            <div className="title">Conclusion</div>
            <Divider className={classes.dividerS} />
            <div className="guide">
                If you have followed all the instructions in this article, you
                should end up with a page that looks like the one below (you can
                also{" "}
                <a
                    href="https://mdn.github.io/beginner-html-site/"
                    target="_blank"
                >
                    {" "}
                    <span className="text-decoration text-primary">
                        view it in here
                    </span>
                </a>
                ):
            </div>
            <img
                src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/finished-test-page-small.png"
                alt=""
                height="300"
            />
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Introduction);
