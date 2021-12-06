import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, SHARE_CODE } from "../../../constant/axios";

const HTMLElements = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">HTML Elements</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    An HTML element is defined by a start tag, some content, and
                    an end tag.
                </div>
            </nav>
            <div className="h4 mt-3 title">HTML Elements</div>
            <LineDivider size="small" />
            <p>
                The HTML element is everything from the start tag to the end
                tag:
            </p>
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
            Examples of some HTML elements:
            <nav className="breadcrumb mt-3">
                <div className="example">
                    <CopyBlock
                        language={"html"}
                        text={ex["exTag1"]}
                        showLineNumbers={true}
                        theme={googlecode}
                        wrapLines={true}
                        codeBlock
                    />
                </div>{" "}
            </nav>
            <nav className="breadcrumb mt-3">
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
            </nav>
            <nav className="breadcrumb mt-3">
                Note: Some HTML elements have no content (like the {"<br>"}{" "}
                element). These elements are called empty elements. Empty
                elements do not have an end tag!
            </nav>
            <div className="h4 mt-3 title"> Nested HTML Elements</div>
            <LineDivider size="small" />
            HTML elements can be nested (this means that elements can contain
            other elements).
            <p>
                All HTML documents consist of nested HTML elements. The
                following example contains four HTML elements{" "}
                <code>{"(<html>, <body>, <h1> and <p>)"}</code>:
            </p>
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
                href={`${SHARE_CODE}/5gcwHODTx3OMmJG1bGFvZw0r1GpRlc`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    Code Yourself
                </button>
            </a>
            <div className="title mt-3">Example Explained</div>
            <LineDivider size="small" />
            The <code>{`<html>`}</code> element is the root element and it
            defines the whole HTML document.
            <div>
                {" "}
                It has a start tag{" "}
                <code>{`<html> and an end tag </html>`}</code>.
            </div>
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
            <nav className="breadcrumb mt-3">
                The <code>{` <body>`}</code> element defines the document's
                body.
                <div>
                    It has a start tag{" "}
                    <code>{`<body> and an end tag </body>`}</code>.
                </div>
                <div>
                    Then, inside the{" "}
                    <code>{`<body> element there are two other elements: <h1> and <p>`}</code>
                    :
                </div>
            </nav>
            <nav className="breadcrumb mt-3">
                The <code>{`<h1>`}</code> element defines a heading.
            </nav>
            <nav className="breadcrumb mt-3">
                It has a start tag <code>{`<h1> and an end tag </h1>`}</code>:
            </nav>
            <nav className="breadcrumb mt-3">
                The <code>{`<p>`}</code> element defines a paragraph.
            </nav>
            <nav className="breadcrumb mt-3">
                It has a start tag <code>{`<p> and an end tag </p>`}</code>:
            </nav>
            <img
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/263700163_601183577632808_3819042381537253585_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=XM0tY5newwUAX8gnLaR&_nc_ht=scontent.fdad3-4.fna&oh=1a946b7163d4c5af81298ab43c7961ab&oe=61D39141"
                alt=""
            />
            <div className="title mt-3">Never Skip the End Tag</div>
            <LineDivider size="small" />
            Some HTML elements will display correctly, even if you forget the
            end tag:
            <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["exTag4"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <div className="title mt-3">Empty HTML Elements</div>
            <LineDivider size="small" />
            HTML elements with no content are called empty elements. The{" "}
            {"<br>"} tag defines a line break, and is an empty element without a
            closing tag:
            <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["exTag7"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <div className="title mt-3">HTML is Not Case Sensitive</div>
            <LineDivider size="small" />
            HTML tags are not case sensitive: {"<P>"} means the same as {"<p>"}.
            closing tag:
            <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["exTag7"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <img
                src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/261537404_304204264886606_6315770954394700458_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=lQNpNiq-Y9gAX_OTUPq&_nc_ht=scontent.fdad3-3.fna&oh=03bb06970bc0c30f7d0be298eb411250&oe=61C6CAB2"
                alt=""
            />
            <Direct />
        </div>
    );
};

export default withStyles(styles)(HTMLElements);
