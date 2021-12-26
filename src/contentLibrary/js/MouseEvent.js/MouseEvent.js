import { withStyles } from "@mui/styles";
import React from "react";
import Direct from "../../../components/Direct";
import LineDivider from "../../../components/LineDivider";
import { styles } from "../Introduction/styles";
import "../Introduction/Introduction.css";
import { CopyBlock, googlecode } from "react-code-blocks";
import ex from "./example";
import { API, CODE, CODES_ONLINE, SHARE_CODE } from "../../../constant/axios";

const MouseEvent = () => {
    return (
        <div className="container-content">
            <p className="lesson-title">Mouse events</p>
            <Direct />
            <LineDivider size="small" />
            <nav className="breadcrumb my-bread">
                <div className="guide">Mouse events</div>
            </nav>
            <ul className="list-group mt-3">
                <li className="list-group-item mt-2">
                    Please note: such events may come not only from “mouse
                    devices”, but are also from other devices, such as phones
                    and tablets, where they are emulated for compatibility.
                </li>
            </ul>{" "}
            <div className="h4 title mt-5">Mouse event types</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                We’ve already seen some of these events:
            </nav>
            <nav className="breadcrumb mt-3">mousedown/mouseup</nav>
            <nav className="breadcrumb mt-3">
                <b>Mouse button is clicked/released over an element.</b>
            </nav>
            <nav className="breadcrumb mt-3">
                <b>mouseover/mouseout</b>
            </nav>
            <div className="guide">
                Mouse pointer comes over/out from an element.
            </div>
            <div className="guide">mousemove</div>
            <nav className=".guide mt-3">
                Every mouse move over an element triggers that event.
            </nav>
            <nav className=".guide mt-3">click</nav>
            <nav className=".guide mt-3">
                Triggers after mousedown and then mouseup over the same element
                if the left mouse button was used.
            </nav>
            <nav className=".guide mt-3">dblclick</nav>
            <nav className=".guide mt-3">
                Triggers after two clicks on the same element within a short
                timeframe. Rarely used nowadays.
            </nav>
            <nav className=".guide mt-3">contextmenu</nav>
            <nav className=".guide mt-3">
                Triggers when the right mouse button is pressed. There are other
                ways to open a context menu, e.g. using a special keyboard key,
                it triggers in that case also, so it’s not exactly the mouse
                event.
            </nav>
            <nav className=".guide mt-3">
                …There are several other events too, we’ll cover them later.
            </nav>
            <div className="h4 title mt-5">Events order</div>
            <LineDivider size="small" />
            <div className="guide">
                As you can see from the list above, a user action may trigger
                multiple events.
            </div>
            <div className="guide">
                For instance, a left-button click first triggers mousedown, when
                the button is pressed, then mouseup and click when it’s
                released.
            </div>
            <div className="guide">
                In cases when a single action initiates multiple events, their
                order is fixed. That is, the handlers are called in the order
                mousedown → mouseup → click.
            </div>
            <div className="guide">
                Click the button below and you’ll see the events. Try
                double-click too.
            </div>
            <div className="guide">
                On the teststand below all mouse events are logged, and if there
                is more than a 1 second delay between them they are separated by
                a horizontal ruler.
            </div>
            <div className="guide">
                Also we can see the button property that allows to detect the
                mouse button, it’s explained below.
            </div>
            <div className="h4 title mt-5">Mouse button</div>
            <LineDivider size="small" />
            <nav className="breadcrumb mt-3">
                Click-related events always have the button property, which
                allows to get the exact mouse button.
            </nav>
            <nav className="breadcrumb mt-3">
                We usually don’t use it for click and contextmenu events,
                because the former happens only on left-click, and the latter –
                only on right-click.
            </nav>
            <nav className="breadcrumb mt-3">
                From the other hand, mousedown and mouseup handlers may need
                event.button, because these events trigger on any button, so
                button allows to distinguish between “right-mousedown” and
                “left-mousedown”.
            </nav>
            <nav className="breadcrumb mt-3">
                The possible values of event.button are:
            </nav>
            <img
                className="mt-4"
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/265780111_1262933090861457_7740019603984330268_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=P7mIpZPd7XYAX_c--V8&_nc_ht=scontent.fdad3-4.fna&oh=03_AVI8jSS0vKIjySJvh-vP7t72HYWITgFYoVnyP3YCstOx2w&oe=61ED2337"
                alt=""
            />
            <nav className="breadcrumb mt-3">
                Most mouse devices only have the left and right buttons, so
                possible values are 0 or 2. Touch devices also generate similar
                events when one taps on them.
            </nav>
            <nav className="breadcrumb mt-3">
                Also there’s event.buttons property that has all currently
                pressed buttons as an integer, one bit per button. In practice
                this property is very rarely used, you can find details at MDN
                if you ever need it.
            </nav>
            <div className="h4 title mt-5">
                <div className="h4 title mt-5">
                    Coordinates: clientX/Y, pageX/Y
                </div>
                <LineDivider size="small" />
            </div>
            <nav className="breadcrumb mt-3">
                In short, document-relative coordinates pageX/Y are counted from
                the left-upper corner of the document, and do not change when
                the page is scrolled, while clientX/Y are counted from the
                current window left-upper corner. When the page is scrolled,
                they change.
            </nav>
            <nav className="breadcrumb mt-3">
                For instance, if we have a window of the size 500x500, and the
                mouse is in the left-upper corner, then clientX and clientY are
                0, no matter how the page is scrolled.
            </nav>
            <nav className="breadcrumb mt-3">
                And if the mouse is in the center, then clientX and clientY are
                250, no matter what place in the document it is. They are
                similar to position:fixed in that aspect.
            </nav>
            <nav className="breadcrumb mt-3">
                Move the mouse over the input field to see clientX/clientY (the
                example is in the iframe, so coordinates are relative to that
                iframe):
            </nav>
            <Direct />
        </div>
    );
};

export default withStyles(styles)(MouseEvent);
