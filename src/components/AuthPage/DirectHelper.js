// import { push } from "connected-react-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { direct } from "../../actions/direct";
import {
    loginFailed,
    loginSuccess,
    logoutSuccess,
    setErrorLogin,
} from "../../actions/login";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const DirectHelper = () => {
    const time = useSelector((state) => state.direct.time);
    const [timeRun, setTimeRun] = useState(time);
    const dispatch = useDispatch();

    useEffect(() => {
        if (timeRun === 1) {
            setTimeout(() => {
                dispatch(direct.directFailure(false));
                dispatch(setErrorLogin(null));
                // dispatch(push("/identify/user"));
                // console.log("Time here:", timeRun);
            }, 999);
        } else if (timeRun) {
            setTimeout(() => {
                setTimeRun(timeRun - 1);
            }, 1000);
        }
    }, [timeRun, time]);
    // console.log("DirectHelper", timeRun);
    return (
        <div
            style={{
                fontSize: `15px`,
                color: `#000`,
                position: `relative`,
                zIndex: `5000`,
                marginBottom: `8px`,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    display: "inline-flex",
                    top: `10px`,
                }}
            >
                <CircularProgress
                    disableShrink
                    style={{ color: `rgba(189, 142, 186, 70%)` }}
                    // color="secondary"
                />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        sx={{ fontSize: `17px` }}
                        color="text.secondary"
                    >
                        {timeRun !== 0 ? timeRun : ""}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default DirectHelper;
