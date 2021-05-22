const React = require("react");
const {ThemeProvider, createMuiTheme} = require("@material-ui/core/styles");
const {CssBaseline} = require("@material-ui/core");

module.exports = function qWrapper({children, config}) {
    const muiTheme = createMuiTheme(config.theme);
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
        </>
    );
};
