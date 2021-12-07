import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Formatting = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">HTML Styles - CSS</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    CSS stands for Cascading Style Sheets.
                </div>
            </nav>
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    CSS saves a lot of work. It can control the layout of
                    multiple web pages all at once.
                </div>
            </nav>
            <img
                src="https://leecy.me/content/images/2021/06/image.png"
                alt=""
            />
            <div className="h4 title mt-5">What is CSS?</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                Cascading Style Sheets (CSS) is used to format the layout of a
                webpage.
            </nav>
            <nav className="breadcrumb mt-3">
                With CSS, you can control the color, font, the size of text, the
                spacing between elements, how elements are positioned and laid
                out, what background images or background colors are to be used,
                different displays for different devices and screen sizes, and
                much more!
            </nav>
            <nav className="breadcrumb mt-3">
                <b>
                    Tip: The word cascading means that a style applied to a
                    parent element will also apply to all children elements
                    within the parent. So, if you set the color of the body text
                    to "blue", all headings, paragraphs, and other text elements
                    within the body will also get the same color (unless you
                    specify something else)!
                </b>
            </nav>
            <div className="h4 title mt-5">Using CSS</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                CSS can be added to HTML documents in 3 ways:
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    Inline - by using the style attribute inside HTML elements
                </li>
                <li className="list-group-item mt-2">
                    Internal - by using a <code>{`<style>`}</code> element in
                    the <code>{`<head>`}</code> section
                </li>
                <li className="list-group-item mt-2">
                    External - by using a <code>{`<link>`}</code> element to
                    link to an external CSS file
                </li>
            </ul>
            <nav className="breadcrumb mt-3">
                The most common way to add CSS, is to keep the styles in
                external CSS files. However, in this tutorial we will use inline
                and internal styles, because this is easier to demonstrate, and
                easier for you to try it yourself. The most common way to add
                CSS, is to keep the styles in external CSS files. However, in
                this tutorial we will use inline and internal styles, because
                this is easier to demonstrate, and easier for you to try it
                yourself.
            </nav>
            <div className="h4 title mt-5">Internal CSS</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                An internal CSS is used to define a style for a single HTML
                page.
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    An internal CSS is defined in the{" "}
                    <code>{`<head> section of an HTML page, within a <style>`}</code>{" "}
                    element.
                </li>
                <li className="list-group-item mt-2">
                    Internal - by using a <code>{`<style>`}</code> element in
                    the <code>{`<head>`}</code> section
                </li>
                <li className="list-group-item mt-2">
                    The following example sets the text color of ALL the
                    <code>{` <h1> elements (on that page) to blue, and the text color of ALL the <p>`}</code>{" "}
                    elements to red. In addition, the page will be displayed
                    with a "powderblue" background color:
                </li>
            </ul>
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
            <div className="h4 title mt-5">External CSS</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                An external style sheet is used to define the style for many
                HTML pages.
            </nav>
            <nav className="breadcrumb mt-3">
                To use an external style sheet, add a link to it in the{" "}
                <code>{`<head> `}</code>section of each HTML page:
            </nav>
            v
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["structural"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <nav className="breadcrumb mt-3">
                The external style sheet can be written in any text editor. The
                file must not contain any HTML code, and must be saved with a
                .css extension.
            </nav>
            <div>
                <b>Here is what the "styles.css" file looks like:</b>
            </div>{" "}
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
            <div className="h4 title mt-5">CSS Colors, Fonts and Sizes</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                Here, we will demonstrate some commonly used CSS properties. You
                will learn more about them later.
            </nav>
            <nav className="breadcrumb mt-3">
                The CSS color property defines the text color to be used.
            </nav>
            <nav className="breadcrumb mt-3">
                The CSS font-family property defines the font to be used.
            </nav>
            <nav className="breadcrumb mt-3">
                The CSS font-size property defines the text size to be used.
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["structural"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <nav className="breadcrumb mt-3">
                The external style sheet can be written in any text editor. The
                file must not contain any HTML code, and must be saved with a
                .css extension.
            </nav>
            <div>
                <b>Here is what the "styles.css" file looks like:</b>
            </div>{" "}
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
            <div className="h4 title mt-5">CSS Border</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The CSS border property defines a border around an HTML element.
            </nav>
            <nav className="breadcrumb mt-3">
                Tip: You can define a border for nearly all HTML elements.
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
            <nav className="breadcrumb mt-3">
                The external style sheet can be written in any text editor. The
                file must not contain any HTML code, and must be saved with a
                .css extension.
            </nav>
            <div>
                <b>Here is what the "styles.css" file looks like:</b>
            </div>{" "}
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
            <div className="h4 title mt-5">CSS Padding</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The CSS padding property defines a padding (space) between the
                text and the border.
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
            <div className="h4 title mt-5">CSS Margin</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The CSS margin property defines a margin (space) outside the
                border.
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
            <div className="h4 title mt-5">Link to External CSS</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                External style sheets can be referenced with a full URL or with
                a path relative to the current web page.
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
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Formatting);
