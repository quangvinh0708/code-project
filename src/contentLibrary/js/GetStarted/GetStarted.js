import React from "react";
import GoogleLogin from "react-google-login";
import { API_GG } from "../../../constant/axios";

const GetStarted = () => {
    const responseGoogle = (res) => {
        console.log(res);
        sessionStorage.setItem("accessTokenViaGG", res.tokenId);
    };
    const responseFailureGoogle = (res) => {
        console.log("Just failed:", res);
    };
    const check = () => {
        console.log("CHECK!!!");
    };
    const logout = () => {
        const key = "accessTokenViaGoogle";
        console.log(key);
    };
    return (
        <div>
            <GoogleLogin
                clientId={API_GG}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={"single_host_origin"}
            />
        </div>
    );
};

export default GetStarted;
