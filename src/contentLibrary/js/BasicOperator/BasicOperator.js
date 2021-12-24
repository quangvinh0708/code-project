import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const BasicOperator = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">Basic Operator</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">Basic operators, maths</div>
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    We know many operators from school. They are things like
                    addition +, multiplication *, subtraction -, and so on.
                </li>
                <li className="list-group-item mt-2">
                    In this chapter, we’ll start with simple operators, then
                    concentrate on JavaScript-specific aspects, not covered by
                    school arithmetic.
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
            <div className="h4 title mt-5">
                Terms: “unary”, “binary”, “operand”
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                Before we move on, let’s grasp some common terminology.
            </nav>
            <nav className="breadcrumb mt-3">
                An operand – is what operators are applied to. For instance, in
                the multiplication of 5 * 2 there are two operands: the left
                operand is 5 and the right operand is 2. Sometimes, people call
                these “arguments” instead of “operands”. :
            </nav>
            <nav className="breadcrumb mt-3">
                An operator is unary if it has a single operand. For example,
                the unary negation - reverses the sign of a number:
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
                    An operator is binary if it has two operands. The same minus
                    exists in binary form as well:
                </b>
            </nav>
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
                <b>
                    Formally, in the examples above we have two different
                    operators that share the same symbol: the negation operator,
                    a unary operator that reverses the sign, and the subtraction
                    operator, a binary operator that subtracts one number from
                    another.
                </b>
            </nav>
            <div className="guide">
                {" "}
                Formally, in the examples above we have two different operators
                that share the same symbol: the negation operator, a unary
                operator that reverses the sign, and the subtraction operator, a
                binary operator that subtracts one number from another.
            </div>
            <div className="h4 title mt-5">Maths</div>
            <LineDivider size="small" />
            <div className="guide">
                The following math operations are supported:
            </div>
            <nav className="breadcrumb mt-3">
                Addition +, Subtraction -, Multiplication *, Division /,
                Remainder %, Exponentiation **.
            </nav>
            <nav className="breadcrumb mt-3">
                The first four are straightforward, while % and ** need a few
                words about them.
            </nav>
            <nav className="breadcrumb mt-3">Remainder %</nav>
            <div className="guide">
                The remainder operator %, despite its appearance, is not related
                to percents.
            </div>
            <div className="guide">
                The result of a % b is the remainder of the integer division of
                a by b.
            </div>
            <div className="guide">For instance:</div>
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
            <nav className="breadcrumb mt-3">Exponentiation **</nav>
            <nav className="breadcrumb mt-3">
                The exponentiation operator a ** b raises a to the power of b.
            </nav>
            <nav className="breadcrumb mt-3">
                In school maths, we write that as ab.
            </nav>
            <nav className="breadcrumb mt-3">For instance:</nav>
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
            <div className="guide mt-2">
                Just like in maths, the exponentiation operator is defined for
                non-integer numbers as well.
            </div>
            <div className="guide mt-2">
                For example, a square root is an exponentiation by ½:
            </div>
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
            <div className="h4 title mt-5">
                String concatenation with binary +
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                Let’s meet features of JavaScript operators that are beyond
                school arithmetics.
            </nav>
            <nav className="breadcrumb mt-3">
                Usually, the plus operator + sums numbers.
            </nav>
            <nav className="breadcrumb mt-3">
                But, if the binary + is applied to strings, it merges
                (concatenates) them:
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
                    text={ex["exTag6"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            {/* <div className="h4 title mt-5">External CSS</div>
            <LineDivider size="small" /> */}
            <nav className="breadcrumb mt-3">
                Note that if any of the operands is a string, then the other one
                is converted to a string too.
            </nav>
            <nav className="breadcrumb mt-3">For example:</nav>
            <nav className="breadcrumb mt-3">Like this:</nav>
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
                See, it doesn’t matter whether the first operand is a string or
                the second one.
            </nav>
            <nav className="breadcrumb mt-3">
                Here’s a more complex example:
            </nav>
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
            </div>{" "}
            <nav className="breadcrumb mt-3">
                Here, operators work one after another. The first + sums two
                numbers, so it returns 4, then the next + adds the string 1 to
                it, so it’s like 4 + '1' = '41'.
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag9"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <div>
                <b>
                    Here, the first operand is a string, the compiler treats the
                    other two operands as strings too. The 2 gets concatenated
                    to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".
                </b>
            </div>{" "}
            <div>
                <b>
                    The binary + is the only operator that supports strings in
                    such a way. Other arithmetic operators work only with
                    numbers and always convert their operands to numbers.
                </b>
            </div>{" "}
            <div className="h4 title mt-5">Numeric conversion, unary +</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                The plus + exists in two forms: the binary form that we used
                above and the unary form.
            </nav>
            <nav className="breadcrumb mt-3">
                The unary plus or, in other words, the plus operator + applied
                to a single value, doesn’t do anything to numbers. But if the
                operand is not a number, the unary plus converts it into a
                number.
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag10"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <nav className="breadcrumb mt-3">
                It actually does the same thing as Number(...), but is shorter.
            </nav>
            <nav className="breadcrumb mt-3">
                The need to convert strings to numbers arises very often. For
                example, if we are getting values from HTML form fields, they
                are usually strings. What if we want to sum them? The binary
                plus would add them as strings:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag11"]}
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
                It actually does the same thing as Number(...), but is shorter.
            </nav>
            <div>
                <b>
                    The need to convert strings to numbers arises very often.
                    For example, if we are getting values from HTML form fields,
                    they are usually strings. What if we want to sum them?
                </b>
            </div>{" "}
            <nav className="breadcrumb mt-3">
                The binary plus would add them as strings:
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"js"}
                    text={ex["exTag12"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
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

export default withStyles(styles)(BasicOperator);
