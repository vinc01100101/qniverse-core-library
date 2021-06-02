const React = require("react");

const {
    AppBar,
    Toolbar,
    IconButton,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    Divider,
} = require("@material-ui/core");
const {Menu} = require("@material-ui/icons");

//styles
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
                        <ListItem
                            className={classes.logoContainer}
                            onClick={toggleDrawer(false)}
                        >
                            <AnchorElement href="/">
                                <img
                                    src={config.companyLogoSrc}
                                    className={classes.logo}
                                />
                            </AnchorElement>
                        </ListItem>

                        {typeof drawerContent != "undefined" && (
                            <>
                                <ListItem onClick={toggleDrawer(false)}>
                                    {drawerContent}
                                </ListItem>
                                <Divider />
                            </>
                        )}
                        {config.drawerList.map((item, i) => {
                            return (
                                <AnchorElement
                                    key={i}
                                    href={config.links[item][0]}
                                    target={
                                        config.links[item][1]
                                            ? "_blank"
                                            : "_self"
                                    }
                                    onClick={toggleDrawer(false)}
                                >
                                    <ListItem button>
                                        <ListItemText
                                            primary={item}
                                            primaryTypographyProps={{
                                                variant: "body1",
                                            }}
                                            primaryTypographyProps={{
                                                style: {fontWeight: "bold"},
                                            }}
                                        />
                                    </ListItem>
                                </AnchorElement>
                            );
                        })}
                    </List>
                    <List className={classes.footerList}>
                        <ListItem>
                            {logoLinks.map((logoLink, i) => (
                                <IconButton
                                    aria-label={logoLink[2]}
                                    key={i}
                                    href={logoLink[0]}
                                    target="_blank"
                                >
                                    {logoLink[1]}
                                </IconButton>
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
                <Toolbar style={{height: 64}} className={classes.toolbar}>
                    <div>
                        <IconButton
                            aria-label="Menu Button"
                            edge="start"
                            color="inherit"
                            onClick={toggleDrawer(true)}
                        >
                            <Menu />
                        </IconButton>
                        <a
                            aria-label="Home"
                            href="#"
                            className="appbar-logo-container"
                        >
                            <img
                                src={config.companyLogoSrc}
                                className={classes.logo}
                            />
                        </a>
                    </div>
                    <div>
                        {config.navList.map((navName, i) => {
                            const NavIcon = config.navIcons[i];
                            return (
                                <IconButton
                                    key={i}
                                    href={config.links[navName][0]}
                                    target="_blank"
                                    aria-label={navName}
                                    className={classes.navLinks}
                                >
                                    <NavIcon />
                                    {navName}
                                </IconButton>
                            );
                        })}
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar style={{height: 64}} />
            <div className={classes.advertise}>
                <a href={config.advertise.link} target="_blank">
                    {config.advertise.text}
                </a>
            </div>
            <Toolbar />
        </div>
    );
};
