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
        ["@media(min-width:1500px)"]: {
            width: `0 !important`,
        },
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
            ["@media(min-width:1500px)"]: {
                width: `200px !important`,
                maxWidth: `200px !important`,
            },
            ["@media(min-width:500px)"]: {
                width: `200px !important`,
                maxWidth: `200px !important`,
            },
            ["@media(min-width:353px)"]: {
                width: `200px !important`,
                maxWidth: `200px !important`,
            },
            ["@media(min-width:550px)"]: {
                position: `absolute !important`,
                width: `187px !important`,
                maxWidth: `187px !important`,
            },
        },
        ["@media(min-width:1500px)"]: {
            zIndex: `1000`,
            height: `100% !important`,
            minHeight: `100% !important`,
        },
        ["@media(min-width:500px)"]: {
            position: `fixed !important`,
            zIndex: `1000`,
            /* min-height: 10000% !important; */
            height: `100% !important`,
            minHeight: `100% !important`,
        },
        ["@media(max-width:353px)"]: {
            position: `fixed !important`,
            zIndex: `1000`,
            /* min-height: 10000% !important; */
            height: `100% !important`,
            minHeight: `100% !important`,
            marginTop: `12px`,
        },
        ["@media(max-width:550px)"]: {
            position: `fixed !important`,
            zIndex: `1000`,
            /* min-height: 10000% !important; */
            height: `100% !important`,
            minHeight: `100% !important`,
            // marginTop: `12px`,
            maxWidth: `0 !important`,
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
