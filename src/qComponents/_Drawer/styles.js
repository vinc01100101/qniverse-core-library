const {makeStyles} = require("@material-ui/core/styles");

module.exports = makeStyles((theme) => {
    return {
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
    };
});
