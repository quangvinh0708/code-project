const styles = () => ({
    contain: {
        position: "relative",
        // top: `59%`,
        // left: `50%`,
        // transform: `translate(-50%, -50%)`,
        maxWidth: "100%",
        margin: `auto`,
        height: `100%`,
        zIndex: 99,
        padding: 40,
        display: `flex`,
        // alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
        marginTop: `-1.5%`,
        ["@media(max-width:787px)"]: {
            marginTop: `2.5% !important`,
            width: "100%",
            display: `flex`,
            flexDirection: `column`,
        },
        // ["@media(max-width:980px)"]: {
        //     marginTop: `5% !important`,
        //     width: "70%",
        // },
        // ["@media(max-width:700px)"]: {
        //     marginTop: `5% !important`,
        //     width: "90%",
        // },
        // ["@media(max-width:500px)"]: {
        //     marginTop: `5% !important`,
        //     width: "100%",
        // },
        // ["@media(max-width:387px)"]: {
        //     marginTop: `12% !important`,
        //     width: "100%",
        // },
        // ["@media(max-width:353px)"]: {
        //     marginTop: `17% !important`,
        //     width: "100%",
        // },
        // ["@media(max-width:196px)"]: {
        //     marginTop: `20% !important`,
        //     width: "100%",
        // },
    },
    imageBox: {
        width: `100%`,
    },
    labelImage: {
        width: `100%`,
    },
    cardProfile: {
        width: `100%`,
        border: `1px solid #000`,
        // height: `auto`
    },
    title: {
        borderBottom: `1px solid #000`,
        fontWeight: `525`,
        fontFamily: `Poppins`,
    },
    left: {
        // marginRight: `5px`,
        borderRight: `1px solid #000`,
        margin: 0,
        padding: 0,
    },
    right: {
        // float: `left`,
    },
    profile: {
        width: `100%`,
        display: `flex`,
        // flexDirection: `column`
        // height: `400px`,
        ["@media(max-width:787px)"]: {
            marginTop: `5% !important`,
            width: "100%",
            display: `flex`,
            flexDirection: `column`,
        },
    },
    avatar: {
        width: `89%`,
        margin: `auto`,
        padding: `12px 0 0 0px`,
        // height: `350px !important`,
        height: `420px !important`,
        ["@media(max-width:500px)"]: {
            width: "100%",
            // height: `auto`,
        },
        // height: `auto !important`,

        // height: `auto`,
        // height: `300px`,
    },
    field: {
        // display: `flex`,
    },
    textInfo: {
        width: `89%`,
        margin: `auto`,
        marginTop: `5px !important`,
        fontWeight: `520`,
        // float: `right`,
    },
});

export default styles;
