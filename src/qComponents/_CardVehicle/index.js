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
    cardLink,
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
    FavComponent,
}) {
    const ImageElement = config.imageElement;
    const AnchorElement = config.anchorElement;

    const classes = useStyles();

    const makeGridTypography = (
        label,
        i,
        variant = "body1",
        style = {},
        xs = 5
    ) => (
        <Grid
            item
            xs={xs}
            component={Typography}
            variant={variant}
            key={i}
            style={style}
        >
            {label}
        </Grid>
    );

    return (
        <Card className={classes.root}>
            {FavComponent && <FavComponent />}
            <AnchorElement href={cardLink}>
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
                                    {beautifyPrice(monthlyAmortization)}/mo.
                                </Typography>
                                <div className={classes.installmentTerms}>
                                    {downPayment && (
                                        <>
                                            <Grid container>
                                                {makeGridTypography("DP: ")}
                                                {makeGridTypography(
                                                    beautifyPrice(downPayment),
                                                    undefined,
                                                    undefined,
                                                    {
                                                        whiteSpace: "nowrap",
                                                    }
                                                )}
                                            </Grid>
                                        </>
                                    )}
                                    {buyNowPrice && (
                                        <>
                                            <Grid container>
                                                {makeGridTypography(
                                                    "Buy Now Price: "
                                                )}
                                                {makeGridTypography(
                                                    beautifyPrice(buyNowPrice),
                                                    undefined,
                                                    undefined,
                                                    {
                                                        whiteSpace: "nowrap",
                                                    }
                                                )}
                                            </Grid>
                                        </>
                                    )}
                                    {bidPrice && (
                                        <>
                                            <Grid container>
                                                {makeGridTypography(
                                                    "Bid Price: "
                                                )}
                                                {makeGridTypography(
                                                    beautifyPrice(bidPrice),
                                                    undefined,
                                                    undefined,
                                                    {
                                                        whiteSpace: "nowrap",
                                                    }
                                                )}
                                            </Grid>
                                        </>
                                    )}
                                </div>
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
                                const xs = i % 2 == 0 ? 5 : 7;
                                return makeGridTypography(
                                    newEntry,
                                    i,
                                    "body2",
                                    undefined,
                                    xs
                                );
                            })}
                        </Grid>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Typography component="span">
                            {initializeClock(expiredAt)}
                        </Typography>
                        <div className={classes.buyNowFlag}>
                            {buyNowPrice && (
                                <>
                                    <FlashIcon size={12} viewBox="0 0 24 24" />
                                    <Typography variant="body2">
                                        Buy Now
                                    </Typography>
                                </>
                            )}
                        </div>
                    </CardActions>
                </CardActionArea>
            </AnchorElement>
        </Card>
    );
}
