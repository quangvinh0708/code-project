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
            {/* <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["introduction"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div> */}

            <p className="guide breadcrumb mt-4">
                CSS (Cascading Style Sheets) allows you to create great-looking
                web pages, but how does it work under the hood? This article
                explains what CSS is, with a simple syntax example, and also
                covers some key terms about the language
            </p>
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
            <nav className="breadcrumb mt-3">
                In the Introduction to HTML module we covered what HTML is, and
                how it is used to mark up documents. These documents will be
                readable in a web browser. Headings will look larger than
                regular text, paragraphs break onto a new line and have space
                between them. Links are colored and underlined to distinguish
                them from the rest of the text. What you are seeing is the
                browser's default styles — very basic styles that the browser
                applies to HTML to make sure it will be basically readable even
                if no explicit styling is specified by the author of the page.
            </nav>
            <img
                src="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS/html-example.png"
                alt=""
            />
            <div className="guide">
                However, the web would be a boring place if all websites looked
                like that. Using CSS you can control exactly how HTML elements
                look in the browser, presenting your markup using whatever
                design you like.
            </div>
            <div className="title mt-4">What is CSS for?</div>
            <Divider className={classes.dividerS} />
            <div className="guide">
                As we have mentioned before, CSS is a language for specifying
                how documents are presented to users — how they are styled, laid
                out, etc.
                <div className="h4 mt-2 ">
                    <nav className="breadcrumb">
                        <div className="guide font-weight-bold">
                            A document is usually a text file structured using a
                            markup language — HTML is the most common markup
                            language, but you may also come across other markup
                            languages such as SVG or XML.
                        </div>
                    </nav>
                </div>
                <div className="h4 mt-2 ">
                    <nav className="breadcrumb">
                        <div className="guide font-weight-bold">
                            Presenting a document to a user means converting it
                            into a form usable by your audience. Browsers, like
                            Firefox, Chrome, or Edge , are designed to present
                            documents visually, for example, on a computer
                            screen, projector or printer.
                        </div>
                    </nav>
                </div>
                <nav className="breadcrumb mt-4">
                    Note: A browser is sometimes called a user agent, which
                    basically means a computer program that represents a person
                    inside a computer system. Browsers are the main type of user
                    agent we think of when talking about CSS, however, it is not
                    the only one. There are other user agents available — such
                    as those which convert HTML and CSS documents into PDFs to
                    be printed.
                </nav>
                <div className="guide font-weight-bold">
                    CSS can be used for very basic document text styling — for
                    example changing the color and size of headings and links.
                    It can be used to create layout — for example turning a
                    single column of text into a layout with a main content area
                    and a sidebar for related information. It can even be used
                    for effects such as animation. Have a look at the links in
                    this paragraph for specific examples.
                </div>
                {/* <div className="example">
                    <CopyBlock
                        language={"html"}
                        text={ex["exTag1"]}
                        showLineNumbers={true}
                        theme={googlecode}
                        wrapLines={true}
                        codeBlock
                    />
                </div> */}
                {/* <div className="example">
                    <CopyBlock
                        language={"html"}
                        text={ex["exTag2"]}
                        showLineNumbers={true}
                        theme={googlecode}
                        wrapLines={true}
                        codeBlock
                    />
                </div> */}
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        Note: We recommend reading this tutorial, in the
                        sequence listed in the menu.
                    </div>
                </nav>
            </div>
            <nav className="breadcrumb mt-4">
                Some example below will make you more understand about what{" "}
                <code>CSS</code> can do:
            </nav>

            <img
                src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/finished-test-page-small.png"
                alt=""
                height="300"
            />
            <img
                src="https://uicookies.com/wp-content/uploads/2019/08/beautiful-css-forms-1000x750.jpg"
                alt=""
            />
            <img
                src="https://uicookies.com/wp-content/uploads/2020/09/CSS-Contact-Form-V03.jpg.webp"
                alt=""
            />
            <img
                src="https://uicookies.com/wp-content/uploads/2020/09/Beautiful-CSS-Signup-Form-V07.jpg.webp"
                alt=""
            />
            <img
                src="https://uicookies.com/wp-content/uploads/2020/09/CSS-Registration-Form-V02.jpg.webp"
                alt=""
            />
            <img
                src="https://uicookies.com/wp-content/uploads/2020/04/Colorlib-Reg-Form-v15.jpg.webp"
                alt=""
            />
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Introduction);
