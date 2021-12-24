import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Function = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">Functions</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    Quite often we need to perform a similar action in many
                    places of the script.
                </div>
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    For example, we need to show a nice-looking message when a
                    visitor logs in, logs out and maybe somewhere else.
                </li>
                <li className="list-group-item mt-2">
                    Functions are the main “building blocks” of the program.
                    They allow the code to be called many times without
                    repetition.
                </li>
                <li className="list-group-item mt-2">
                    We’ve already seen examples of built-in functions, like
                    alert(message), prompt(message, default) and
                    confirm(question). But we can create functions of our own as
                    well.
                </li>
                {/* <li className="list-group-item mt-2">
                    For example, here we split “Hello World” into two alerts:
                </li> */}
            </ul>{" "}
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
            </div> */}
            {/* <a
                href={`${SHARE_CODE}/nCv54ioD2KZkIsRwtNiBn6SfNcZ27p`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a> */}
            <div className="h4 title mt-5">Function Declaration</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                To create a function we can use a function declaration.
            </nav>
            <nav className="breadcrumb mt-3">It looks like this:</nav>
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
            <nav className="breadcrumb mt-3">
                <b>
                    The function keyword goes first, then goes the name of the
                    function, then a list of parameters between the parentheses
                    (comma-separated, empty in the example above, we’ll see
                    examples later) and finally the code of the function, also
                    named “the function body”, between curly braces.
                </b>
            </nav>
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
                    Our new function can be called by its name: showMessage().
                </b>
            </nav>
            <div className="guide"> For instance:</div>
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
            </div>{" "}
            <nav className=".guide mt-3">
                The call showMessage() executes the code of the function. Here
                we will see the message two times.
            </nav>
            <nav className=".guide mt-3">
                This example clearly demonstrates one of the main purposes of
                functions: to avoid code duplication.
            </nav>
            <nav className=".guide mt-3">
                If we ever need to change the message or the way it is shown,
                it’s enough to modify the code in one place: the function which
                outputs it.
            </nav>
            <div className="h4 title mt-5">Local variables</div>
            <LineDivider size="small" />
            <div className="guide">
                A variable declared inside a function is only visible inside
                that function.
            </div>
            <nav className="breadcrumb mt-3">For example:</nav>
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
            <nav className="breadcrumb mt-3">Outer variables</nav>
            <div className="guide">
                A function can access an outer variable as well, for example:
            </div>
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
            <div className="guide">
                The function has full access to the outer variable. It can
                modify it as well.
            </div>
            <div className="guide">For instance:</div>
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
            </div>
            <nav className="breadcrumb mt-3">
                The outer variable is only used if there’s no local one.
            </nav>
            <nav className="breadcrumb mt-3">
                If a same-named variable is declared inside the function then it
                shadows the outer one. For instance, in the code below the
                function uses the local userName. The outer one is ignored:
            </nav>
            <nav className="breadcrumb mt-3">For instance:</nav>
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
            </div>
            {/* <ul className="list-group mt-3">
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
            </ul> */}
            <div className="guide mt-2">Global variables</div>
            <div className="guide mt-2">
                Variables declared outside of any function, such as the outer
                userName in the code above, are called global.
            </div>
            <div className="guide mt-2">
                Global variables are visible from any function (unless shadowed
                by locals).
            </div>
            <div className="guide mt-2">
                It’s a good practice to minimize the use of global variables.
                Modern code has few or no globals. Most variables reside in
                their functions. Sometimes though, they can be useful to store
                project-level data.
            </div>
            <div className="h4 title mt-5">Parameters </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                We can pass arbitrary data to functions using parameters.
            </nav>
            <nav className="breadcrumb mt-3">
                In the example below, the function has two parameters: from and
                text.
            </nav>
            {/* <ul className="list-group mt-3">
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
            </ul> */}
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
            </div>
            {/* <div className="h4 title mt-5">External CSS</div>
            <LineDivider size="small" /> */}
            <nav className="breadcrumb mt-3">
                When the function is called in lines (*) and (**), the given
                values are copied to local variables from and text. Then the
                function uses them.
            </nav>
            <nav className="breadcrumb mt-3">
                Here’s one more example: we have a variable from and pass it to
                the function. Please note: the function changes from, but the
                change is not seen outside, because a function always gets a
                copy of the value:
            </nav>
            <nav className="breadcrumb mt-3">Like this:</nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag8"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <nav className="breadcrumb mt-3">
                When a value is passed as a function parameter, it’s also called
                an argument.
            </nav>
            <nav className="breadcrumb mt-3">
                In other words, to put these terms straight: A parameter is the
                variable listed inside the parentheses in the function
                declaration (it’s a declaration time term) An argument is the
                value that is passed to the function when it is called (it’s a
                call time term).
            </nav>
            <nav className="breadcrumb mt-3">
                We declare functions listing their parameters, then call them
                passing arguments.
            </nav>
            <nav className="breadcrumb mt-3">
                In the example above, one might say: "the function showMessage
                is declared with two parameters, then called with two arguments:
                from and "Hello"".
            </nav>
            <nav className="breadcrumb mt-3">Default values</nav>
            <nav className="breadcrumb mt-3">
                If a function is called, but an argument is not provided, then
                the corresponding value becomes undefined.
            </nav>
            <nav className="breadcrumb mt-3">
                For instance, the aforementioned function showMessage(from,
                text) can be called with a single argument:
            </nav>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Function);
