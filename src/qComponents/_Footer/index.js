const React = require("react");

const {IconButton, Container} = require("@material-ui/core");
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

module.exports = function _footer() {
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
                    <Anchor href="#">
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
                                    {item}
                                </Anchor>
                            );
                        })}
                    </div>
                    <div>
                        {logoLinks.map((logoLink, i) => (
                            <a key={i} href={logoLink[0]} target="_blank">
                                <IconButton aria-label={logoLink[2]}>
                                    {logoLink[1]}
                                </IconButton>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};
