import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

export default {
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
        info: {
            light: "#ffb566",
            main: "#ff932c",
            dark: "#d67711",
            contrastText: "#fff",
        },
    },
    typography: {},
};
