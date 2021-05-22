const React = require("react");
const {
    _CardVehicle,
    mui: {Grid},
} = require("../../index");

module.exports = function CardGrid() {
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

    return (
        <Grid container>
            <Grid item xs={6} md={3}>
                <_CardVehicle {...e} />
            </Grid>
            <Grid item xs={6} md={3}>
                <_CardVehicle {...e} />
            </Grid>
            <Grid item xs={6} md={3}>
                <_CardVehicle {...e} />
            </Grid>
            <Grid item xs={6} md={3}>
                <_CardVehicle {...e} />
            </Grid>
        </Grid>
    );
};
