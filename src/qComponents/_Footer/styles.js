import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: 40,
        background: theme.palette.primary.main,
        "& a": {
            textDecoration: "none",
            color: theme.palette.primary.contrastText,
        },
    },
    linksSection: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    linkTexts: {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        "& > a": {
            margin: 20,
        },
    },
}));
