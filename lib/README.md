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
import _Wrapper from "@qniverse/core/_Wrapper";
import _NavBarWithDrawer from "@qniverse/core/_NavBarWithDrawer";
import _Footer from "@qniverse/core/_Footer";
```

Inside the `_Wrapper` module are the [CssBaseLine](https://material-ui.com/components/css-baseline/) and [ThemeProvider](https://material-ui.com/styles/api/#themeprovider) which sets the App's theme automatically by wrapping the whole App components.

Sample code:

```javascript
<_Wrapper>
    <_NavBarWithDrawer drawerContent={DrawerUser()} SearchBar={SearchBar} />
    <Component {...pageProps} />
    <DynamicLinkFooter />
    <_Footer />
</_Wrapper>
```

We can import `config` to set up all the variables that we need for the App.
(links, theme, drawer items, footer items, etc.)

In the `_app.js`,

```javascript
import _Wrapper from "@qniverse/core/_Wrapper";
import _NavBarWithDrawer from "@qniverse/core/_NavBarWithDrawer";
import _Footer from "@qniverse/core/_Footer";
import motomart from "@qniverse/core/motomart";
import config from "@qniverse/core/config";

import NextImage from "next/image";
import NextLink from "next/link";

import FrequentlyAskedQuestionsIcon from "mdi-react/FrequentlyAskedQuestionsIcon";
import PostOutlineIcon from "mdi-react/PostOutlineIcon";
import FaceAgentIcon from "mdi-react/FaceAgentIcon";

//optional components
import DrawerUser from "@/components/DrawerUser/DrawerUser";
import SearchBar from "@/components/SearchBar/SearchBar";

function MyApp({Component, pageProps}) {
    //theme module
    config.theme = motomart;

    //company logo to be used
    config.companyLogoSrc = "/Company_Logo.png";

    //link hrefs
    config.links = {
        ...config.links,
        Home: ["/"],
        FAQs: ["http://automart.ph/blog/frequently-asked-questions", true],
        Blog: ["http://automart.ph/blog", true],
        Reviews: ["http://automart.ph/reviews", true],
        "Contact Us": ["http://automart.ph/contact-us", true],
        "About Us": ["http://automart.ph/page/about-us", true],
        "Login or Signup": ["https://automart.ph/login", true],
    };

    //drawer button links
    config.drawerList = ["FAQs", "Blog"];

    //footer text links
    config.footerList = [
        "FAQs",
        "Contact Us",
        "Blog",
        "Reviews",
        "Contact Us",
        "About Us",
        "Login or Signup",
    ];

    //navbar button links
    config.navList = ["Blog", "FAQs", "Contact Us"];

    //navbar icon list
    config.navIcons = [
        PostOutlineIcon,
        FrequentlyAskedQuestionsIcon,
        FaceAgentIcon,
    ];

    //image element to be used
    config.imageElement = (props) => <NextImage {...props} />;

    //anchor element to be used
    config.anchorElement = (props) => {
        return (
            <NextLink {...props}>
                <a {...props}>{props.children}</a>
            </NextLink>
        );
    };

    //platform copyright text
    config.copyrightText = "© Copyright 2021, Motomart.Ph";

    return (
        <_Wrapper>
            <_NavBarWithDrawer
                drawerContent={DrawerUser()}
                SearchBar={SearchBar}
            />
            <Component {...pageProps} />
            <DynamicLinkFooter />
            <_Footer />
        </_Wrapper>
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

| QComponent         | Data Props                                                                                                                                                             |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_Wrapper          | N/A                                                                                                                                                                    |
| \_CardVehicle      | (cardLink, imageUrl, title, transmissionType, odometer, fuelType, warehouseLocation, expiredAt, monthlyAmortization, downPayment, buyNowPrice, bidPrice, FavComponent) |
| \_NavBarWithDrawer | (SearchBar, drawerContent)                                                                                                                                             |

---

#

### To Do's

-   [x] NavBar
-   [x] Drawer
-   [x] Vehicle Cards
-   [x] Themes
-   [x] Config
-   [x] Footer
