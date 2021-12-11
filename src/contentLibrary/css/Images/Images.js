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

const Images = (props) => {
    const [language, changeLanguage] = useState("html");
    const [languageDemo, changeDemo] = useState(ex["html"]);
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">CSS Images</p>
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
                    The background-image property specifies an image to use as
                    the background of an element.
                </b>
            </div>{" "}
            <div className="example mt-5">
                <b>
                    By default, the image is repeated so it covers the entire
                    element.
                </b>
            </div>{" "}
            <img
                src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/263387024_859312608072974_2367106350084926813_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=pGtVTnGNUNEAX91wzos&_nc_ht=scontent.fdad3-3.fna&oh=799d9e82e318f8f64676e9ef43b163ac&oe=61D7A043"
                alt=""
            />
            <a
                href={`${SHARE_CODE}/Lq2PltzHOsj9e1ODl3CN39Wy2OVkXL`}
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
                    text={ex["getStarted"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/Lq2PltzHOsj9e1ODl3CN39Wy2OVkXL`}
                target="_blank"
            >
                <button className="btn btn-code btn-large mt-3">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title mt-4">CSS Background Image</div>
            <Divider className={classes.dividerS} />{" "}
            <div className="example mt-5">
                <b>
                    The background image can also be set for specific elements,
                    like the <code>{`<p>`}</code> element:
                </b>
            </div>{" "}
            <div className="title mt-4">CSS background-repeat</div>
            <Divider className={classes.dividerS} />
            <div className="example mt-5">
                <b>
                    By default, the background-image property repeats an image
                    both horizontally and vertically.
                </b>
            </div>
            <div className="example mt-5">
                <b>
                    Some images should be repeated only horizontally or
                    vertically, or they will look strange, like this:
                </b>
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
                    text={ex["getStarted"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <div className="mt-3">
                <b>
                    The element selector selects HTML elements based on the
                    element name.
                </b>
            </div>
            <div className="h4 mt-2 ">
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        If you do not want to apply opacity to child elements,
                        like in our example above, use RGBA color values. The
                        following example sets the opacity for the background
                        color and not the text:
                    </div>
                </nav>
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        You learned from our CSS Colors Chapter, that you can
                        use RGB as a color value. In addition to RGB, you can
                        use an RGB color value with an alpha channel (RGBA) -
                        which specifies the opacity for a color.
                    </div>
                </nav>
                <nav className="breadcrumb">
                    <div className="guide font-weight-bold">
                        An RGBA color value is specified with: rgba(red, green,
                        blue, alpha). The alpha parameter is a number between
                        0.0 (fully transparent) and 1.0 (fully opaque).
                    </div>
                </nav>
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
                <div className="title mt-4">
                    CSS background-repeat: no-repeat
                </div>
                <Divider className={classes.dividerS} />{" "}
                <div className="example mt-3">
                    Showing the background image only once is also specified by
                    the background-repeat property:
                </div>
                <div className="title mt-4">CSS background-position</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        The background-position property is used to specify the
                        position of the background image.
                    </div>
                </nav>
            </div>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Images);
