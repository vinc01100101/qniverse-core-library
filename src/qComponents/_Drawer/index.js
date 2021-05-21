const React = require("react");

const {SwipeableDrawer} = require("@material-ui/core");
const useStyles = require("./styles");

module.exports = function swipeableDrawer({
    children,
    drawerState,
    setDrawerState,
}) {
    const classes = useStyles();
    return (
        <SwipeableDrawer
            anchor="left"
            open={drawerState}
            onOpen={setDrawerState(true)}
            onClose={setDrawerState(false)}
            disableBackdropTransition
            disableDiscovery
            disableSwipeToOpen
            transitionDuration={{enter: 400, exit: 400}}
        >
            <div className={classes.drawerContainer}>{children}</div>
        </SwipeableDrawer>
    );
};
