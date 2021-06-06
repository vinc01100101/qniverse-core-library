import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

export default {
    palette: {
        primary: {
            light: "#1d1f35",
            main: "#2a2d4c",
            dark: "#54576f",
            contrastText: "#fff",
        },
        secondary: {
            light: "#b2661e",
            main: "#ff932c",
            dark: "#ffa856",
            contrastText: "#fff",
            background: "rgba(255,147,44,.6)",
        },
        tertiary: {
            light: "#476587",
            main: "#6691c1",
            dark: "#84a7cd",
            contrastText: "#000",
        },
        white: {
            light: "#af8406",
            main: "#ffffff",
            dark: "#fbca3a",
            contrastText: "#fff",
        },
        dark: {
            light: "#191919",
            main: "#242424",
            dark: "#000000",
            contrastText: "#fff",
        },
    },
    typography: {
        fontFamily: ["Ubuntu"],
    },
};
