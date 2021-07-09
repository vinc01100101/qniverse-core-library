import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: 40,
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "& a": {
            textDecoration: "none",
            color: "inherit",
        },
    },
    divider: {
        margin: "30px 0px",
        background: theme.palette.primary.contrastText,
    },
    linksSection: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > hr": {
            width: "100%",
        },
        "& p": {
            color: theme.palette.primary.contrastText,
        },
        "& > a": {
            minWidth: 150,
            width: 150,
            [theme.breakpoints.up("sm")]: {
                minWidth: 240,
                width: 240,
            },
        },
    },
    linkTexts: {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        "& > a": {
            margin: "5px 20px",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
}));
