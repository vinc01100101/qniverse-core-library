//qniverse components
const _NavBarWithDrawer = require("./src/qComponents/_NavBarWithDrawer");
const _CardVehicle = require("./src/qComponents/_CardVehicle");
const _QWrapper = require("./src/qComponents/_QWrapper");

//themes
const automart = require("./src/themes/automart");
const motomart = require("./src/themes/motomart");
const sellmycar = require("./src/themes/sellmycar");

//material-ui components
const mui = require("@material-ui/core");
const muiStyles = require("@material-ui/core/styles");

module.exports = {
    _NavBarWithDrawer,
    _CardVehicle,
    _QWrapper,
    automart,
    motomart,
    sellmycar,
    ...mui,
    ...muiStyles,
};