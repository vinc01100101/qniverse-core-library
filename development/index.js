require("@babel/polyfill");
const React = require("react");
const ReactDOM = require("react-dom");
const {
    _QWrapper,
    _NavBarWithDrawer,
    automart,
    Button, List, ListItem, Typography, Grid
} = require("../index");

const CardGrid = require("./devSrc/CardGrid");
function App() {
    const config = {
        theme: automart,
    };
    const drawerContent = (
        <List>
            <ListItem>
                <Typography>
                    <a href="tel:+63963 188 2087">Call us: +63963 188 2087</a>
                </Typography>
            </ListItem>
        </List>
    );

    return (
        <>
            <_QWrapper config={config}>
                <_NavBarWithDrawer
                    drawerContent={drawerContent}
                    logoSrc="dist/Automart_Logo.svg"
                />

                <h1>Hello From REACT!!</h1>
                <Button variant="contained" color="primary">
                    Button
                </Button>
                <CardGrid />
            </_QWrapper>
        </>
    );
}

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
