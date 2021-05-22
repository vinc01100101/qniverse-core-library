const React = require("react");

const {
    AppBar,
    Toolbar,
    Grid,
    IconButton,
    SwipeableDrawer,
} = require("@material-ui/core");
const {Menu} = require("@material-ui/icons");

const useStyles = require("./styles");

module.exports = function navBar({logoSrc, drawerContent}) {
    const classes = useStyles();
    const [drawerState, setDrawerState] = React.useState(false);

    const toggleDrawer = (isOpen) => (event) => {
        setDrawerState(isOpen);
    };
    return (
        <div>
            <SwipeableDrawer
                anchor="left"
                open={drawerState}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
                disableBackdropTransition
                disableDiscovery
                disableSwipeToOpen
                transitionDuration={{appear: 500, enter: 500, exit: 500}}
            >
                <div className={classes.drawerContainer}>{drawerContent}</div>
            </SwipeableDrawer>
            <AppBar>
                <Toolbar>
                    <Grid container wrap="nowrap">
                        <Grid item xs={1} className={classes.gridMenu}>
                            <IconButton
                                aria-label="Menu Button"
                                edge="start"
                                color="inherit"
                                onClick={toggleDrawer(true)}
                            >
                                <Menu />
                            </IconButton>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sm={4}
                            container
                            className={classes.gridTitle}
                            alignItems="center"
                        >
                            <a aria-label="Home" href="#">
                                <img
                                    src={logoSrc}
                                    style={{width: "100%", maxHeight: "100%"}}
                                />
                            </a>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
};
