const styles = (theme) => ({
    background: {
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
        },
        ["@media(max-width:196px)"]: {
            marginTop: `20% !important`,
        },
    },
    alert: {
        ["@media(max-width:500px)"]: {
            width: `100% !important`,
        },
        ["@media(max-width:387px)"]: {
            width: `max-content !important`,
        },
        ["@media(max-width:353px)"]: {
            width: `max-content !important`,
        },
    },
    btn: {
        marginTop: 0,
        fontSize: `16px`,
    },
    login1: {
        width: `45%`,
        ["@media(max-width:850px)"]: {
            width: `auto !important`,
        },
    },
});

export default styles;
