import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

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
            <LineDivider size="small" />
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
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title h5 mt-5">The src Attribute</div>
            <LineDivider size="small" />
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
                    {CODES_ONLINE}
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
            <div className="mt-5">
                There are two ways to specify the URL in the src attribute:
            </div>
            <nav className="breadcrumb mt-3">
                Absolute URL - Links to an external image that is hosted on
                another website. Example:
                <code>
                    {" "}
                    src="https://www.conan-img.com/images/img_girl.jpg".
                </code>
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
                page. Example: <code>src="img_girl.jpg"</code>. If the URL
                begins with a slash, it will be relative to the domain. Example:
                src="/images/img_girl.jpg".
            </nav>
            <div className="title h5 mt-5">The width and height Attributes</div>
            <LineDivider size="small" />
            <div>
                <b>
                    The <code>{"<img>"}</code> tag should also contain the width
                    and height attributes, which specifies the width and height
                    of the image (in pixels):
                </b>
            </div>
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
            <a
                href={`${SHARE_CODE}/KyhKtKUcGznIt9xEquxRLisuDHnTxr`}
                target="_blank"
                className="mt-5"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title h5 mt-5">The alt Attribute</div>
            <LineDivider size="small" />
            <div>
                <b>
                    The required alt attribute for the <code>{`<img>`}</code>{" "}
                    tag specifies an alternate text for an image, if the image
                    for some reason cannot be displayed. This can be due to slow
                    connection, or an error in the src attribute, or if the user
                    uses a screen reader.
                </b>
            </div>{" "}
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
            <a
                href={`${SHARE_CODE}/BAed7waozdYprIms6gWeWT4SpjNSgH`}
                target="_blank"
                className="mt-5"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title h5 mt-5">
                <div className="title h5 mt-5">
                    The width and height Attributes
                </div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-4">
                The <code>style</code> attribute is used to add styles to an
                element, such as color, font, size, and more.
            </nav>{" "}
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
            </div>{" "}
            <a
                href={`${SHARE_CODE}/SVvl6WIVJvsu0YkhLgEE8Z6T3mbDhV`}
                target="_blank"
                className="mt-5"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <div className="title h5 mt-5">
                <div className="title h5 mt-5">The lang Attribute</div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-5">
                You should always include the lang attribute inside the{" "}
                <code>{`<html>`}</code> tag, to declare the language of the Web
                page. This is meant to assist search engines and browsers.
            </nav>
            <b>The following example specifies English as the language:</b>
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
            <nav className="breadcrumb mt-5">
                Country codes can also be added to the language code in the lang
                attribute. So, the first two characters define the language of
                the HTML page, and the last two characters define the country.
            </nav>
            <b>
                The following example specifies English as the language and
                United States as the country:
            </b>{" "}
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
            </div>{" "}
            <div className="title h5 mt-5">
                <div className="title h5 mt-5">The title Attribute</div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-5">
                The title attribute defines some extra information about an
                element.
            </nav>
            <div>
                <b>
                    The value of the title attribute will be displayed as a
                    tooltip when you mouse over the element:
                </b>
            </div>
            <div className="example mt-3">
                <div className="guide">An example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag9"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <a
                href={`${SHARE_CODE}/k3ogOruOI7ANlcRRVd9cSzENR4wSog`}
                target="_blank"
                className="mt-5"
            >
                <button className="btn btn-code btn-large">
                    {CODES_ONLINE}
                </button>
            </a>
            <nav className="breadcrumb mt-5">
                <div>
                    <b>NOTE</b>
                </div>
                The HTML standard does not require lowercase attribute names.
                The title attribute (and all other attributes) can be written
                with uppercase or lowercase like title or TITLE. However,
                recommends lowercase attributes in HTML, and demands lowercase
                attributes for stricter document types like XHTML.
            </nav>
            <nav className="breadcrumb mt-5">
                {" "}
                <div>
                    The HTML standard does not require quotes around attribute
                    values.
                </div>
                <b>
                    However, recommends quotes in HTML, and demands quotes for
                    stricter document types like XHTML. Good:
                </b>
            </nav>{" "}
            <div className="example mt-3">
                <div className="guide">An good example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag10"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <nav className="breadcrumb mt-5">
                <div className="example mt-3">
                    <div className="guide">Bad example</div>

                    <CopyBlock
                        language={"html"}
                        text={ex["exTag11"]}
                        showLineNumbers={true}
                        theme={googlecode}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
            </nav>
            <div className="title h5 mt-5">
                <div className="title h5 mt-5">Single or Double Quotes?</div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-5">
                Double quotes around attribute values are the most common in
                HTML, but single quotes can also be used.
            </nav>
            <div>
                <b>
                    In some situations, when the attribute value itself contains
                    double quotes, it is necessary to use single quotes:
                </b>
            </div>{" "}
            <div className="example mt-3">
                <div className="guide">Bad example</div>

                <CopyBlock
                    language={"html"}
                    text={ex["exTag12"]}
                    showLineNumbers={true}
                    theme={googlecode}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Attributes);
