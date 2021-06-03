require("@babel/polyfill");
const React = require("react");
const ReactDOM = require("react-dom");
const {
    _QWrapper,
    _NavBarWithDrawer,
    _Footer,
    motomart,
    config,
    Button,
    List,
    ListItem,
    Typography,
    Grid,
} = require("../index");

const FrequentlyAskedQuestionsIcon = require("mdi-react/FrequentlyAskedQuestionsIcon");
const PostOutlineIcon = require("mdi-react/PostOutlineIcon");
const FaceAgentIcon = require("mdi-react/FaceAgentIcon");

//IIFE (Immediately Invoked Function Expression)
(() => {
    config.theme = motomart;
    config.companyLogoSrc = "dist/Automart_Logo.svg";
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
})();

const CardGrid = require("./devSrc/CardGrid");
function App() {
    const drawerContent = "Optional Component Here.";

    return (
        <>
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
                />
            </head>
            <_QWrapper>
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
            </_QWrapper>
        </>
    );
}

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
