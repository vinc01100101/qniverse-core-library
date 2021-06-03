const React = require("react");
const {ThemeProvider, createMuiTheme} = require("@material-ui/core/styles");
const {CssBaseline} = require("@material-ui/core");
const config = require("../../utils/config");
//svg sprite
const SvgSprite = require("../../svgStore/sprite");

module.exports = function qWrapper({children}) {
    const muiTheme = createMuiTheme(config.theme);
    return (
        <>
            {/* this svg sprite is hidden, images are called in src/svgStore/svgCall.js */}
            <SvgSprite />
            <CssBaseline />
            <ThemeProvider theme={muiTheme}>
                <main>{children}</main>
            </ThemeProvider>
        </>
    );
};
