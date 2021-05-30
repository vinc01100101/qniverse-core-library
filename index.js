//qniverse components
const _NavBarWithDrawer = require("./src/qComponents/_NavBarWithDrawer");
const _CardVehicle = require("./src/qComponents/_CardVehicle");
const _QWrapper = require("./src/qComponents/_QWrapper");

//themes
const automart = require("./src/themes/automart");
const motomart = require("./src/themes/motomart");
const sellMyCar = require("./src/themes/sellMyCar");

//utils
const config = require("./src/utils/config");

//material-ui components
const mui = require("@material-ui/core");
const muiStyles = require("@material-ui/core/styles");

module.exports = {
    _NavBarWithDrawer,
    _CardVehicle,
    _QWrapper,
    automart,
    motomart,
    sellMyCar,
    config,
    ...mui,
    ...muiStyles,
};
