import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Text from "./Text";
import { Alert, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import cs from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { createThread, updateThread } from "../../actions/forum";
import DirectHelper from "../AuthPage/DirectHelper";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles((theme) => ({
    textField: {},
    textEditorContain: {
        marginTop: `-1.5%`,
    },
    notify: {},
    directInAskModal: {
        textAlign: `center`,
    },
}));

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `85%`,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function UpdateAskModal(props) {
    const classes = useStyles();
    const { handleClose, open, question, id } = props;
    const error = useSelector((state) => state.forum.error);
    const isCircleProgress = useSelector(
        (state) => state.forum.isCircleProgress
    );
    const notify = useSelector((state) => state.forum.notify);
    const [text, setText] = React.useState(question.content);
    const [title, setTitle] = React.useState(question.title);

    React.useEffect(() => {
        setText(question.content);
        setTitle(question.title);
    }, [question]);

    const dp = useDispatch();

    const onChange = (e) => {
        setTitle(e.target.value);
    };
    const handleUpdate = () => {
        dp(updateThread.updateThreadRequest({ title, content: text, id }));
    };
    const handleCloseModal = () => {
        handleClose();
        setText(question.content);
        setTitle(question.title);
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: `center !important` }}
                    >
                        Update your question!
                    </Typography>
                    <TextField
                        id="title"
                        label="Title"
                        className={classes.textField}
                        placeholder={"Title"}
                        fullWidth
                        margin="normal"
                        name="Title"
                        value={title}
                        onChange={onChange}
                    />

                    <div className={cs(classes.textEditorContain)}>
                        <Text
                            title={"Your question"}
                            text={text}
                            setText={setText}
                        />
                    </div>
                    {isCircleProgress ? (
                        <Box className={cs(classes.directInAskModal)}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        notify && (
                            <Alert
                                variant="outlined"
                                severity={!error ? "success" : "warning"}
                            >
                                {notify}
                            </Alert>
                        )
                    )}
                    {/* {notify && (
                        <Alert
                            variant="outlined"
                            severity={!error ? "success" : "warning"}
                        >
                            {notify}
                        </Alert>
                    )} */}
                    <div className={cs("mt-2")}>
                        <Button
                            onClick={handleCloseModal}
                            variant="contained"
                            className={cs("mr-2")}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleUpdate} variant="contained">
                            Create
                        </Button>
                    </div>

                    {/* <p>
                        <span style={{ color: error ? "red" : "green" }}>
                            {notify}
                        </span>
                    </p> */}
                </Box>
            </Modal>
        </div>
    );
}
