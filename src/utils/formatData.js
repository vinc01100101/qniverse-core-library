export const beautifyPrice = function (price) {
    // add ₱ and remove .00
    let newPrice = "₱ " + parseFloat(price);
    // format the Price
    return newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const beautifyOdometer = function (odometer) {
    return odometer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " KM";
};

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime.replace("Z", "")) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds,
    };
}

export const initializeClock = function (endtime) {
    const time = getTimeRemaining(endtime);
    let html;
    if (time.days > 0) {
        html = `${time.days} days left`;
    } else if (time.days <= 0 && time.hours > 0) {
        html = `${time.hours} hours left`;
    } else if (time.days <= 0 && time.hours <= 0 && time.minutes > 0) {
        html = `${time.minutes} minutes left`;
    } else {
        html = "Auction Ended";
    }
    return html;
};
