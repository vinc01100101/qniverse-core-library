import React from "react";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
//package config
import config from "./config";
//svg sprite
import SvgSprite from "../../svgStore/sprite";
export default function qWrapper({children}) {
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
}
