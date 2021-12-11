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

const Backgrounds = (props) => {
    const [language, changeLanguage] = useState("html");
    const [languageDemo, changeDemo] = useState(ex["html"]);
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">CSS Backgrounds</p>
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
                    The CSS background properties are used to add background
                    effects for elements.
                </b>
            </div>{" "}
            <img
                src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.15752-9/264127899_913593272852984_8209791640838876350_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=kQdN3J5zBEEAX8Xbrj5&_nc_ht=scontent.fdad3-2.fna&oh=faf0792892b1839883c8086277f8b456&oe=61D7E8C1"
                alt=""
            />
            <div className="title mt-4">CSS background-color</div>
            <Divider className={classes.dividerS} />{" "}
            <div className="example mt-5">
                <b>
                    The background-color property specifies the background color
                    of an element.
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
            <nav className="breadcrumb mt-3">
                With CSS, a color is most often specified by:
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    a valid color name - like "red"
                </li>
                <li className="list-group-item mt-2">
                    a HEX value - like "#ff0000"
                </li>
                <li className="list-group-item mt-2">
                    an RGB value - like "rgb(255,0,0)"
                </li>
            </ul>{" "}
            <nav className="breadcrumb mt-3">
                Look at CSS Color Values for a complete list of possible color
                values.
            </nav>
            <div className="title mt-4">Other Elements</div>
            <Divider className={classes.dividerS} />
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
            <nav className="breadcrumb mt-3">
                You can set the background color for any HTML elements:
            </nav>
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
                href={`${SHARE_CODE}/e3LsZlEFOIPpaAPMS3PerEpAPObQTM`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="mt-3">
                <b>
                    The element selector selects HTML elements based on the
                    element name.
                </b>
            </div>
            <div className="h4 mt-2 ">
                <div className="title mt-4">Opacity / Transparency</div>
                <Divider className={classes.dividerS} />{" "}
                <div>
                    <b>
                        The opacity property specifies the opacity/transparency
                        of an element. It can take a value from 0.0 - 1.0. The
                        lower value, the more transparent:
                    </b>
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
                    href={`${SHARE_CODE}/F0cJDc7Z4mtOzG5KUeW5lASQfOuzRK`}
                    target="_blank"
                >
                    <button className="btn btn-code btn-large">
                        {CODES_ONLINE}
                    </button>
                </a>
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        Note: When using the opacity property to add
                        transparency to the background of an element, all of its
                        child elements inherit the same transparency. This can
                        make the text inside a fully transparent element hard to
                        read.
                    </div>
                </nav>
                <div className="title mt-4">Transparency using RGBA</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
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
            </div>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Backgrounds);
