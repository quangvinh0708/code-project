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

const GetStarted = (props) => {
    const [language, changeLanguage] = useState("html");
    const [languageDemo, changeDemo] = useState(ex["html"]);
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">CSS Get Started</p>
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
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    CSS stands for Cascading Style Sheets
                </li>
                <li className="list-group-item mt-2">
                    CSS describes how HTML elements are to be displayed on
                    screen, paper, or in other media
                </li>
                <li className="list-group-item mt-2">
                    CSS saves a lot of work. It can control the layout of
                    multiple web pages all at once
                </li>
                <li className="list-group-item mt-2">
                    External stylesheets are stored in CSS files
                </li>
            </ul>
            <div className="title mt-4">Some before...</div>
            <Divider className={classes.dividerS} />
            <p className="guide breadcrumb mt-4">
                All web standards technologies (HTML, CSS, JavaScript, etc.) are
                defined in giant documents called specifications (or "specs"),
                which are published by standards organizations (such as the W3C,
                WHATWG, ECMA, or Khronos) and define precisely how those
                technologies are supposed to behave.
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
            <div className="title mt-4">CSS Demo</div>
            <Divider className={classes.dividerS} />
            <p className="guide breadcrumb mt-4">
                All web standards technologies (HTML, CSS, JavaScript, etc.) are
                defined in giant documents called specifications (or "specs"),
                which are published by standards organizations (such as the W3C,
                WHATWG, ECMA, or Khronos) and define precisely how those
                technologies are supposed to behave.
            </p>
            <img
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t1.15752-9/263760579_1958185787685946_8444751957236707248_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=9fkjY_73xoUAX9UtUW_&tn=AHJTDg93Zew1RfnP&_nc_ht=scontent.fdad3-5.fna&oh=d8a1835a357b4b3ccca767483de85769&oe=61D8C18F"
                alt=""
            />
            <a
                href={`${SHARE_CODE}/Z9p8MeBkMw02nbh0vDIPKoXlQatlSc`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title mt-4">Why Use CSS?</div>
            <Divider className={classes.dividerS} />
            <div className="guide">
                CSS is used to define styles for your web pages, including the
                design, layout and variations in display for different devices
                and screen sizes.
                <div className="h4 mt-2 ">
                    <nav className="breadcrumb">
                        <div className="guide font-weight-bold">
                            CSS is no different — it is developed by a group
                            within the W3C called the CSS Working Group. This
                            group is made of representatives of browser vendors
                            and other companies who have an interest in CSS.
                            There are also other people, known as invited
                            experts, who act as independent voices; they are not
                            linked to a member organization.
                        </div>
                    </nav>
                </div>
                <div className="h4 mt-2 ">
                    <nav className="breadcrumb">
                        <div className="guide font-weight-bold">
                            New CSS features are developed, or specified, by the
                            CSS Working Group. Sometimes because a particular
                            browser is interested in having some capability,
                            other times because web designers and developers are
                            asking for a feature, and sometimes because the
                            Working Group itself has identified a requirement.
                            CSS is constantly developing, with new features
                            becoming available. However, a key thing about CSS
                            is that everyone works very hard to never change
                            things in a way that would break old websites. A
                            website built in 2000, using the limited CSS
                            available then, should still be usable in a browser
                            today!
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
                    As a newcomer to CSS, it is likely that you will find the
                    CSS specs overwhelming — they are intended for engineers to
                    use to implement support for the features in user agents,
                    not for web developers to read to understand CSS. Many
                    experienced developers would much rather refer to MDN
                    documentation or other tutorials. It is however worth
                    knowing that they exist, understanding the relationship
                    between the CSS you are using, browser support (see below),
                    and the specs.
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
                <div className="title mt-4">CSS Solved a Big Problem</div>
                <Divider className={classes.dividerS} />
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        HTML was NEVER intended to contain tags for formatting a
                        web page!
                    </div>
                </nav>
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        HTML was created to describe the content of a web page,
                        like:
                    </div>
                </nav>
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        <code>{`<h1>This is a heading</h1>`}</code>
                    </div>
                </nav>
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        <code>{`<p>This is a paragraph.</p>`}</code>
                    </div>
                </nav>
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        When tags like <code>{` <font>`}</code>, and color
                        attributes were added to the HTML 3.2 specification, it
                        started a nightmare for web developers. Development of
                        large websites, where fonts and color information were
                        added to every single page, became a long and expensive
                        process.
                    </div>
                </nav>
                <div className="title mt-4">CSS Saves a Lot of Work!</div>
                <Divider className={classes.dividerS} />
                <div>
                    <b>
                        The style definitions are normally saved in external
                        .css files.
                    </b>
                </div>
                <div>
                    <b>
                        With an external stylesheet file, you can change the
                        look of an entire website by changing just one file!
                    </b>
                </div>
                <div className="title mt-4">Browser support information</div>
                <Divider className={classes.dividerS} />
                <div className="guide">
                    Once CSS has been specified then it is only useful for us in
                    developing web pages if one or more browsers have
                    implemented it. This means that the code has been written to
                    turn the instruction in our CSS file into something that can
                    be output to the screen
                    <div className="h4 mt-2 ">
                        <nav className="breadcrumb">
                            <div className="guide font-weight-bold">
                                It is unusual for all browsers to implement a
                                feature at the same time, and so there is
                                usually a gap where you can use some part of CSS
                                in some browsers and not in others. For this
                                reason, being able to check implementation
                                status is useful.
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <nav className="breadcrumb mt-4">
                The browser support status is shown on every MDN property page
                in a section named "Browser compatibility" (use this to check if
                the property can be used on your website). For example, the
                compatibility section for the CSS font-family property is
                reproduced bel
            </nav>

            <Direct />
        </div>
    );
};

export default withStyles(styles)(GetStarted);
