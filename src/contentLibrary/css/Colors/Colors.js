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

const Colors = (props) => {
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">CSS Colors</p>
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
            </div> */}{" "}
            <Divider className={classes.dividerS} />
            <div className="example mt-5">
                <b>
                    Colors are specified using predefined color names, or RGB,
                    HEX, HSL, RGBA, HSLA values.
                </b>
            </div>{" "}
            <div className="title mt-4">CSS Color Names</div>
            <Divider className={classes.dividerS} />{" "}
            <div className="example mt-5">
                <b>
                    In CSS, a color can be specified by using a predefined color
                    name:
                </b>
            </div>{" "}
            <img
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/263423784_443365350525560_3451145979744385671_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=rLBk0JHfG64AX9nIjNG&_nc_ht=scontent.fdad3-4.fna&oh=98a55a3bd4106f3e973167c49b370571&oe=61D6907F"
                alt=""
            />
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"css"}
                    text={ex["getStarted"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/PtW9aWI0mR3EkxWaxeJTkTNegq2XTt`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title mt-4">CSS Background Color</div>
            <Divider className={classes.dividerS} />
            <div className="mt-3">
                <b>You can set the background color for HTML elements:</b>
            </div>
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
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"css"}
                    text={ex["structural"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/SQZFGkHxPhkEFmB1ytz9eh0636XF9V`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="h4 mt-2 ">
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
                <div className="title mt-4">CSS Text Color</div>
                <Divider className={classes.dividerS} />{" "}
                <div className="mt-3">
                    <b>You can set the color of text:</b>
                </div>
                <div className="example mt-3"></div>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag1"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
                <a
                    href={`${SHARE_CODE}/Djopb5qyr0e1RKUytnTi2F4RnK2A0t`}
                    target="_blank"
                >
                    <button className="btn btn-code btn-large">
                        {CODES_ONLINE}
                    </button>
                </a>
                <div className="title mt-4">The CSS class Selector</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        The class selector selects HTML elements with a specific
                        class attribute.
                    </div>
                </nav>
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        To select elements with a specific class, write a period
                        (.) character, followed by the class name.
                    </div>
                </nav>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag1"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
                <a
                    href={`${SHARE_CODE}/usKglW52AcgoFjxEGTxowowUQJp4OG`}
                    target="_blank"
                >
                    <button className="btn btn-code btn-large">
                        {CODES_ONLINE}
                    </button>
                </a>
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        You can also specify that only specific HTML elements
                        should be affected by a class.
                    </div>
                </nav>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag2"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
                <nav className="breadcrumb mt-3">
                    <div className="guide font-weight-bold">
                        HTML elements can also refer to more than one class.
                    </div>
                </nav>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag3"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
                <div className="title mt-4">The CSS Universal Selector</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        CSS Color Values
                    </div>
                </nav>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag4"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
                <div className="title mt-4">The CSS Grouping Selector</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        The grouping selector selects all the HTML elements with
                        the same style definitions.
                    </div>
                </nav>
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        Look at the following CSS code (the h1, h2, and p
                        elements have the same style definitions):
                    </div>
                </nav>
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag5"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        It will be better to group the selectors, to minimize
                        the code.
                    </div>
                </nav>
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        To group selectors, separate each selector with a comma.
                    </div>
                </nav>{" "}
                <div className="guide">An example</div>
                <CopyBlock
                    language={"css"}
                    text={ex["exTag6"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />{" "}
            </div>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Colors);
