require("@babel/polyfill");
import React from "react";
import ReactDOM from "react-dom";

import _Wrapper from "../src/qComponents/_Wrapper";
import _NavBarWithDrawer from "../src/qComponents/_NavBarWithDrawer";
import _Footer from "../src/qComponents/_Footer";
import motomart from "../src/themes/motomart";
import config from "../src/utils/config";
import {Button} from "@material-ui/core";

import FrequentlyAskedQuestionsIcon from "mdi-react/FrequentlyAskedQuestionsIcon";
import PostOutlineIcon from "mdi-react/PostOutlineIcon";
import FaceAgentIcon from "mdi-react/FaceAgentIcon";

import CardGrid from "./devSrc/CardGrid";
function App() {
    //IIFE (Immediately Invoked Function Expression)
    (() => {
        config.theme = motomart;
        config.companyLogoSrc = "dist/assets/Automart_Logo.svg";
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
        config.drawerList = ["FAQs", "Contact Us", "Blog"];
        config.footerList = [
            "FAQs",
            "Contact Us",
            "Blog",
            "Reviews",
            "Contact Us",
            "About Us",
            "Login or Signup",
        ];
        config.navList = ["FAQs", "Blog", "Contact Us"];
        config.navIcons = [
            FrequentlyAskedQuestionsIcon,
            PostOutlineIcon,
            FaceAgentIcon,
        ];
        config.advertise = {
            text: "Selling your car? Pabenta? Pasalo? Go to Sell-My-Car.",
            link: "http://automart.ph/",
        };
        config.imageElement = (props) => (
            <img {...props} style={{width: "100%", objectFit: "contain"}} />
        );
        config.anchorElement = (props) => <a {...props} />;
    })();
    console.log(config);
    const drawerContent = "Optional Component Here.";

    return (
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
            />
            <_Wrapper>
                <_NavBarWithDrawer drawerContent={drawerContent} />

                <h1>Hello From REACT</h1>
                <Button color="primary">Sample Button 1</Button>
                <br />
                <br />
                <Button variant="contained" color="primary">
                    Sample Button 2 "contained"
                </Button>
                <br />
                <br />
                <Button variant="outlined" color="primary">
                    Sample Button 3 "outlined"
                </Button>
                <br />
                <br />
                <CardGrid />
                <_Footer />
            </_Wrapper>
        </>
    );
}

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
