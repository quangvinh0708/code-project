import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import React, { useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { connect, useSelector } from "react-redux";
import { updateCode } from "../actions/code";
import cs from "classnames";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    codeBlock: {
        overflowY: `visible !important`,
        height: `300px !important`,
    },
    edit: {
        height: `39px !important`,
        // "&.collapsed .CodeMirror-scroll": {
        //     position: `absolute !important`,
        //     overflow: `hidden !important`,
        // },
    },
}));

const Code = (props) => {
    const {
        language,
        displayName,
        value,
        onChange,
        color,
        pro,
        updateCodeCreator,
        q,
    } = props;
    const [open, setOpen] = useState(true);

    function handleChange(editor, data, value) {
        onChange(value);
    }

    const status = useSelector((state) => state.view.status);
    const classes = useStyles();

    return (
        <div
            className={cs(`editor-container ${open ? "" : "collapsed"}`, {
                [classes.edit]: open === false && status === true,
            })}
        >
            <div className="editor-title" style={{ color, fontWeight: 650 }}>
                {displayName}
                <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => {
                        setOpen((prevOpen) => !prevOpen);
                    }}
                >
                    <FontAwesomeIcon
                        icon={open ? faCompressAlt : faExpandAlt}
                    />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className={cs("code-mirror-wrapper", {
                    [classes.codeBlock]: status === true,
                })}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: "material",
                    lineNumbers: true,
                    autoCloseBrackets: true,
                    autoCloseTags: true,
                    autoFormat: true,
                    autoCorrect: true,
                }}
            />
        </div>
    );
};

const mapActionsToProps = {
    updateCodeCreator: updateCode,
};

export default connect(null, mapActionsToProps)(Code);
