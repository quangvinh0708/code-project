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
    },
    alert: {},
    btn: {
        marginTop: 0,
        fontSize: `16px`,
    },
});

export default styles;
