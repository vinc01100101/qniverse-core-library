const React = require("react");

/**
 * these svg's are referencing from ./sprite.js which is imported in the _app.js
 * just follow the format when adding new svg to the ./sprite.js
 */

exports.linkedIn = (
    <svg width={24} height={24}>
        <use xlinkHref="#logo-linkedin" />
    </svg>
);
exports.youtube = (
    <svg width={24} height={24}>
        <use xlinkHref="#logo-youtube" />
    </svg>
);
exports.facebook = (
    <svg width={24} height={24}>
        <use xlinkHref="#logo-facebook" />
    </svg>
);
exports.instagram = (
    <svg width={24} height={24}>
        <use xlinkHref="#logo-instagram" />
    </svg>
);
exports.telephone = (
    <svg width={32} height={32}>
        <use xlinkHref="#logo-telephone" />
    </svg>
);
exports.viber = (
    <svg width={32} height={34}>
        <use xlinkHref="#logo-viber" />
    </svg>
);
exports.atSign = (
    <svg width={32} height={32}>
        <use xlinkHref="#logo-atsign" />
    </svg>
);
