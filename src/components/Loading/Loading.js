import React, { Fragment, useEffect } from "react";
import DirectHelper from "../AuthPage/DirectHelper";
import "./loading.css";
import { makeStyle } from "@mui/styles";
import { useSelector } from "react-redux";
import { verifyUrlRecover } from "../../actions/direct";

const Loading = () => {
    const isWaiting = useSelector((state) => state.direct.isWaiting);
    const appear = useSelector((state) => state.direct.appear);
    const message = useSelector((state) => state.direct.message);
    useEffect(() => {
        verifyUrlRecover.verifyUrlRecoverRequest(false);
    }, []);
    return (
        <Fragment>
            <div className="contain">
                <h1 data-text="CODE - ONLINE" className="h1-type1">
                    CODE - ONLINE
                </h1>

                {isWaiting && (
                    <h1 data-text="Please wait..." className="h1-type">
                        Please wait...
                    </h1>
                )}

                {!isWaiting && (
                    <div className="server-content">
                        <p
                            className="link-direct link-title"
                            style={{ display: `block !important` }}
                        >
                            Notify
                        </p>
                        <div>
                            <a
                                className="link-direct"
                                style={{ display: "block !important" }}
                            >
                                {/* Your account is now successfully activated. You
                                can now return to the Login */}
                                {message}
                                {appear && <DirectHelper />}
                            </a>
                        </div>
                    </div>
                )}
            </div>
            {/* <div className="contain">
                <div
                    style={{
                        color: `#fff`,
                        width: `92%`,
                        margin: `auto`,
                        fontSize: `20px`,
                        marginTop: `5%`,
                    }}
                >
                   
                </div>
            </div> */}
        </Fragment>
    );
};

export default Loading;
