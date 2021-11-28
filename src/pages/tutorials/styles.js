const styles = (theme) => ({
    container: {
        display: `flex`,
        flexDirection: `row`,
        minHeight: `100vh`,
        marginTop: 69,
        ["@media(max-width:353px)"]: {
            position: `relative !important`,
            width: `100% !important`,
        },
    },
    content: {
        width: `100%`,
        padding: 10,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp, // sharp or entering
            duration: theme.transitions.duration.enteringScreen,
        }),
        ["@media(max-width:1500px)"]: {
            position: `relative !important`,
            width: `100%`,
            marginLeft: `200px`,
        },
        ["@media(max-width:500px)"]: {
            position: `relative !important`,
            width: `100%`,
            marginLeft: `0px !important`,
        },
        ["@media(max-width:353px)"]: {
            position: `relative !important`,
            width: `100%`,
            marginLeft: `0px !important`,
        },
        ["@media(max-width:550px)"]: {
            margin: 0,
        },
        ["@media(max-width:550px)"]: {
            position: `relative !important`,
            width: `100%`,
            marginLeft: 0,
        },
    },
    turnLeft: {
        marginLeft: -200,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ["@media(max-width:1500px)"]: {
            marginLeft: `0 !important`,
        },
        ["@media(max-width:500px)"]: {
            marginLeft: `0 !important`,
        },
        ["@media(max-width:353px)"]: {
            marginLeft: `0 !important`,
        },
        ["@media(max-width:550px)"]: {
            marginLeft: `0 !important`,
        },
    },
});

export default styles;
