import React from "react";
//mui
import {
    Card,
    CardActionArea,
    CardContent,
    CardActions,
    Typography,
    Grid,
} from "@material-ui/core";
//mdi-react
import CarShiftPatternIcon from "mdi-react/CarShiftPatternIcon";
import SpeedometerIcon from "mdi-react/SpeedometerIcon";
import FuelIcon from "mdi-react/FuelIcon";
import MapMarkerIcon from "mdi-react/MapMarkerIcon";
import FlashIcon from "mdi-react/FlashIcon";

import useStyles from "./styles";
import {
    beautifyPrice,
    beautifyOdometer,
    initializeClock,
} from "../../utils/formatData";

//package config
import config from "./config";

export default function cardVehicle({
    imageUrl,
    title,
    transmissionType,
    odometer,
    fuelType,
    warehouseLocation,
    expiredAt,
    monthlyAmortization,
    downPayment,
    buyNowPrice,
    bidPrice,
}) {
    const ImageElement = config.imageElement;
    const classes = useStyles();

    const makeGridTypography = (label, i) => (
        <Grid item xs={6} component={Typography} key={i}>
            {label}
        </Grid>
    );

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
                    {monthlyAmortization ? (
                        <>
                            <Typography
                                variant="h6"
                                component="span"
                                className={classes.price}
                            >
                                {beautifyPrice(monthlyAmortization)}/ mo.
                            </Typography>
                            {downPayment && (
                                <Grid container>
                                    {makeGridTypography("DP: ")}
                                    {makeGridTypography(
                                        beautifyPrice(downPayment)
                                    )}
                                </Grid>
                            )}
                            {buyNowPrice && (
                                <Grid container>
                                    {makeGridTypography("Buy Now Price: ")}
                                    {makeGridTypography(
                                        beautifyPrice(buyNowPrice)
                                    )}
                                </Grid>
                            )}
                            {bidPrice && (
                                <Grid container>
                                    {makeGridTypography("Bid Price: ")}
                                    {makeGridTypography(
                                        beautifyPrice(bidPrice)
                                    )}
                                </Grid>
                            )}
                        </>
                    ) : (
                        <Typography
                            variant="h6"
                            component="span"
                            className={classes.price}
                        >
                            {beautifyPrice(buyNowPrice)}
                        </Typography>
                    )}

                    <Grid container className={classes.gridItems}>
                        {[
                            [CarShiftPatternIcon, transmissionType],
                            [SpeedometerIcon, beautifyOdometer(odometer)],
                            [FuelIcon, fuelType],
                            [MapMarkerIcon, warehouseLocation],
                        ].map(([Icon, label], i) => {
                            const newEntry = (
                                <>
                                    <Icon size={12} viewBox="0 0 24 24" />
                                    {label}
                                </>
                            );
                            return makeGridTypography(newEntry, i);
                        })}
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
                                <Typography>Buy Now</Typography>
                            </>
                        )}
                    </div>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
