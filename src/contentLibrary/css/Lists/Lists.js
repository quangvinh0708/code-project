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

const Lists = (props) => {
    const { classes } = props;

    return (
        <div className="container-content">
            <p className="lesson-title">CSS Lists</p>
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
            <img
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t1.15752-9/262867661_708131226829418_6352223156156052940_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=cULnfNYvhFQAX-fR_Af&_nc_ht=scontent.fdad3-5.fna&oh=c0beb4a328ae3bd0c1439df7bc60caf5&oe=61DA3A66"
                alt=""
            />
            <div className="title mt-4">HTML Lists and CSS List Properties</div>
            <Divider className={classes.dividerS} />{" "}
            <div className="mt-4">
                <b>In HTML, there are two main types of lists:</b>
            </div>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    unordered lists <code>{`(<ul>)`}</code> - the list items are
                    marked with bullets
                </li>
                <li className="list-group-item mt-2">
                    ordered lists <code>{`(<ol>)`}</code> - the list items are
                    marked with numbers or letters
                </li>
            </ul>
            <div className="mt-4">
                <b>The CSS list properties allow you to:</b>
            </div>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    Set different list item markers for ordered lists
                </li>
                <li className="list-group-item mt-2">
                    Set different list item markers for unordered lists
                </li>
                <li className="list-group-item mt-2">
                    Set an image as the list item marker
                </li>
                <li className="list-group-item mt-2">
                    Add background colors to lists and list items
                </li>
            </ul>
            <div className="title mt-4">Different List Item Markers</div>
            <Divider className={classes.dividerS} />
            <div className="example mt-5">
                <b>
                    The list-style-type property specifies the type of list item
                    marker.
                </b>
            </div>
            <div className="example mt-5">
                <b>
                    The following example shows some of the available list item
                    markers:
                </b>
            </div>
            <img
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/262156298_950190775609289_5578887055005730167_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=B265qXnhZgwAX8mha_j&_nc_ht=scontent.fdad3-4.fna&oh=f27eb9eae23bf966f4258794778150d6&oe=61D8954D"
                alt=""
            />{" "}
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
            </div>{" "}
            <a
                href={`${SHARE_CODE}/PwQSueNzNWCZSRduSSNjFihw6J01sU`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
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
            <div className="mt-3">
                <b>
                    The element selector selects HTML elements based on the
                    element name.
                </b>
            </div>
            <div className="h4 mt-2 ">
                <div className="title mt-4">
                    An Image as The List Item Marker
                </div>
                <Divider className={classes.dividerS} />{" "}
                <div className="example mt-3">
                    The list-style-image property specifies an image as the list
                    item marker:
                </div>
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
                </div>{" "}
                <a
                    href={`${SHARE_CODE}/yx0OcVlw2DFbPo04ATgHnR7MbOzaQl`}
                    target="_blank"
                >
                    <button className="btn btn-code btn-large">
                        {CODES_ONLINE}
                    </button>
                </a>
                <div className="title mt-4">Position The List Item Markers</div>
                <Divider className={classes.dividerS} />{" "}
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        The list-style-position property specifies the position
                        of the list-item markers (bullet points).{" "}
                    </div>
                </nav>
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        "list-style-position: outside;" means that the bullet
                        points will be outside the list item. The start of each
                        line of a list item will be aligned vertically. This is
                        default:
                    </div>
                </nav>
                <nav className="breadcrumb mt-4">
                    <div className="guide font-weight-bold">
                        "list-style-position: inside;" means that the bullet
                        points will be inside the list item. As it is part of
                        the list item, it will be part of the text and push the
                        text at the start:
                    </div>
                </nav>
            </div>
            <div className="title mt-4">Remove Default Settings</div>
            <Divider className={classes.dividerS} />{" "}
            <div className="example mt-3">
                The list-style-type:none property can also be used to remove the
                markers/bullets. Note that the list also has default margin and
                padding. To remove this, add margin:0 and padding:0 to{" "}
                <code>{`<ul> or <ol>`}</code>:
            </div>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"css"}
                    text={ex["exTag1"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <div className="title mt-4">List - Shorthand property</div>
            <Divider className={classes.dividerS} />{" "}
            <div className="example mt-3">
                The list-style property is a shorthand property. It is used to
                set all the list properties in one declaration:
                <code>{`<ul> or <ol>`}</code>:
            </div>
            <div className="mt-3">
                <b>
                    list-style-type (if a list-style-image is specified, the
                    value of this property will be displayed if the image for
                    some reason cannot be displayed)
                </b>
            </div>
            <nav className="breadcrumb mt-4">
                <div className="guide font-weight-bold">
                    list-style-position (specifies whether the list-item markers
                    should appear inside or outside the content flow)
                </div>
            </nav>
            <nav className="breadcrumb mt-4">
                <div className="guide font-weight-bold">
                    list-style-image (specifies an image as the list item
                    marker)
                </div>
            </nav>
            <nav className="breadcrumb mt-4">
                <div className="guide font-weight-bold">
                    If one of the property values above are missing, the default
                    value for the missing property will be inserted, if any.
                </div>
            </nav>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"css"}
                    text={ex["exTag1"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>{" "}
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Lists);
