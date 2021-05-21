const React = require("react");

const {AppBar, Toolbar, Grid, IconButton} = require("@material-ui/core");
const {Menu} = require("@material-ui/icons");

const useStyles = require("./styles");

module.exports = function navBar({children, logo, setDrawerState}) {
    const classes = useStyles();
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Grid container wrap="nowrap">
                        <Grid item xs={1} className={classes.gridMenu}>
                            <IconButton
                                aria-label="Menu Button"
                                edge="start"
                                color="inherit"
                                onClick={setDrawerState && setDrawerState(true)}
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
                                {logo}
                            </a>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
};
