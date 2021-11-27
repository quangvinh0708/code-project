import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE } from "../../../constant/axios";

const GetStarted = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">Get Started</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    A simple text editor is all you need to learn HTML.
                </div>
            </nav>
            <div className="h4">Learn HTML Using Notepad or TextEdit</div>
            <ul className="list-group mt-3">
                <li className="list-group-item ">
                    Web pages can be created and modified by using professional
                    HTML editors.
                </li>
                <li className="list-group-item ">
                    However, for learning HTML we recommend a simple text editor
                    like Notepad (PC) or TextEdit (Mac).
                </li>
                <li className="list-group-item">
                    We believe in that using a simple text editor is a good way
                    to learn HTML.
                </li>
                <li className="list-group-item">
                    Follow the steps below to create your first web page with
                    Notepad or TextEdit.
                </li>
            </ul>
            <div className="h4 mt-3">Step 1: Open Notepad (PC)</div>
            <LineDivider size="small" />
            <nav className="breadcrumb  mt-3 ">
                <div className="b-guide">Windows 8 or later:</div>
                <div className=" b-guide">
                    Open the Start Screen (the window symbol at the bottom left
                    on your screen). Type Notepad.
                </div>
                <div className=" b-guide">Windows 7 or earlier:</div>
                <div className="b-guide">
                    Open Start &gt; Programs &gt; Accessories &gt; Notepad
                </div>
            </nav>

            <div className="h4 mt-3"> Step 1: Open TextEdit (Mac)</div>
            <LineDivider size="small" />
            <nav className="breadcrumb">
                <div className="mt-3 b-guide">
                    {" "}
                    Open Finder &gt; Applications &gt; TextEdit
                </div>{" "}
                <div className="guide">
                    Also change some preferences to get the application to save
                    files correctly. In Preferences &gt; Format &gt; choose
                    "Plain Text"
                </div>
                <div className="guide">
                    Then under "Open and Save", check the box that says "Display
                    HTML files as HTML code instead of formatted text".
                </div>
            </nav>

            <div className="h4 mt-3">Step 2: Write Some HTML</div>
            <LineDivider size="small" />
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
            <img src="https://www.w3schools.com/html/img_notepad.png" alt="" />
            <div className="h4 mt-3">Step 3: Save the HTML Page</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                <div className="b-guide">
                    Save the file on your computer. Select File {">"} Save as in
                    the Notepad menu.
                </div>
                <div className="b-guide">
                    Name the file "index.htm" and set the encoding to UTF-8
                    (which is the preferred encoding for HTML files).
                </div>
            </nav>
            <img src="https://www.w3schools.com/html/img_saveas.png" alt="" />
            <nav className="breadcrumb mt-3 font-weight-bold h5">
                Tip: You can use either .htm or .html as file extension. There
                is no difference, it is up to you.
            </nav>
            <div className="h4 mt-3">
                Step 4: View the HTML Page in Your Browser
            </div>
            <LineDivider size="small" />
            <div className="guide">
                Open the saved HTML file in your favorite browser (double click
                on the file, or right-click - and choose "Open with").
            </div>
            <div className="guide h5">The result will look much like this:</div>
            <img src="https://www.w3schools.com/html/img_chrome.png" alt="" />
            <div className="title">
                Code Yourself Online Editor - "Code Yourself"
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                <div className="guide">
                    With our free online editor, you can edit the HTML code and
                    view the result in your browser.
                </div>
                <div className="guide">
                    It is the perfect tool when you want to learn and test code
                    fast. It also has color coding and the ability to save code
                </div>
            </nav>
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
            <a href={CODE} target="_blank">
                <button className="btn btn-code btn-large">
                    Code Yourself
                </button>
            </a>
            <nav className="breadcrumb mt-3">
                <div className="guide">
                    Click on the <code>"Code Yourself"</code> above button to
                    see how it works.
                </div>
            </nav>
            <img
                src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/261537404_304204264886606_6315770954394700458_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=lQNpNiq-Y9gAX_OTUPq&_nc_ht=scontent.fdad3-3.fna&oh=03bb06970bc0c30f7d0be298eb411250&oe=61C6CAB2"
                alt=""
            />
            <Direct />
        </div>
    );
};

export default withStyles(styles)(GetStarted);
