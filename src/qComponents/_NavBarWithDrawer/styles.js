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
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        width: "300px",
        padding: "20px",
    },
}));
