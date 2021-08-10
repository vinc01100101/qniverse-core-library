import {createMuiTheme} from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();

export default {
    components: {
        // Style sheet name ⚛️
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    whiteSpace: "normal",
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                selectMenu: {
                    whiteSpace: "pre-wrap",
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: "none !important",
                    "&::before": {
                        top: 0,
                    },
                },
            },
        },
        MuiCollapse: {
            styleOverrides: {
                root: {
                    boxShadow: `0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);`,
                },
            },
        },
    },
    palette: {
        primary: {
            light: "#1d9c69",
            main: "#188158",
            dark: "#146e4a",
            contrastText: "#fff",
        },
        secondary: {
            light: "#7eb875",
            main: "#1B8158",
            dark: "#628f5b",
            contrastText: "#fff",
        },
        tertiary: {
            light: "#9fd497",
            main: "#2A2D4C",
            dark: "#42743d",
            contrastText: "#fff",
        },
        white: {
            light: "#9fd497",
            main: "#2A2D4C",
            dark: "#42743d",
            contrastText: "#fff",
        },
        dark: {
            light: "#9fd497",
            main: "#2A2D4C",
            dark: "#42743d",
            contrastText: "#fff",
        },
    },
    typography: {
        fontFamily: `'Source Sans Pro', sans-serif`,
        body1: {
            fontSize: "16px",
            [defaultTheme.breakpoints.up("md")]: {
                fontSize: "18px",
            },
        },
        h5: {
            [defaultTheme.breakpoints.up("md")]: {
                fontWeight: "bold",
            },
        },
    },
};
