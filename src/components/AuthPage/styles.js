const styles = (theme) => ({
    background: {
        position: "absolute",
        top: `52.9%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        width: "100%",
        height: `100%`,
        zIndex: 99,
        padding: 40,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
        flex: `1 0 auto`,
        ["@media(max-width:500px)"]: {
            marginTop: `5% !important`,
        },
        ["@media(max-width:387px)"]: {
            marginTop: `12% !important`,
        },
        ["@media(max-width:353px)"]: {
            marginTop: `17% !important`,
        },
        ["@media(max-width:196px)"]: {
            marginTop: `20% !important`,
        },
    },
    background1: {
        position: "absolute",
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        width: "100%",
        height: `100%`,
        zIndex: 99,
        padding: 40,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
        flex: `1 0 auto`,
        ["@media(max-width:500px)"]: {
            marginTop: `5% !important`,
        },
        ["@media(max-width:387px)"]: {
            marginTop: `12% !important`,
        },
        ["@media(max-width:353px)"]: {
            marginTop: `17% !important`,
            display: `table`,
        },
        ["@media(max-width:196px)"]: {
            marginTop: `20% !important`,
        },
    },
    background2: {
        position: "absolute",
        top: `52.9%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        width: "45.7%",
        height: `100%`,
        zIndex: 99,
        padding: 40,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
        flex: `1 0 auto`,
        ["@media(max-width:980px)"]: {
            marginTop: `5% !important`,
            width: "70%",
        },
        ["@media(max-width:700px)"]: {
            marginTop: `5% !important`,
            width: "90%",
        },
        ["@media(max-width:500px)"]: {
            marginTop: `5% !important`,
            width: "100%",
        },
        ["@media(max-width:387px)"]: {
            marginTop: `12% !important`,
            width: "100%",
        },
        ["@media(max-width:353px)"]: {
            marginTop: `17% !important`,
            width: "100%",
        },
        ["@media(max-width:196px)"]: {
            marginTop: `20% !important`,
            width: "100%",
        },
    },
    alert: {
        ["@media(max-width:500px)"]: {
            width: `100% !important`,
        },
        ["@media(max-width:387px)"]: {
            width: `100% !important`,
        },
        ["@media(max-width:353px)"]: {
            width: `100% !important`,
        },
    },
    btn: {
        marginTop: 0,
        fontSize: `16px`,
    },
    login1: {
        width: `45%`,
        ["@media(max-width:850px)"]: {
            width: `100% !important`,
        },
    },
    link: {
        display: `block`,
        width: `max-content`,
        marginLeft: `auto`,
    },
    link1: {
        // display: `block`,
        // width: `max-content`,
        // textAlign: `center`,
    },
});

export default styles;
