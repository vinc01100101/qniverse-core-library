import React from "react";

import {
    AppBar,
    Toolbar,
    IconButton,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    Divider,
    Hidden,
} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

//styles
import useStyles from "./styles";
//package config
import config from "./config";
//svg's
import {facebook, instagram, linkedIn, youtube} from "../../svgStore/svgCall";

export default function navBarWithDrawer({drawerContent, SearchBar}) {
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

    const MenuIcon = () => (
        <IconButton
            className={classes.menuIcon}
            aria-label="Menu Button"
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
        >
            <Menu />
        </IconButton>
    );

    const navList = config.navList.map((navName, i) => {
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
    });
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
                                    className={classes.listItemText}
                                >
                                    <ListItem button>
                                        <ListItemText
                                            primary={item}
                                            primaryTypographyProps={{
                                                variant: "body2",
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
                            <Typography
                                variant="body2"
                                className={classes.copyRight}
                            >
                                {config.copyrightText}
                                <br />
                                All rights reserved
                            </Typography>
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
            <AppBar>
                <Toolbar
                    className={`${classes.toolbar} ${
                        SearchBar ? classes.hasSearchbarToolbar : ""
                    }`}
                    disableGutters
                >
                    <div
                        className={`first-div-in-toolbar${
                            SearchBar ? " has-searchbar" : ""
                        }`}
                    >
                        {SearchBar ? (
                            <Hidden smDown>
                                <MenuIcon />
                            </Hidden>
                        ) : (
                            <MenuIcon />
                        )}

                        <AnchorElement
                            aria-label="Home"
                            href="/"
                            className={`appbar-logo-container${
                                SearchBar ? " has-searchbar-img" : ""
                            }`}
                        >
                            <img
                                src={config.companyLogoSrc}
                                className={classes.logo}
                            />
                        </AnchorElement>
                        {SearchBar && (
                            <Hidden smDown>
                                <SearchBar />
                            </Hidden>
                        )}
                    </div>
                    <div>
                        {SearchBar ? (
                            <Hidden smDown>{navList}</Hidden>
                        ) : (
                            navList
                        )}
                    </div>
                </Toolbar>
                {SearchBar && (
                    <Hidden smUp>
                        <Toolbar>
                            <MenuIcon />
                            <div style={{width: 50}} />
                            <SearchBar />
                        </Toolbar>
                    </Hidden>
                )}
            </AppBar>
            <Toolbar className={classes.toolbar} disableGutters />
            {/* <div className={classes.advertise}>
                <a href={config.advertise.link} target="_blank">
                    {config.advertise.text}
                </a>
            </div>
            <Toolbar /> */}
        </div>
    );
}
