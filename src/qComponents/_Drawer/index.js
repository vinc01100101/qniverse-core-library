const React = require("react");

const {SwipeableDrawer, Button} = require("@material-ui/core");
const useStyles = require("./styles");

module.exports = function swipeableDrawer({
    children,
    drawerState,
    setDrawerState,
    ...props
}) {
    const classes = useStyles();
    const makeDrawerContent = () => (
        <div className={classes.drawerContainer}>{children}</div>
    );

    return (
        <SwipeableDrawer
            anchor="left"
            open={drawerState}
            onOpen={setDrawerState(true)}
            onClose={setDrawerState(false)}
            disableBackdropTransition
            disableDiscovery
            disableSwipeToOpen
            transitionDuration={{appear: 500, enter: 500, exit: 500}}
            {...props}
        >
            {makeDrawerContent()}
        </SwipeableDrawer>
    );
};
