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

const HowTo = (props) => {
    const [language, changeLanguage] = useState("html");
    const [languageDemo, changeDemo] = useState(ex["html"]);
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">How To Add CSS</p>
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
                    When a browser reads a style sheet, it will format the HTML
                    document according to the information in the style sheet.
                </b>
            </div>{" "}
            <img
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/263370774_965493641058144_3059727109972689792_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RS2jpDjNAMUAX84Nn1o&tn=AHJTDg93Zew1RfnP&_nc_ht=scontent.fdad3-4.fna&oh=e664bc73ef0716acb40b85b89eac3892&oe=61D816D7"
                alt=""
            />
            <div className="title mt-4">Three Ways to Insert CSS</div>
            <Divider className={classes.dividerS} />{" "}
            <div className="example mt-5">
                <b>There are three ways of inserting a style sheet:</b>
            </div>{" "}
            <nav className="breadcrumb mt-3">External CSS</nav>
            <nav className="breadcrumb mt-3">Internal CSS</nav>
            <nav className="breadcrumb mt-3">Inline CSS</nav>
            <div className="title mt-4">External CSS</div>
            <Divider className={classes.dividerS} />{" "}
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    With an external style sheet, you can change the look of an
                    entire website by changing just one file!
                </li>
                <li className="list-group-item mt-2">
                    Each HTML page must include a reference to the external
                    style sheet file inside the <code>{`<link>`}</code> element,
                    inside the head section.
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
            <nav className="breadcrumb">
                <div className="guide font-weight-bold">
                    An external style sheet can be written in any text editor,
                    and must be saved with a .css extension.
                </div>
            </nav>
            <nav className="breadcrumb">
                <div className="guide font-weight-bold">
                    The external .css file should not contain any HTML tags.
                </div>
            </nav>
            <nav className="breadcrumb">
                <div className="guide font-weight-bold">
                    Here is how the "mystyle.css" file looks:
                </div>
            </nav>
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
                    text={ex["structural"]}
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
                <nav className="breadcrumb mt-3">
                    <code>Note</code> Do not add a space between the property
                    value and the unit: Incorrect (space): margin-left: 20 px;
                    Correct (nospace): margin-left: 20px;
                </nav>
                <div className="title mt-4">Internal CSS</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        An internal style sheet may be used if one single HTML
                        page has a unique style.
                    </div>
                </nav>
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        The internal style is defined inside the{" "}
                        <code>{`<style>`}</code> element, inside the head
                        section.
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
                    href={`${SHARE_CODE}/Fe5bhG2y3SsWli3BULROZqkyCYf7KE`}
                    target="_blank"
                >
                    <button className="btn btn-code btn-large">
                        {CODES_ONLINE}
                    </button>
                </a>
                <div className="title mt-4">Inline CSS</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        An inline style may be used to apply a unique style for
                        a single element.
                    </div>
                </nav>
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        To use inline styles, add the style attribute to the
                        relevant element. The style attribute can contain any
                        CSS property.
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
                <a
                    href={`${SHARE_CODE}/K4yMJTcdZ6dtM63xBqA4Z16UFzKBZM`}
                    target="_blank"
                >
                    <button className="btn btn-code btn-large">
                        {CODES_ONLINE}
                    </button>
                </a>
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        Tip: An inline style loses many of the advantages of a
                        style sheet (by mixing content with presentation). Use
                        this method sparingly.
                    </div>
                </nav>
                <div className="title mt-4">Multiple Style Sheets</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        If some properties have been defined for the same
                        selector (element) in different style sheets, the value
                        from the last read style sheet will be used.
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
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag4"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
                <div className="title mt-4">Some example...</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        If the internal style is defined after the link to the
                        external style sheet, the <code>{`<h1`}</code> elements
                        will be "orange":
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
                        However, if the internal style is defined before the
                        link to the external style sheet, the{" "}
                        <code>{`h1`}</code> elements will be "navy":
                    </div>
                </nav>
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

export default withStyles(styles)(HowTo);
