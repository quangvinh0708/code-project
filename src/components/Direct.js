import { Button } from "@mui/material";
import React from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { HTML_TUTORIALS } from "../common/constants/HTMLconstants";
import { CSS_TUTORIALS } from "../common/constants/CSSconstants";
import { JS_TUTORIALS } from "../common/constants/JSconstants";
import { push } from "connected-react-router";

const Direct = () => {
    // const location = useSelector((state) => state.tutorial.location);
    const dispatch = useDispatch();

    const prevPage = () => {
        const l = window.location.href.toString();
        const tutorialsRoute = HTML_TUTORIALS.concat(
            CSS_TUTORIALS,
            JS_TUTORIALS
        );
        const list = tutorialsRoute
            .map((x) => x.path)
            .filter(
                (lesson) =>
                    l.indexOf(lesson.slice(0, lesson.lastIndexOf("/"))) > 0
            );
        const i = list.findIndex((x) => l.indexOf(x) > 0);
        const url = i - 1 < 0 ? null : list[i - 1];
        return url;
    };
    const prevUrl = prevPage();

    const handlePrevPage = (e) => {
        e.persist();
        dispatch(push(prevUrl));
    };

    const nextPage = () => {
        const l = window.location.href.toString();
        const tutorialsRoute = HTML_TUTORIALS.concat(
            CSS_TUTORIALS,
            JS_TUTORIALS
        );
        const list = tutorialsRoute
            .map((x) => x.path)
            .filter(
                (lesson) =>
                    l.indexOf(lesson.slice(0, lesson.lastIndexOf("/"))) > 0
            );
        const i = list.findIndex((x) => l.indexOf(x) > 0);
        const url = i + 1 === list.length ? null : list[i + 1];
        return url;
    };
    const nextUrl = nextPage();

    const handleNextPage = (e) => {
        e.persist();
        dispatch(push(nextUrl));
    };
    return (
        <div className="d-flex justify-content-around btn-gr">
            <Button
                variant="contained"
                disabled={prevUrl ? false : true}
                sx={{
                    fontSize: `18px`,
                    background: `inherit`,
                    border: prevUrl
                        ? `2px solid #8167a9 !important`
                        : `2px solid #777`,
                    // outline: `1px solid black !important`,
                    color: `#8167a9`,
                    fontWeight: `bold`,
                    zIndex: `992 !important`,
                    "&:hover": { background: `#8167a9`, color: `#fff` },
                    margin: `5px 0px 13px 0px`,
                }}
                size="medium"
                onClick={(e) => handlePrevPage(e)}
                className="button-direct"
            >
                <ArrowBackIosNewIcon
                    sx={{ fontSize: `21px`, margin: `0 5px 0 0` }}
                    className="prev-icon"
                />
                Prev
            </Button>
            <Button
                variant="contained"
                disabled={nextUrl ? false : true}
                sx={{
                    fontSize: `18px`,
                    background: `inherit`,
                    border: nextUrl
                        ? `2px solid #8167a9 !important`
                        : `2px solid #777`,
                    // outline: `1px solid black !important`,
                    color: `#8167a9`,
                    fontWeight: `bold`,
                    zIndex: `992 !important`,
                    "&:hover": { background: `#8167a9`, color: `#fff` },
                    margin: `5px 0px 13px 0px`,
                }}
                size="medium"
                onClick={(e) => handleNextPage(e)}
                className="button-direct"
            >
                Next
                <ArrowForwardIosIcon
                    sx={{ fontSize: `21px`, margin: `0 0 0 5px` }}
                    className="next-icon"
                />
            </Button>
        </div>
    );
};

export default Direct;
