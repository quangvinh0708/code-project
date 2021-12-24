import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Variables = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">Variables</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    Most of the time, a JavaScript application needs to work
                    with information. Here are two examples:
                </div>
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    An online shop – the information might include goods being
                    sold and a shopping cart.
                </li>
                <li className="list-group-item mt-2">
                    A chat application – the information might include users,
                    messages, and much more.
                </li>
                <li className="list-group-item mt-2">
                    Variables are used to store this information.
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
            <div className="h4 title mt-5">A variable</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                A variable is a “named storage” for data. We can use variables
                to store goodies, visitors, and other data.
            </nav>
            <nav className="breadcrumb mt-3">
                To create a variable in JavaScript, use the let keyword.
            </nav>
            <nav className="breadcrumb mt-3">
                The statement below creates (in other words: declares) a
                variable with the name “message”:
            </nav>
            <nav className="breadcrumb mt-3">
                It looks like this: <code>let message;</code>
            </nav>
            <nav className="breadcrumb mt-3">
                Now, we can put some data into it by using the assignment
                operator =:
            </nav>
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
                    The string is now saved into the memory area associated with
                    the variable. We can access it using the variable name:
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
                    To be concise, we can combine the variable declaration and
                    assignment into a single line:
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
                We can also declare multiple variables in one line:
            </nav>{" "}
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
            <nav className=".guide mt-3">
                That might seem shorter, but we don’t recommend it. For the sake
                of better readability, please use a single line per variable.
            </nav>
            <div className="h4 title mt-5">var instead of let</div>
            <LineDivider size="small" />
            <div className="guide">
                In older scripts, you may also find another keyword: var instead
                of let:
            </div>
            <div className="guide">var message = 'Hello';</div>
            <nav className="breadcrumb mt-3">For example:</nav>
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
            </div>{" "}
            <nav className="breadcrumb mt-3">
                The var keyword is almost the same as let. It also declares a
                variable, but in a slightly different, “old-school” way.
            </nav>
            <div className="guide">
                There are subtle differences between let and var, but they do
                not matter for us yet. We’ll cover them in detail in the chapter
                The old "var".
            </div>
            <div className="h4 title mt-5">A real-life analogy </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                We can easily grasp the concept of a “variable” if we imagine it
                as a “box” for data, with a uniquely-named sticker on it.
            </nav>
            <nav className="breadcrumb mt-3">
                For instance, the variable message can be imagined as a box
                labeled "message" with the value "Hello!" in it:
            </nav>
            <nav className="breadcrumb mt-3">
                We can put any value in the box.
            </nav>
            <nav className="breadcrumb mt-3">
                We can also change it as many times as we want:
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
                    text={ex["exTag5"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            {/* <div className="h4 title mt-5">External CSS</div>
            <LineDivider size="small" /> */}
            <nav className="breadcrumb mt-3">
                When the value is changed, the old data is removed from the
                variable:
            </nav>
            <nav className="breadcrumb mt-3">
                We can also declare two variables and copy data from one into
                the other.
            </nav>
            <nav className="breadcrumb mt-3">Like this:</nav>
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
            <nav className="breadcrumb mt-3">
                Declaring twice triggers an error
            </nav>
            <nav className="breadcrumb mt-3">
                A variable should be declared only once.
            </nav>
            <nav className="breadcrumb mt-3">
                A repeated declaration of the same variable is an error:
            </nav>{" "}
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
            <nav className="breadcrumb mt-3">
                So, we should declare a variable once and then refer to it
                without let.
            </nav>
            <div className="h4 title mt-5">Functional languages</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                It’s interesting to note that there exist functional programming
                languages, like Scala or Erlang that forbid changing variable
                values.
            </nav>
            <nav className="breadcrumb mt-3">
                In such languages, once the value is stored “in the box”, it’s
                there forever. If we need to store something else, the language
                forces us to create a new box (declare a new variable). We can’t
                reuse the old one.
            </nav>
            <nav className="breadcrumb mt-3">
                Though it may seem a little odd at first sight, these languages
                are quite capable of serious development. More than that, there
                are areas like parallel computations where this limitation
                confers certain benefits. Studying such a language (even if
                you’re not planning to use it soon) is recommended to broaden
                the mind.
            </nav>
            <div className="h4 title mt-5">Variable naming</div>
            <LineDivider size="small" />
            <div className="guide">
                There are two limitations on variable names in JavaScript:
            </div>
            <div className="guide">
                The name must contain only letters, digits, or the symbols $ and
                _.
            </div>
            <div className="guide">
                The first character must not be a digit.
            </div>{" "}
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
            <div className="guide">
                When the name contains multiple words, camelCase is commonly
                used. That is: words go one after another, each word except
                first starting with a capital letter: myVeryLongName.
            </div>{" "}
            <div className="guide">
                What’s interesting – the dollar sign '$' and the underscore '_'
                can also be used in names. They are regular symbols, just like
                letters, without any special meaning.
            </div>{" "}
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Variables);
