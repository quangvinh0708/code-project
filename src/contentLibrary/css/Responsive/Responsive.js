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

const Responsive = (props) => {
    const [language, changeLanguage] = useState("html");
    const [languageDemo, changeDemo] = useState(ex["html"]);
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">CSS Responsive Table</p>
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
            <div className="example mt-5">
                <b>
                    Add a container element{" "}
                    <code>{`(like <div>) with overflow-x:auto around the <table>`}</code>{" "}
                    element to make it responsive:
                </b>
            </div>{" "}
            <img
                src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/262506119_925530334757407_1697561849346879495_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ahAx8hNqVqAAX_44LM4&_nc_ht=scontent.fdad3-3.fna&oh=8d7bce8f0074404ffb1b34444491e926&oe=61D9086A"
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
                href={`${SHARE_CODE}/tcOGjkzVjMnas8EaDsh40bVIGJ2Jme`}
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

export default withStyles(styles)(Responsive);
