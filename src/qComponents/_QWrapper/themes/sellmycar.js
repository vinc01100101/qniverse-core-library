const createBreakpoints =
    require("@material-ui/core/styles/createBreakpoints").default;
const breakpoints = createBreakpoints({});

module.exports = {
    palette: {
        primary: {
            light: "#7eb875",
            main: "#6FA269",
            dark: "#628f5b",
            contrastText: "#fff",
            background: "rgba(255,147,44,.6)",
        },
        secondary: {
            light: "#9fd497",
            main: "#2A2D4C",
            dark: "#42743d",
            contrastText: "#fff",
        },
    },
};
