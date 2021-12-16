import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import parse from "html-react-parser";
import { useState } from "react";
import cs from "classnames";
import { makeStyles } from "@mui/styles";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
    textEdit: {
        marginTop: `3% !important`,
        fontSize: `none`,
        textAlign: `none !important`,
        // width: `95% !important`,
        height: `350px`,
        // maxHeight: `50vh !important`,
        // margin: `auto !important`,
        borderTop: `1px solid #e0e0e0`,
        paddingTop: `9px`,
        overflowY: `auto`,
    },
    yourAnswer: {
        fontSize: `20px`,
        marginBottom: `10px`,
        color: "000",
        fontWeight: `499`,
    },
}));

const Text = (props) => {
    const { title, text, setText } = props;
    const classes = useStyles();

    return (
        <div>
            <div className={cs(classes.textEdit)}>
                <div className={cs(classes.yourAnswer)}>{title}</div>
                <CKEditor
                    editor={ClassicEditor}
                    data={text}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setText(data);
                    }}
                />
            </div>
        </div>
    );
};

export default Text;
