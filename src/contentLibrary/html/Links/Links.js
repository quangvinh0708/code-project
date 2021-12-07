import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Links = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">HTML Links</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    Links are found in nearly all web pages. Links allow users
                    to click their way from page to page.
                </div>
            </nav>
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    CSS saves a lot of work. It can control the layout of
                    multiple web pages all at once.
                </div>
            </nav>
            <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/box-model-1.png"
                alt=""
            />
            <div className="h4 title mt-5">HTML Links - Hyperlinks</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">HTML links are hyperlinks.</nav>
            <nav className="breadcrumb mt-3">
                You can click on a link and jump to another document.
            </nav>
            <nav className="breadcrumb mt-3">
                <b>
                    When you move the mouse over a link, the mouse arrow will
                    turn into a little hand.
                </b>
            </nav>
            <nav className="breadcrumb mt-3">
                <b>
                    Note: A link does not have to be text. A link can be an
                    image or any other HTML element!
                </b>
            </nav>
            <div className="h4 title mt-5">HTML Links - Syntax</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The HTML <code>{`<a>`}</code> tag defines a hyperlink. It has
                the following syntax:
            </nav>{" "}
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
            </div>{" "}
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    The most important attribute of the <code>{`<a>`}</code>{" "}
                    element is the href attribute, which indicates the link's
                    destination.
                </li>
                <li className="list-group-item mt-2">
                    The link text is the part that will be visible to the
                    reader.
                </li>
                <li className="list-group-item mt-2">
                    Clicking on the link text, will send the reader to the
                    specified URL address.
                </li>
            </ul>{" "}
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag1"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <nav className="breadcrumb mt-3">
                By default, links will appear as follows in all browsers:
            </nav>
            <div className="guide">
                <div>An unvisited link is underlined and blue</div>
                <div>A visited link is underlined and purple</div>
                <div>An active link is underlined and red</div>
            </div>
            <nav className="breadcrumb mt-4">
                Tip: Links can of course be styled with CSS, to get another
                look!
            </nav>
            <div className="h4 title mt-5">
                HTML Links - The target Attribute
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                By default, the linked page will be displayed in the current
                browser window. To change this, you must specify another target
                for the link.
            </nav>
            <nav className="breadcrumb mt-3">
                The target attribute specifies where to open the linked
                document.
                <div>
                    {" "}
                    The target attribute can have one of the following values:
                </div>
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    _self - Default. Opens the document in the same window/tab
                    as it was clicked
                </li>
                <li className="list-group-item mt-2">
                    _blank - Opens the document in a new window or tab
                </li>
                <li className="list-group-item mt-2">
                    _parent - Opens the document in the parent frame
                </li>
                <li className="list-group-item mt-2">
                    _top - Opens the document in the full body of the window
                </li>
            </ul>
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
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">Absolute URLs vs. Relative URLs</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                Both examples above are using an absolute URL (a full web
                address) in the href attribute.
            </nav>
            <nav className="breadcrumb mt-3">
                A local link (a link to a page within the same website) is
                specified with a relative URL (without the "https://www" part):
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
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">
                HTML Links - Use an Image as a Link
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                To use an image as a link, just put the{" "}
                <code>{`<img> tag inside the <a>`}</code> tag:
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
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">Link to an Email Address</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                Use mailto: inside the href attribute to create a link that
                opens the user's email program (to let them send a new email):
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
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">Button as a Link</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                To use an HTML button as a link, you have to add some JavaScript
                code.
            </nav>
            <nav className="breadcrumb mt-3">
                JavaScript allows you to specify what happens at certain events,
                such as a click of a button:
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
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">Link Titles</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The title attribute specifies extra information about an
                element. The information is most often shown as a tooltip text
                when the mouse moves over the element
            </nav>
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
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">
                More on Absolute URLs and Relative URLs
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The title attribute specifies extra information about an
                element. The information is most often shown as a tooltip text
                when the mouse moves over the element
            </nav>
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
            <a href={`${CODE}`} target="_blank" className="mt-5">
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
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
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Links);
