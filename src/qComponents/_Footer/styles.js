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
    },
    linkTexts: {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        "& > a": {
            margin: "5px 20px",
            "& > p": {
                // fontSize: "1rem",
            },
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
}));
