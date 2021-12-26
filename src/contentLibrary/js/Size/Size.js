import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const Size = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">Size and Scrolling</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">Window sizes and scrolling</div>
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    How do we find the width and height of the browser window?
                </li>
                <li className="list-group-item mt-2">
                    How do we get the full width and height of the document,
                    including the scrolled out part? How do we scroll the page
                    using JavaScript?
                </li>
                <li className="list-group-item mt-2">
                    For this type of information, we can use the root document
                    element document.documentElement, that corresponds to the{" "}
                    {`<html>`} tag. But there are additional methods and
                    peculiarities to consider.
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
            <div className="h4 title mt-5">Width/height of the window</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                To get window width and height, we can use the
                clientWidth/clientHeight of document.documentElement:
            </nav>
            <img
                className="mt-4"
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/269570528_3219617801659277_1645698121917421024_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=YQCS2jrmeMEAX8tJhYy&_nc_ht=scontent.fdad3-4.fna&oh=03_AVKT7QyLTp4eXAo4B3DZ_pg8S624PVP4dDawoaOu5l7zpw&oe=61EE6500"
                alt=""
            />
            <nav className="breadcrumb mt-3">
                For instance, this button shows the height of your window:
            </nav>
            <nav className="breadcrumb mt-3">
                <b>
                    Browsers also support properties like
                    window.innerWidth/innerHeight. They look like what we want,
                    so why not to use them instead?
                </b>
            </nav>
            <nav className="breadcrumb mt-3">
                <b>
                    If there exists a scrollbar, and it occupies some space,
                    clientWidth/clientHeight provide the width/height without it
                    (subtract it). In other words, they return the width/height
                    of the visible part of the document, available for the
                    content.
                </b>
            </nav>
            <div className="guide">
                window.innerWidth/innerHeight includes the scrollbar.
            </div>
            <div className="guide">
                If there’s a scrollbar, and it occupies some space, then these
                two lines show different values:
            </div>
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
            </div>{" "}
            <nav className=".guide mt-3">
                In most cases, we need the available window width in order to
                draw or position something within scrollbars (if there are any),
                so we should use documentElement.clientHeight/clientWidth.
            </nav>
            <nav className=".guide mt-3">
                Please note: top-level geometry properties may work a little bit
                differently when there’s no {`<!DOCTYPE HTML>`} in HTML. Odd
                things are possible. In modern HTML we should always write
                DOCTYPE.
            </nav>
            <div className="h4 title mt-5">Width/height of the document</div>
            <LineDivider size="small" />
            <div className="guide">
                Theoretically, as the root document element is
                document.documentElement, and it encloses all the content, we
                could measure the document’s full size as
                document.documentElement.scrollWidth/scrollHeight.
            </div>
            <div className="guide">
                But on that element, for the whole page, these properties do not
                work as intended. In Chrome/Safari/Opera, if there’s no scroll,
                then documentElement.scrollHeight may be even less than
                documentElement.clientHeight! Weird, right?
            </div>
            <div className="guide">
                To reliably obtain the full document height, we should take the
                maximum of these properties:
            </div>
            <nav className="breadcrumb mt-3">For example:</nav>
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
            <nav className="breadcrumb mt-3">Get the current scrolls</nav>
            <div className="guide">
                DOM elements have their current scroll state in their
                scrollLeft/scrollTop properties.
            </div>
            <div className="guide">
                For document scroll,
                document.documentElement.scrollLeft/scrollTop works in most
                browsers, except older WebKit-based ones, like Safari (bug
                5991), where we should use document.body instead of
                document.documentElement.
            </div>
            <div className="guide">
                Luckily, we don’t have to remember these peculiarities at all,
                because the scroll is available in the special properties,
                window.pageXOffset/pageYOffset:
            </div>
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
            <div className="guide">These properties are read-only.</div>
            <div className="h4 title mt-5">
                Scrolling: scrollTo, scrollBy, scrollIntoView{" "}
            </div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                To scroll the page with JavaScript, its DOM must be fully built.
            </nav>
            <nav className="breadcrumb mt-3">
                For instance, if we try to scroll the page with a script in{" "}
                {`<head>`}, it won’t work.
            </nav>
            <nav className="breadcrumb mt-3">
                Regular elements can be scrolled by changing
                scrollTop/scrollLeft.
            </nav>
            <nav className="breadcrumb mt-3">
                We can do the same for the page using
                document.documentElement.scrollTop/scrollLeft (except Safari,
                where document.body.scrollTop/Left should be used instead).
            </nav>
            <nav className="breadcrumb mt-3">
                Alternatively, there’s a simpler, universal solution: special
                methods window.scrollBy(x,y) and window.scrollTo(pageX,pageY).
            </nav>
            <div className="h4 title mt-5">
                <div className="h4 title mt-5">scrollIntoView</div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-3">
                For completeness, let’s cover one more method:
                elem.scrollIntoView(top).
            </nav>
            <nav className="breadcrumb mt-3">
                The call to elem.scrollIntoView(top) scrolls the page to make
                elem visible. It has one argument:
            </nav>
            <nav className="breadcrumb mt-3">
                If top=true (that’s the default), then the page will be scrolled
                to make elem appear on the top of the window. The upper edge of
                the element will be aligned with the window top.
            </nav>
            <nav className="breadcrumb mt-3">
                If top=false, then the page scrolls to make elem appear at the
                bottom. The bottom edge of the element will be aligned with the
                window bottom.
            </nav>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(Size);
