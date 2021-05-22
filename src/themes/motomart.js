const createBreakpoints =
    require("@material-ui/core/styles/createBreakpoints").default;
const breakpoints = createBreakpoints({});

module.exports = {
    palette: {
        primary: {
            light: "#ffc004",
            main: "#fabd09",
            dark: "#e8af04",
            contrastText: "#242424",
            background: "rgba(255,147,44,.6)",
        },
        secondary: {
            light: "#9fd497",
            main: "#809b8a ",
            dark: "#42743d",
            contrastText: "#fff",
        },
    },
};
