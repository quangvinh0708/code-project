import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Structure = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">Code structure</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    Statements are syntax constructs and commands that perform
                    actions.
                </div>
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    We’ve already seen a statement, alert('Hello, world!'),
                    which shows the message “Hello, world!”.
                </li>
                <li className="list-group-item mt-2">
                    We can have as many statements in our code as we want.
                    Statements can be separated with a semicolon.
                </li>
                <li className="list-group-item mt-2">
                    For example, here we split “Hello World” into two alerts:
                </li>
            </ul>{" "}
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["getStarted"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/nCv54ioD2KZkIsRwtNiBn6SfNcZ27p`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 title mt-5">Semicolons</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                A semicolon may be omitted in most cases when a line break
                exists.
            </nav>
            <nav className="breadcrumb mt-3">This would also work:</nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag1"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <nav className="breadcrumb mt-3">
                <b>
                    Here, JavaScript interprets the line break as an “implicit”
                    semicolon. This is called an automatic semicolon insertion.
                    In most cases, a newline implies a semicolon. But “in most
                    cases” does not mean “always”! There are cases when a
                    newline does not mean a semicolon. For example:
                </b>
            </nav>
            <nav className="breadcrumb mt-3">
                <b>
                    The code outputs 6 because JavaScript does not insert
                    semicolons here. It is intuitively obvious that if the line
                    ends with a plus "+", then it is an “incomplete expression”,
                    so a semicolon there would be incorrect. And in this case,
                    that works as intended.
                </b>
            </nav>
            <div className="guide"></div>
            But there are situations where JavaScript “fails” to assume a
            semicolon where it is really needed. Errors which occur in such
            cases are quite hard to find and fix.
            <div className="h4 title mt-5">An example of an error</div>
            <LineDivider size="small" />
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag2"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <nav className="breadcrumb mt-3">
                No need to think about the meaning of the brackets [] and
                forEach yet. We’ll study them later. For now, just remember the
                result of running the code: it shows Hello, then 1, then 2.
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    Now let’s remove the semicolon after the alert:
                </li>
                <li className="list-group-item mt-2">
                    The difference compared to the code above is only one
                    character: the semicolon at the end of the first line is
                    gone.
                </li>
                <li className="list-group-item mt-2">
                    If we run this code, only the first Hello shows (and there’s
                    an error, you may need to open the console to see it). There
                    are no numbers any more.
                </li>
                <li className="list-group-item mt-2">
                    That’s because JavaScript does not assume a semicolon before
                    square brackets [...]. So, the code in the last example is
                    treated as a single statement.
                </li>
            </ul>
            <div className="guide mt-2">Here’s how the engine sees it:</div>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag3"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            {/* <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["getStarted"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <nav className="breadcrumb mt-3">
                The most common way to add CSS, is to keep the styles in
                external CSS files. However, in this tutorial we will use inline
                and internal styles, because this is easier to demonstrate, and
                easier for you to try it yourself. The most common way to add
                CSS, is to keep the styles in external CSS files. However, in
                this tutorial we will use inline and internal styles, because
                this is easier to demonstrate, and easier for you to try it
                yourself.
            </nav> */}
            <div className="h4 title mt-5">Comments</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                As time goes on, programs become more and more complex. It
                becomes necessary to add comments which describe what the code
                does and why.
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    Comments can be put into any place of a script. They don’t
                    affect its execution because the engine simply ignores them.
                </li>
                <li className="list-group-item mt-2">
                    One-line comments start with two forward slash characters
                    //.
                </li>
                <li className="list-group-item mt-2">
                    The rest of the line is a comment. It may occupy a full line
                    of its own or follow a statement.
                </li>
            </ul>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag4"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            {/* <div className="h4 title mt-5">External CSS</div>
            <LineDivider size="small" /> */}
            <nav className="breadcrumb mt-3">
                Multiline comments start with a forward slash and an asterisk /*
                and end with an asterisk and a forward slash */.
            </nav>
            <nav className="breadcrumb mt-3">Like this:</nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag5"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <nav className="breadcrumb mt-3">
                The content of comments is ignored, so if we put code inside /*
                … */, it won’t execute.
            </nav>
            <div>
                <b>
                    Sometimes it can be handy to temporarily disable a part of
                    code:
                </b>
            </div>{" "}
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag6"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <div className="h4 title mt-5">Use hotkeys!</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                In most editors, a line of code can be commented out by pressing
                the Ctrl+/ hotkey for a single-line comment and something like
                Ctrl+Shift+/ – for multiline comments (select a piece of code
                and press the hotkey). For Mac, try Cmd instead of Ctrl and
                Option instead of Shift.
            </nav>
            <nav className="breadcrumb mt-3">
                Nested comments are not supported!
            </nav>
            <nav className="breadcrumb mt-3">
                There may not be /*...*/ inside another /*...*/.
            </nav>
            <nav className="breadcrumb mt-3">
                Such code will die with an error:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag7"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            {/* <a
                href={`${SHARE_CODE}/nCv54ioD2KZkIsRwtNiBn6SfNcZ27p`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a> */}
            <nav className="breadcrumb mt-3">
                Please, don’t hesitate to comment your code.
            </nav>
            <div>
                <b>
                    Comments increase the overall code footprint, but that’s not
                    a problem at all. There are many tools which minify code
                    before publishing to a production server. They remove
                    comments, so they don’t appear in the working scripts.
                    Therefore, comments do not have negative effects on
                    production at all.
                </b>
            </div>{" "}
            <nav className="breadcrumb mt-3">
                Later in the tutorial there will be a chapter Code quality that
                also explains how to write better comments.
            </nav>
            {/* <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag2"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <div className="h4 title mt-5">CSS Border</div>
            <LineDivider size="small" /> */}
            {/* <nav className="breadcrumb mt-3">
                Tip: You can define a border for nearly all js elements.
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag3"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <nav className="breadcrumb mt-3">
                The external style sheet can be written in any text editor. The
                file must not contain any js code, and must be saved with a .css
                extension.
            </nav>
            <div>
                <b>Here is what the "styles.css" file looks like:</b>
            </div>{" "}
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
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
            </div>
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
            </div> */}
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Structure);
