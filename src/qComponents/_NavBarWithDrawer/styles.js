const {makeStyles} = require("@material-ui/core/styles");

module.exports = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        "& > div": {
            display: "flex",
            "& > .appbar-logo-container": {
                width: 120,
                display: "flex",
                alignItems: "center",
            },
        },
    },
    navLinks: {
        "& > .MuiIconButton-label": {
            color: theme.palette.primary.contrastText,
            fontSize: 15,
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                flexDirection: "column",
                fontSize: 8,
            },
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
        "& a": {
            textDecoration: "none",
            color: "black",
        },
    },
    footerList: {
        background: theme.palette.primary.main,
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
    advertise: {
        background: theme.palette.secondary.main,
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 38,
        width: "100%",
        zIndex: 1,
        "& a": {
            textDecoration: "none",
            color: theme.palette.secondary.contrastText,
        },
    },
}));
