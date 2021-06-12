import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        height: "100%",
        position: "relative",
        "& a": {
            textDecoration: "none",
            color: "inherit",
        },
    },
    mainCardActions: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    mediaContainer: {
        position: "relative",
        width: "100%",
        "&::before": {
            content: "",
            display: "block",
            marginTop: "-75%",
        },
    },
    cardContent: {
        padding: "0.5rem",
        width: "100%",
        height: "100%",
    },
    cardTitle: {
        fontWeight: 500,
        fontSize: "1.25rem",
        height: "3.1rem",
        display: "block",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        overflow: "hidden",
        lineHeight: "1.6rem",
    },
    price: {color: "rgb(250, 189, 9) !important"},
    image: {
        "& > div": {
            paddingBottom: "75% !important",
        },
    },
    installmentTerms: {
        "& > div > p": {
            fontSize: "0.8rem",
            color: "#707070",
        },
        "& .MuiDivider-vertical": {
            margin: "0px 3px",
        },
    },
    gridItems: {
        lineHeight: 2,
        "& > p": {
            color: "#707070",
            fontSize: "0.7rem",
            [theme.breakpoints.up("md")]: {
                fontSize: "11px",
            },
            "& > svg": {
                marginRight: 5,
                color: "#242424",
            },
        },
    },
    cardActions: {
        justifyContent: "space-between",
        borderTop: "1px solid #e5e5e5",
        minHeight: 40,
        position: "relative",
        bottom: "0px",
        width: "100%",
        "& > span": {
            fontSize: "0.5rem",
        },
    },

    buyNowFlag: {
        display: "flex",
        color: theme.palette.primary.main,
        fontSize: 12,
        alignItems: "center",
        "& > p": {
            color: "#fabd09",
        },
    },
}));
