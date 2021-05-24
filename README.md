# Qniverse Component Library

#### _The core component library for all Qniverse platforms_

#

#

---

### Why do we need this lib?

-   To have uniform styles for all our sites which may help our users to become more familiarized with Qniverse.
-   If we want to change a QComponent style, we just have to change the codes directly from the library instead of running into each platform.
-   Devs friendly (easy to use, less hard-coding.)

---

### Features

-   Includes different color-themes (Automart, Motomart, SMC, ...)
-   Uses [Material-UI](https://material-ui.com/) and some [MDI React](https://www.npmjs.com/package/@mdi/react) as the main source of styling and icons.
-   **QComponents** _(or the components that are built on top of Material-UI, exclusively used for Qniverse sites)_ only requires data-props, and the library will do all the work.
-   All Material-UI components are still available separately for more customizable design.

---

### Installation

```sh
npm i @qniverse/core
```

---

### Usage

**QComponent** names are prefixed with "\_" to make it easier to distinguish between the other components like **React** and **Material-UI**:

```javascript
import {_QWrapper, _NavBarWithDrawer, _CardVehicle} from "@qniverse/core";
```

All [Material-UI components](https://material-ui.com/getting-started/usage/) are available directly from the library:

```javascript
import {Button, AppBar, Drawer, Grid, Hidden} from "@qniverse/core";
```

As well as the [Material-UI style modules](https://material-ui.com/styles/basics/):

```javascript
import {ThemeProvider, createMuiTheme} from "@qniverse/core";
```

Current versions are only meant to be used with the [NextJS](https://nextjs.org/) framework.
(We will remove this dependency in the future.)

Inside the `_QWrapper` module are the [CssBaseLine](https://material-ui.com/components/css-baseline/) and [ThemeProvider](https://material-ui.com/styles/api/#themeprovider) which sets the app automatically. Just pass the config in the `_QWrapper` and use it to wrap the app components.

In the `_app.js`,

```javascript
import {_NavBarWithDrawer, _QWrapper, motomart} from "@qniverse/core";

function MyApp({Component, pageProps}) {
    const config = {
        theme: motomart,
    };
    return (
        <_QWrapper config={config}>
            <_NavBarWithDrawer
                logoSrc="/Automart_Logo.svg"
                drawerContent={"hi from Drawer"}
            />
            <Component {...pageProps} />
        </_QWrapper>
    );
}

export default MyApp;
```

Notice that we `import` a theme `motomart` and define it in the `config` which then will be used by the app.
Current available themes:

-   automart
-   motomart
-   sellmycar

---

#

### QComponents and Props

#

| QComponent         | Data Props                                                                                                              |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| \_QWrapper         | ({theme: [themeModule]})                                                                                                |
| \_CardVehicle      | (imageUrl, title, price, transmissionType, odometer, fuelType, warehouseLocation, expiredAt, buyNowPrice, isNextImage,) |
| \_NavBarWithDrawer | (logoSrc, drawerContent)                                                                                                |

---

#

### To Do's

-   [x] NavBar
-   [x] Drawer
-   [x] Vehicle Cards
-   [x] Themes
-   [ ] Config
-   [ ] Footer
