import React, { useState } from "react";
import { makeStyles, withStyles } from "@mui/styles";
import { CopyBlock, dracula, googlecode } from "react-code-blocks";
import ex from "./example";
import "../Introduction/Introduction.css";
import Divider from "@mui/material/Divider";
import { styles } from "../Introduction/styles";
import { Button } from "@mui/material";
import Direct from "../../../components/Direct";
import { CODE, SHARE_CODE } from "../../../constant/axios";

const Basic = (props) => {
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">HTML Basic</p>
            <Direct />
            <Divider className={classes.dividerB} />
            <div className="title">What’s in the head?</div>
            <p className="guide">Metadata in HTML</p>
            <p className="guide">
                The head of an HTML document is the part that is not displayed
                in the web browser when the page is loaded. It contains
                information such as the page <code>{`<title>`}</code>, links to
                CSS (if you choose to style your HTML content with CSS), links
                to custom favicons, and other metadata (data about the HTML,
                such as the author, and important keywords that describe the
                document.) In this article we'll cover all of the above and
                more, in order to give you a good basis for working with markup.
            </p>
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
                The HTML head is the contents of the{" "}
                <code>
                    {"<head> element — unlike the contents of the <body>"}
                </code>{" "}
                element (which are displayed on the page when loaded in a
                browser), the head's content is not displayed on the page.
                Instead, the head's job is to contain metadata about the
                document. In the above example, the head is quite small:
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
                In larger pages however, the head can get quite full. Try going
                to some of your favorite websites and use the developer tools to
                check out their head contents. Our aim here is not to show you
                how to use everything that can possibly be put in the head, but
                rather to teach you how to use the major elements that you'll
                want to include in the head, and give you some familiarity.
                Let's get started.
            </p>
            <div className="title">Adding a title</div>
            <Divider className={classes.dividerS} />
            <nav className="breadcrumb mt-3">
                We've already seen the <code>{"<title>"}</code> element in
                action — this can be used to add a title to the document. This
                however can get confused with the <code>{"<h1>"}</code> element,
                which is used to add a top level heading to your body content —
                this is also sometimes referred to as the page title. But they
                are different things! The <code>{" <h1> "}</code> element
                appears on the page when loaded in the browser — generally this
                should be used once per page, to mark up the title of your page
                content (the story title, or news headline, or whatever is
                appropriate to your usage.) The <code>{"<title>"}</code> element
                is metadata that represents the title of the overall HTML
                document (not the document's content.)
            </nav>
            <div className="guide">
                Active learning: Inspecting a simple example
            </div>
            <nav className="breadcrumb mt-3">
                To start off this active learning, we'd like you to go to our
                code-online page. To do this, Copy and paste the code out of the
                page and into a new in your project, then you can register and
                login to save it in a sensible place.
            </nav>
            <nav className="breadcrumb mt-3">
                Press the "Code - Online" button on the below, which causes
                direct to our CODE - ONLINE and appear (possibly in a new
                browser tab). You can type and code anything on it and it
                automatically refresh
            </nav>
            <a
                href={`${SHARE_CODE}/1nqOUROuiQeblC0NWHBsdLRLrEqD02`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    Code Yourself
                </button>
            </a>
            <img
                className="mt-4"
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/263454209_1345619352563167_680954481838721000_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=MwbP724yHmkAX_SNSlw&tn=AHJTDg93Zew1RfnP&_nc_ht=scontent.fdad3-4.fna&oh=50c7d84fae720070cfd4671ff7c2b573&oe=61D21931"
                alt=""
            />
            <div className="title">
                Metadata: the <code>{"<meta>"}</code> element
            </div>
            <Divider className={classes.dividerS} />
            <div className="guide">
                Metadata is data that describes data, and HTML has an "official"
                way of adding metadata to a document — the{" "}
                <code>{"<meta>"}</code> element. Of course, the other stuff we
                are talking about in this article could also be thought of as
                metadata too. There are a lot of different types of{" "}
                <code>{"<meta>"}</code> elements that can be included in your
                page's <code>{"<head>"}</code>, but we won't try to explain them
                all at this stage, as it would just get too confusing. Instead,
                we'll explain a few things that you might commonly see, just to
                give you an idea.
            </div>
            <nav className="breadcrumb mt-3">
                <div className="guide">
                    Specifying your document's character encoding
                </div>
                <div className="guide">
                    In the example we saw above, this line was included:
                </div>
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
            <nav className="breadcrumb mt-3">
                This element specifies the document's character encoding — the
                character set that the document is permitted to use. utf-8 is a
                universal character set that includes pretty much any character
                from any human language. This means that your web page will be
                able to handle displaying any language; it's therefore a good
                idea to set this on every web page you create! For example, your
                page could handle English and Japanese just fine:
            </nav>
            <nav className="breadcrumb mt-3">
                <b>Note</b>Some browsers (like Chrome) automatically fix
                incorrect encodings, so depending on what browser you use, you
                may not see this problem. You should still set an encoding of
                utf-8 on your page anyway to avoid any potential problems in
                other browsers.
            </nav>
            <div className="title">
                Active learning: Experiment with character encoding
            </div>
            <Divider className={classes.dividerS} />
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
            Adding an author and description
            <div className="guide">
                Many {"<meta>"} elements include name and content attributes:
            </div>
            <nav className="breadcrumb mt-3">
                name specifies the type of meta element it is; what type of
                information it contains.
            </nav>
            <nav className="breadcrumb mt-3">
                content specifies the actual meta content.
            </nav>
            <div className="guide">
                Two such meta elements that are useful to include on your page
                define the author of the page, and provide a concise description
                of the page. Let's look at an example:
                <div className="h4 mt-2 ">
                    <nav className="breadcrumb">
                        <div className="guide font-weight-bold">
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
                        </div>
                    </nav>
                </div>
                Specifying an author is beneficial in many ways: it is useful to
                be able to understand who wrote the page, if you have any
                questions about the content and you would like to contact them.
                Some content management systems have facilities to automatically
                extract page author information and make it available for such
                purposes.
                <div className="">
                    Specifying a description that includes keywords relating to
                    the content of your page is useful as it has the potential
                    to make your page appear higher in relevant searches
                    performed in search engines (such activities are termed
                    Search Engine Optimization, or SEO.)
                </div>
                <div className="title mt-3">Other types of metadata</div>
                <Divider className={classes.dividerS} />
                <div className="guide">
                    As you travel around the web, you'll find other types of
                    metadata, too. A lot of the features you'll see on websites
                    are proprietary creations, designed to provide certain sites
                    (such as social networking sites) with specific pieces of
                    information they can use.
                </div>
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
                <div className="title mt-3">
                    Adding custom icons to your site
                </div>
                <Divider className={classes.dividerS} />
                To further enrich your site design, you can add references to
                custom icons in your metadata, and these will be displayed in
                certain contexts. The most commonly used of these is the favicon
                (short for "favorites icon", referring to its use in the
                "favorites" or "bookmarks" lists in browsers).
                <div>
                    The humble favicon has been around for many years. It is the
                    first icon of this type: a 16-pixel square icon used in
                    multiple places. You may see (depending on the browser)
                    favicons displayed in the browser tab containing each open
                    page, and next to bookmarked pages in the bookmarks panel.
                </div>
                <div className="example">
                    <CopyBlock
                        language={"html"}
                        text={ex["exTag6"]}
                        showLineNumbers={true}
                        theme={googlecode}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                <nav className="breadcrumb mt-3">
                    Don't worry too much about implementing all these types of
                    icon right now — this is a fairly advanced feature, and you
                    won't be expected to have knowledge of this to progress
                    through the course. The main purpose here is to let you know
                    what such things are, in case you come across them while
                    browsing other websites' source code.
                </nav>
                <div className="title mt-3">
                    Applying CSS and JavaScript to HTML
                </div>
                <Divider className={classes.dividerS} />
                <div className="guide">
                    The <code>{"<link>"}</code> element should always go inside
                    the head of your document. This takes two attributes,
                    rel="stylesheet", which indicates that it is the document's
                    stylesheet, and href, which contains the path to the
                    stylesheet file:
                </div>
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
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        The <code>{"<script>"}</code> element should also go
                        into the head, and should include a src attribute
                        containing the path to the JavaScript you want to load,
                        and defer, which basically instructs the browser to load
                        the JavaScript after the page has finished parsing the
                        HTML. This is useful as it makes sure that the HTML is
                        all loaded before the JavaScript runs, so that you don't
                        get errors resulting from JavaScript trying to access an
                        HTML element that doesn't exist on the page yet. There
                        are actually a number of ways to handle loading
                        JavaScript on your page, but this is the most foolproof
                        one to use for modern browsers
                    </div>
                </nav>
                <div className="example">
                    <CopyBlock
                        language={"html"}
                        text={ex["exTag8"]}
                        showLineNumbers={true}
                        theme={googlecode}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
            </div>
            <Divider className={classes.dividerS} />
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Basic);
