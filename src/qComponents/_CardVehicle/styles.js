import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        height: "100%",
        position: "relative",
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
        height: "3.1rem",
        display: "block",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        overflow: "hidden",
        lineHeight: "1.6rem",
    },
    price: {color: "#ff932c"},
    image: {
        "&>div": {
            paddingBottom: "75% !important",
        },
    },
    gridItems: {
        fontSize: "0.7rem",
        lineHeight: 2,
        "& svg": {
            marginRight: 5,
        },
    },
    cardActions: {
        justifyContent: "space-between",
        borderTop: "1px solid #e5e5e5",
        minHeight: 40,
        position: "relative",
        bottom: "0px",
        width: "100%",
    },

    buyNowFlag: {
        display: "flex",
        color: theme.palette.primary.main,
        fontSize: 12,
        alignItems: "center",
    },
}));
