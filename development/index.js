require("@babel/polyfill");
const React = require("react");
const ReactDOM = require("react-dom");
const {
    _CardVehicle,
    _QWrapper,
    _NavBar,
    _Drawer,
    automart,
    mui: {Button, Drawer, SwipeableDrawer, List, ListItem, Typography},
} = require("../index");

function App() {
    const [drawerState, setDrawerState] = React.useState(false);

    const toggleDrawer = (isOpen) => (event) => {
        setDrawerState(isOpen);
    };
    const Image = (props) => <img {...props} />;
    const e = {
        imageUrl: "dist/sampleCar.jpg",
        title: "Sample Car",
        price: 1000000,
        transmissionType: "MT",
        odometer: 3000,
        fuelType: "Gas",
        warehouseLocation: "Cebu City",
        expiredAt: "2021-09-07T09:22:18.000Z",
        buyNowPrice: "3000000",
        NextImage: Image,
    };
    const config = {
        theme: automart,
    };

    return (
        <>
            <_QWrapper config={config}>
                <_NavBar setDrawerState={toggleDrawer} />
                <_Drawer
                    drawerState={drawerState}
                    setDrawerState={toggleDrawer}
                    SlideProps={{
                        timeout: {appear: 500, enter: 500, exit: 500},
                    }}
                >
                    <List>
                        <ListItem>
                            <Typography>
                                <a href="tel:+63963 188 2087">
                                    Call us: +63963 188 2087
                                </a>
                            </Typography>
                        </ListItem>
                    </List>
                </_Drawer>

                <h1>Hello From REACT!!</h1>
                <_CardVehicle {...e} />
                <Button variant="contained">Button</Button>
            </_QWrapper>
        </>
    );
}

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
