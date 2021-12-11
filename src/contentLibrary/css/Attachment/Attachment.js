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

const Attachment = (props) => {
    const [language, changeLanguage] = useState("html");
    const [languageDemo, changeDemo] = useState(ex["html"]);
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">CSS Background Attachment</p>
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
                    The background-attachment property specifies whether the
                    background image should scroll or be fixed (will not scroll
                    with the rest of the page):
                </b>
            </div>{" "}
            <div className="example mt-5">
                <b>
                    By default, the image is repeated so it covers the entire
                    element.
                </b>
            </div>{" "}
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
                href={`${SHARE_CODE}/TMIuK3Z3aw6BuckdI6lxw0et2BgUC4`}
                target="_blank"
            >
                <button className="btn btn-code btn-large mt-3">
                    {CODES_ONLINE}
                </button>
            </a>
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
                href={`${SHARE_CODE}/zQKVY4QmQ47dzsNCBYQLIBcgkfiY8Q`}
                target="_blank"
            >
                <button className="btn btn-code btn-large mt-3">
                    {CODES_ONLINE}
                </button>
            </a>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Attachment);
