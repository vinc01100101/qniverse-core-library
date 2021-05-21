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
}));
