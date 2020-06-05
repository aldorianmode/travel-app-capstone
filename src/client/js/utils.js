// Ref: https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
const getDaysLeftFromNow = (dateStr) => {
    // Date format : '2017-06-01' retrieved from <input type="date"/>
    const dateFormatted = dateStr.replace(/-/g, '/');
    const dateFrom = new Date(dateFormatted);
    const nowDate = new Date();
    const diffTime = Math.abs(nowDate - dateFrom);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const getDaysBetweenDates = (dateA, dateB) => {
    const daysLeftFromNowA = getDaysLeftFromNow(dateA);
    const daysLeftFromNowB = getDaysLeftFromNow(dateB);
    return Math.abs(daysLeftFromNowA - daysLeftFromNowB);
};

// tripInfo = { destinationInfo, weatherInfo, startDate, endDate }
const setTripResultHTMLElement = (tripInfo) => {
    const daysLeft = getDaysLeftFromNow(tripInfo.startDate);
    const tripLength = getDaysBetweenDates(tripInfo.startDate, tripInfo.endDate);
    document.getElementById('resultLocationName').textContent = tripInfo.destinationInfo.name;
    document.getElementById('resultDepartureDate').textContent = tripInfo.startDate;
    document.getElementById('resultDepartureDaysLeft').textContent = daysLeft;
    document.getElementById('resultArrivalDate').textContent = tripInfo.endDate;
    document.getElementById('resultTripLength').textContent = tripLength;
    document.getElementById('resultWeatherTemp').textContent = tripInfo.weatherInfo.temp;
    document.getElementById('resultWeatherAppTemp').textContent = tripInfo.weatherInfo.app_temp;
    document.getElementById('resultWeatherDescription').textContent = tripInfo.weatherInfo.description;
    if (tripInfo.destinationInfo.imageUrl) {
        document.getElementById('resultImg').src = tripInfo.destinationInfo.imageUrl;
    }
};

export { getDaysLeftFromNow, setTripResultHTMLElement };