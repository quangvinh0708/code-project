import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getShareCode } from "../actions/getShareCode";
import Loading from "./Loading/Loading";

const GetShareCode = ({ match }) => {
    // console.log(match);
    const isLoading = useSelector((state) => state.getShareCode.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShareCode.getShareCodeRequest(match.params.id));
    }, [dispatch, match.params.id]);
    return (
        <Fragment>
            {isLoading ? <Loading /> : <Redirect to="/code"></Redirect>}
        </Fragment>
    );
};

export default GetShareCode;
