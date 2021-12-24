import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Switch = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">The "switch" statement</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    A switch statement can replace multiple if checks.
                </div>
            </nav>
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    It gives a more descriptive way to compare a value with
                    multiple variants.
                </div>
            </nav>
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
            <div className="h4 title mt-5">The syntax</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The switch has one or more case blocks and an optional default.
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
                An operator is unary if it has a single operand. For example,
                the unary negation - reverses the sign of a number:
            </nav>
            <nav className="breadcrumb mt-3">
                <b>
                    The value of x is checked for a strict equality to the value
                    from the first case (that is, value1) then to the second
                    (value2) and so on.
                </b>
            </nav>
            <nav className="breadcrumb mt-3">
                <b>
                    If the equality is found, switch starts to execute the code
                    starting from the corresponding case, until the nearest
                    break (or until the end of switch).
                </b>
            </nav>
            <nav className="breadcrumb mt-3">
                <b>
                    If no case is matched then the default code is executed (if
                    it exists).
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
                    Here the switch starts to compare a from the first case
                    variant that is 3. The match fails.
                </b>
            </nav>
            <div className="guide">
                {" "}
                Then 4. That’s a match, so the execution starts from case 4
                until the nearest break.
            </div>
            <div className="guide">
                If there is no break then the execution continues with the next
                case without any checks.
            </div>
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
            <div className="h4 title mt-5">
                Any expression can be a switch/case argument
            </div>
            <LineDivider size="small" />
            <div className="guide">
                Both switch and case allow arbitrary expressions.
            </div>{" "}
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
            <nav className="breadcrumb mt-3">
                Here +a gives 1, that’s compared with b + 1 in case, and the
                corresponding code is executed.
            </nav>{" "}
            <div className="h4 title mt-5">Grouping of “case”</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                Several variants of case which share the same code can be
                grouped.
            </nav>
            <nav className="breadcrumb mt-3">
                For example, if we want the same code to run for case 3 and case
                5:
            </nav>
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
            <nav className="breadcrumb mt-3">
                Now both 3 and 5 show the same message.
            </nav>
            <nav className="breadcrumb mt-3">
                The ability to “group” cases is a side-effect of how switch/case
                works without break. Here the execution of case 3 starts from
                the line (*) and goes through case 5, because there’s no break.
            </nav>
            <nav className="breadcrumb mt-3">Type matters</nav>
            <nav className="breadcrumb mt-3">For instance:</nav>
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
            <div className="guide mt-2">For 0, 1, the first alert runs.</div>
            <div className="guide mt-2">For 2 the second alert runs.</div>
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
            <nav className="breadcrumb mt-3">
                But for 3, the result of the prompt is a string "3", which is
                not strictly equal === to the number 3. So we’ve got a dead code
                in case 3! The default variant will execute.
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
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Switch);
