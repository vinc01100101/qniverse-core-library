const {makeStyles} = require("@material-ui/core/styles");

module.exports = makeStyles((theme) => ({
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
    // gridItem: {
    //     flexFlow: "row",
    //     fontSize: "0.7rem",
    //     lineHeight: 2,
    //     "&>svg": {
    //         marginRight: 5,
    //     },
    // },
    cardActions: {
        justifyContent: "space-between",
        borderTop: "1px solid #e5e5e5",
        minHeight: 40,
        position: "relative",
        bottom: "0px",
        width: "100%",
    },
    // button: {
    //     borderRadius: 0,
    //     height: 20,
    //     "& > span.MuiButton-label": {
    //         fontSize: "0.6rem",
    //     },
    // },
    // cardDescriptionTable: {
    //     width: "100%",
    // },

    // cardDescription: {
    //     minHeight: 60,
    //     "& > tr > td": {
    //         color: "#707070",
    //         letterSpacing: "initial",
    //         // lineHeight: '1rem',
    //         fontSize: 11,
    //         padding: 0,
    //         borderBottom: "initial",
    //         [theme.breakpoints.down("sm")]: {
    //             fontSize: "0.6rem",
    //         },
    //         "& > svg": {
    //             verticalAlign: "text-top",
    //             marginRight: 3,
    //             color: "#242424",
    //         },
    //     },
    // },
    buyNowFlag: {
        display: "flex",
        color: theme.palette.primary.main,
        fontSize: 12,
        alignItems: "center",
    },
}));
