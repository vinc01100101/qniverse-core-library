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
        h1: {
            fontFamily: "Ubuntu",
            fontSize: "2.25rem",
            fontWeight: 400,
            color: "#242424",
            lineHeight: "2",
        },
        h2: {
            fontFamily: "Ubuntu",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "#242424",
            lineHeight: "1.5",
        },
        h3: {
            fontFamily: "Ubuntu",
            fontSize: "1.25rem",
            fontWeight: 400,
            color: "#242424",
            lineHeight: "1.5",
        },
        h4: {
            fontFamily: "Ubuntu",
            fontSize: "1.25rem",
            fontWeight: 400,
            color: "#242424",
            lineHeight: "1.5",
        },
        h5: {
            fontFamily: "Ubuntu",
            fontSize: "1.25rem",
            fontWeight: 400,
            color: "#242424",
            lineHeight: "1.6",
        },
        h6: {
            fontFamily: "Ubuntu",
            fontSize: "1.25rem",
            fontWeight: 400,
            color: "#242424",
            lineHeight: "1.6",
        },
        body1: {
            fontFamily: "Ubuntu",
            fontSize: "1rem",
            fontWeight: 400,
            color: "#242424",
            lineHeight: "1.6",
        },
        body2: {
            fontFamily: "tahoma",
            fontSize: "0.894rem",
            fontWeight: 400,
            color: "#242424",
            lineHeight: "1.6",
        },
    },
};
