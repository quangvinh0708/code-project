import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCode } from "../actions/code";

const GetCode = ({ q, getCodeCreator }) => {
    setTimeout(() => {
        getCodeCreator(q);
    }, []);

    return <div></div>;
};

export default connect(null, { getCodeCreator: getCode })(GetCode);
