const {makeStyles} = require("@material-ui/core/styles");

module.exports = makeStyles((theme) => ({
    gridMenu: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    gridTitle: {
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
            justifyContent: "flex-start",
        },
        "& > a": {
            display: "flex",
            justifyContent: "center",
        },
    },
    drawerContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        background: "white",
        width: "300px",
        padding: "20px",
    },
    footerList: {
        background: theme.palette.primary.main,
    },
    anchor: {
        textDecoration: "none",
        color: "black",
    },
    logo: {
        width: "100%",
    },

    logoContainer: {
        width: "100%",
        background: theme.palette.primary.main,
    },
    copyRight: {
        color: theme.palette.primary.contrastText,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "18px",
        opacity: "0.5",
    },
}));
