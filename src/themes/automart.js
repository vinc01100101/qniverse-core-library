const createBreakpoints =
    require("@material-ui/core/styles/createBreakpoints").default;
const breakpoints = createBreakpoints({});

module.exports = {
    palette: {
        primary: {
            light: "#545678",
            main: "#2A2D4C",
            dark: "#020224",
            contrastText: "#fff",
            background: "rgba(255,147,44,.6)",
        },
        secondary: {
            light: "#9fd497",
            main: "#6691c1",
            dark: "#42743d",
            contrastText: "#fff",
        },
    },
    typography: {},
};
