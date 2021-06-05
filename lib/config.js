// const React = require("react");
const defaults = {
    theme: require("./motomart"),
    links: {
        automart: "http://automart.ph/",
        motomart: "http://motomart.ph/",
        sellMyCar: "http://sellmycar.automart.ph/sell-my-car",
        facebook: "https://www.facebook.com/automartph/",
        instagram: "https://www.instagram.com/automartph/",
        youtube: "https://www.youtube.com/channel/UCh-uSYHQZPeNMFkIZzBBbDw",
        linkedIn: "https://www.linkedin.com/company/automart-ph/",
        Home: ["/"],
    },

    navList: [],
    navIcons: [],
    drawerList: ["Home"],
    footerList: [],
    advertise: {},
    anchorElement: "empty",
    imageElement: "empty",
};
module.exports = {
    ...defaults,
};
