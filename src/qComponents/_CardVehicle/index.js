// import NextImage from "next/image";
const React = require("react");
//mui
const {
    Card,
    CardActionArea,
    CardContent,
    CardActions,
    Typography,
    Grid,
} = require("@material-ui/core");
//mdi-react
const CarShiftPatternIcon = require("mdi-react/CarShiftPatternIcon");
const SpeedometerIcon = require("mdi-react/SpeedometerIcon");
const FuelIcon = require("mdi-react/FuelIcon");
const MapMarkerIcon = require("mdi-react/MapMarkerIcon");
const FlashIcon = require("mdi-react/FlashIcon");

const useStyles = require("./styles");
const {
    beautifyPrice,
    beautifyOdometer,
    initializeClock,
} = require("../../utils/formatData");

//package config
const config = require("../../utils/config");

module.exports = function cardVehicle({
    imageUrl,
    title,
    price,
    transmissionType,
    odometer,
    fuelType,
    warehouseLocation,
    expiredAt,
    buyNowPrice,
}) {
    const ImageElement = config.imageElement;

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.mainCardActions}>
                <div className={classes.mediaContainer}>
                    <ImageElement
                        layout="responsive"
                        width={160}
                        height={120}
                        sizes={`
                                (max-width: 250px) 125px,
                                (max-width: 350px) 175px,
                                (max-width: 470px) 235px,
                                (max-width: 942px) 471px,
		                        (max-width: 1261px) 420px,
                                211px`}
                        src={imageUrl}
                    />
                </div>
                <CardContent className={classes.cardContent}>
                    <Typography
                        className={classes.cardTitle}
                        gutterBottom
                        variant="h5"
                        component="span"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        className={classes.price}
                    >
                        {beautifyPrice(price)}
                    </Typography>
                    <Grid container>
                        <Grid item xs={4}>
                            <CarShiftPatternIcon
                                style={{marginRight: 5}}
                                size={12}
                                viewBox="0 0 24 24"
                            />
                            {transmissionType}
                        </Grid>
                        <Grid item xs={8}>
                            <SpeedometerIcon
                                style={{marginRight: 5}}
                                size={12}
                                viewBox="0 0 24 24"
                            />
                            {beautifyOdometer(odometer)}
                        </Grid>
                        <Grid item xs={4}>
                            <FuelIcon
                                style={{marginRight: 5}}
                                size={12}
                                viewBox="0 0 24 24"
                            />
                            {fuelType}
                        </Grid>
                        <Grid item xs={8}>
                            <MapMarkerIcon
                                style={{marginRight: 5}}
                                size={12}
                                viewBox="0 0 24 24"
                            />
                            {warehouseLocation}
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Typography component="span" style={{fontSize: "0.5rem"}}>
                        {initializeClock(expiredAt)}
                    </Typography>
                    <div className={classes.buyNowFlag}>
                        {buyNowPrice && (
                            <>
                                <FlashIcon size={12} viewBox="0 0 24 24" />
                                Buy Now
                            </>
                        )}
                    </div>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};
