import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, SHARE_CODE } from "../../../constant/axios";

const Attributes = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">HTML Attributes</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">
                    HTML attributes provide additional information about HTML
                    elements.
                </div>
            </nav>
            <div className="h4 title mt-5">HTML Attributes</div>
            <ul className="list-group mt-3">
                <li className="list-group-item ">
                    All HTML elements can have attributes
                </li>
                <li className="list-group-item ">
                    Attributes provide additional information about elements
                </li>
                <li className="list-group-item">
                    Attributes are always specified in the start tag
                </li>
                <li className="list-group-item">
                    Attributes usually come in name/value pairs like:
                    name="value"
                </li>
            </ul>
            <div className="title h5 mt-5">The href Attribute</div>
            <nav className="breadcrumb mt-3">
                The {"<a>"} tag defines a hyperlink. The href attribute
                specifies the URL of the page the link goes to:
            </nav>
            <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["getStarted"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/VPdNvkNrfnZsvoc7iPdl8QhUg9343E`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    Code Yourself
                </button>
            </a>
            <div className="title h5 mt-5">The src Attribute</div>
            <nav className="breadcrumb mt-3">
                The <code>{`<img>`}</code> tag is used to embed an image in an
                HTML page. The src attribute specifies the path to the image to
                be displayed:
            </nav>
            <div className="example">
                <CopyBlock
                    language={"html"}
                    text={ex["exTag3"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/BuiTtqwWhYT9C1v1S7JE0aO2bs04T6`}
                target="_blank"
            >
                <button className="btn btn-code btn-large">
                    Code Yourself
                </button>
            </a>
            <nav className="breadcrumb mt-3">
                You can also copy an image address online like above:
            </nav>
            <img
                src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/263310097_1257859551360113_4490305699331198709_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=PDwy9C0tDy8AX-a_OkD&_nc_ht=scontent.fdad3-3.fna&oh=059320e6e5cb657caad8b7b566f08ed8&oe=61D4FDFF"
                alt=""
            />
            <nav className="breadcrumb mt-3">And paste it into the href...</nav>
            <nav className="breadcrumb mt-3">
                {" "}
                It should display like above on the browser screen:
            </nav>
            <img
                className="mt-5"
                src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.15752-9/263628681_707424356887617_3179033584814532379_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=OOYaiiaXzMEAX-hWdAR&_nc_ht=scontent.fdad3-2.fna&oh=6b8e7186079eca0b0b259cf64cc59391&oe=61D3379D"
                alt=""
                width="500px"
                height="450px"
            />
            There are two ways to specify the URL in the src attribute:
            <nav className="breadcrumb mt-3">
                Absolute URL - Links to an external image that is hosted on
                another website. Example:
                src="https://www.conan-img.com/images/img_girl.jpg".
            </nav>
            <nav className="breadcrumb mt-3">
                Notes: External images might be under copyright. If you do not
                get permission to use it, you may be in violation of copyright
                laws. In addition, you cannot control external images; it can
                suddenly be removed or changed.
            </nav>
            <nav className="breadcrumb mt-3">
                Relative URL - Links to an image that is hosted within the
                website. Here, the URL does not include the domain name. If the
                URL begins without a slash, it will be relative to the current
                page. Example: src="img_girl.jpg". If the URL begins with a
                slash, it will be relative to the domain. Example:
                src="/images/img_girl.jpg".
            </nav>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Attributes);
