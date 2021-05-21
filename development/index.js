require("@babel/polyfill");
const React = require("react");
const ReactDOM = require("react-dom");
const {
    _CardVehicle,
    _QWrapper,
    _NavBar,
    mui: {Button},
} = require("../index");
// const QWrapper = (props) => _QWrapper(props);
function App() {
    const Image = (props) => <img {...props} />;
    const e = {
        imageUrl: "/sampleCar.jpg",
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
        themeName: "sellmycar",
    };
    return (
        <>
            <_QWrapper config={config}>
                <_NavBar />
                <h1>Hello From REACT!!</h1>
                {/* {_CardVehicle(e)} */}
                <_CardVehicle {...e} />
                <Button variant="contained">Button</Button>
            </_QWrapper>
        </>
    );
}

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
