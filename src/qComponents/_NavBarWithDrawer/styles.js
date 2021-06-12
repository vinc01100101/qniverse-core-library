import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        minHeight: 64,
        "& > div": {
            display: "flex",
            "& > .appbar-logo-container": {
                minWidth: 120,
                width: 120,
                display: "flex",
                alignItems: "center",
                marginRight: 10,
                marginLeft: 60,
            },
        },
        "& > .first-div-in-toolbar": {
            flex: 1,
        },

        "& > .has-searchbar": {
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                justifyContent: "center",
            },
        },
    },
    menuIcon: {
        position: "absolute",
        left: 20,
        top: 7,
        width: 50,
        height: 50,
    },
    navLinks: {
        width: 50,
        height: 50,
        "& > .MuiIconButton-label": {
            color: theme.palette.primary.contrastText,
            display: "flex",
            flexDirection: "column",
            fontSize: 8,
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
    listItemText: {
        textDecoration: "none",
        color: "black",
    },
    footerList: {
        background: theme.palette.primary.main,
        "& svg": {
            color: theme.palette.primary.contrastText,
        },
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
        background: theme.palette.tertiary.main,
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 38,
        width: "100%",
        zIndex: 1,
        "& a": {
            textDecoration: "none",
            color: theme.palette.tertiary.contrastText,
        },
    },
}));
