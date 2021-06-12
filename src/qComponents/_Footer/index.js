import React from "react";

import {IconButton, Container, Typography, Divider} from "@material-ui/core";
//styles
import useStyles from "./styles";
//package config
import config from "./config";
//svg's
import {facebook, instagram, linkedIn, youtube} from "../../svgStore/svgCall";

export default function _footer() {
    const classes = useStyles();
    const Image = config.imageElement;
    const Anchor = config.anchorElement;
    //reassign to an array
    const logoLinks = [
        [config.links.facebook, facebook, "Facebook"],
        [config.links.instagram, instagram, "Instagram"],
        [config.links.youtube, youtube, "YouTube"],
        [config.links.linkedIn, linkedIn, "Linked In"],
    ];
    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <div className={classes.linksSection}>
                    <Anchor href="/">
                        <Image
                            src={config.companyLogoSrc}
                            style={{width: 120}}
                            width={120}
                            height={30}
                            layout="fixed"
                        />
                    </Anchor>
                    <div className={classes.linkTexts}>
                        {config.footerList.map((item, i) => {
                            return (
                                <Anchor
                                    key={i}
                                    href={config.links[item][0]}
                                    target={
                                        config.links[item][1]
                                            ? "_blank"
                                            : "_self"
                                    }
                                >
                                    <Typography variant="body2" align="center">
                                        {item}
                                    </Typography>
                                </Anchor>
                            );
                        })}
                    </div>
                    <div>
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
                    </div>
                    <Divider />
                    <Typography align="center" variant="body2">
                        {config.copyrightText}
                        <br />
                        All rights reserved
                    </Typography>
                </div>
            </Container>
        </div>
    );
}
