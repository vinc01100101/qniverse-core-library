const React = require("react");
const {ThemeProvider, createMuiTheme} = require("@material-ui/core/styles");
const {CssBaseline} = require("@material-ui/core");
const themes = ({automart, motomart, sellmycar} = require("./themes"));
// console.log(themes);
let theme;
module.exports = function qWrapper({children, config}) {
    const [themeConfig, setThemeConfig] = React.useState({});
    const Children = () => children;
    React.useEffect(() => {
        console.log("USE EFFECT");
        const getTheme = async () => {
            console.log("GET THEME");
            try {
                console.log("TRY");
                theme = themes[config.themeName];
                console.log("THEME IS");
                setThemeConfig(theme);
            } catch (e) {
                console.log(e);
                console.warn("Error upon loading a theme.");
            }
        };
        getTheme();
    }, [themeConfig]);

    const muiTheme = createMuiTheme(themeConfig);
    return typeof theme != "undefined" ? (
        <div>
            <CssBaseline />
            <ThemeProvider theme={muiTheme}>
                <Children />
            </ThemeProvider>
        </div>
    ) : (
        <h1>Loading</h1>
    );
};
