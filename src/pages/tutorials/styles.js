const styles = (theme) => ({
    container: {
        display: `flex`,
        flexDirection: `row`,
        minHeight: `100vh`,
        marginTop: 69,
    },
    content: {
        width: `100%`,
        padding: 10,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp, // sharp or entering
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    turnLeft: {
        marginLeft: -200,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
});

export default styles;
