import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const GetStarted = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">Get Started</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    JavaScript is the world's most popular programming language.
                </div>
            </nav>
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    JavaScript is the programming language of the Web.
                </div>
            </nav>
            <nav className="breadcrumb my-bread">
                <div className="guide">JavaScript is easy to learn.</div>
            </nav>
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    This tutorial will teach you JavaScript from basic to
                    advanced.
                </div>
            </nav>

            <div className="h4 title mt-5">Examples in Each Chapter</div>
            <LineDivider size="small" />

            <nav className="breadcrumb mt-3">
                One of many JavaScript HTML methods is getElementById().
            </nav>
            <nav className="breadcrumb mt-3">
                The example below "finds" an HTML element (with id="demo"), and
                changes the element content (innerHTML) to "Hello JavaScript":
            </nav>
            <a
                href={`${SHARE_CODE}/PosyxyJfqpmzt96dik5VD07HdSGEd9`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">Use the Menu</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                We recommend reading this tutorial, in the sequence listed in
                the menu.
            </nav>

            <nav className="breadcrumb mt-3">
                If you have a large screen, the menu will always be present on
                the left.
            </nav>

            <nav className="breadcrumb mt-3">
                If you have a small screen, open the menu by clicking the top
                menu sign ☰.
            </nav>
            <div className="h4 title mt-5">Why Study JavaScript?</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                JavaScript is one of the 3 languages all web developers must
                learn:
            </nav>

            <nav className="breadcrumb mt-3">
                1. HTML to define the content of web pages
            </nav>
            <nav className="breadcrumb mt-3">
                2. CSS to specify the layout of web pages
            </nav>
            <nav className="breadcrumb mt-3">
                3. JavaScript to program the behavior of web pages
            </nav>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(GetStarted);
