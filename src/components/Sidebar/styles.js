const styles = (theme) => ({
    objStyleLinkActive: {
        textDecoration: `none !important`,
        color: "#fff !important",
        background: `#8167a9`,
        "&:hover": {
            background: `rgba(129, 103, 189, 88%)`,
            textDecoration: `none !important`,
        },
        // textAlign: `center`,
    },
    objStyleLink: {
        textDecoration: `none !important`,
        color: "#8167a9 !important",
        "&:hover": {
            background: `rgba(129, 103, 189, 87%)`,
            textDecoration: `none !important`,
            color: `#fff !important`,
        },
        // textAlign: `center`,
    },
    drawerPaper: {
        "& .MuiDrawer-paper": {
            // background: `rgba(255, 255, 255, 0.2)`,
            // backgroundImage: `url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg")`,
            backgroundPosition: `center`,
            backgroundRepeat: `repeat`,
            backgroundSize: `0.1%,`,

            position: "relative",
            boxSizing: "border-box",
            width: 200,
            maxWidth: 200,
            zIndex: 999,
            minHeight: `100%`,
            height: `400px`,
            // overflowY: `visible`
            overflowY: `scroll`,
        },
    },
    link: {
        display: `block`,
        textDecoration: `none !important`,
        color: `#8167a9 !important`,
        // textAlign: `center`,
        // margin: `auto`,
    },
});

export default styles;
