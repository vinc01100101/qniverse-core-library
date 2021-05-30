const React = require("react");

const {
    AppBar,
    Toolbar,
    Grid,
    IconButton,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    Divider,
} = require("@material-ui/core");
const {Menu} = require("@material-ui/icons");

const useStyles = require("./styles");
//package config
const config = require("../../utils/config");
//svg's
const {
    facebook,
    instagram,
    linkedIn,
    youtube,
} = require("../../svgStore/svgCall");

module.exports = function navBarWithDrawer({drawerContent}) {
    //reassign to an array
    const logoLinks = [
        [config.links.facebook, facebook, "Facebook"],
        [config.links.instagram, instagram, "Instagram"],
        [config.links.youtube, youtube, "YouTube"],
        [config.links.linkedIn, linkedIn, "Linked In"],
    ];
    const AnchorElement = config.anchorElement;
    console.log(config.links);

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
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem className={classes.logoContainer}>
                            <AnchorElement href="/">
                                <img
                                    src={config.companyLogoSrc}
                                    className={classes.logo}
                                />
                            </AnchorElement>
                        </ListItem>

                        {typeof drawerContent != "undefined" && (
                            <>
                                <ListItem>{drawerContent}</ListItem>
                                <Divider />
                            </>
                        )}
                        {config.drawerList.map((item, i) => {
                            return (
                                <ListItem button key={i}>
                                    <AnchorElement
                                        href={config.links[item][0]}
                                        target={
                                            config.links[item][1]
                                                ? "_blank"
                                                : "_self"
                                        }
                                        className={classes.anchor}
                                    >
                                        <ListItemText
                                            primary={item}
                                            primaryTypographyProps={{
                                                variant: "h6",
                                            }}
                                        />
                                    </AnchorElement>
                                </ListItem>
                            );
                        })}
                    </List>
                    <List className={classes.footerList}>
                        <ListItem>
                            {logoLinks.map((logoLink, i) => (
                                <a key={i} href={logoLink[0]} target="_blank">
                                    <IconButton aria-label={logoLink[2]}>
                                        {logoLink[1]}
                                    </IconButton>
                                </a>
                            ))}
                        </ListItem>
                        <ListItem>
                            <Typography className={classes.copyRight}>
                                © Copyright 2020, Automart.PH
                                <br />
                                All rights reserved
                            </Typography>
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
            <AppBar style={{height: 64}}>
                <Toolbar style={{height: 64}}>
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
                            <a aria-label="Home" href="#" style={{height: 56}}>
                                <img
                                    src={config.companyLogoSrc}
                                    style={{height: "inherit"}}
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
