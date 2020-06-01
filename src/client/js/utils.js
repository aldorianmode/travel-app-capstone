// Ref: https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
const getDaysLeftFromNow = (dateStr) => {
    // Date format : '2017-06-01' retrieved from <input type="date"/>
    const dateFormatted = dateStr.replace(/-/g, '/');
    const dateFrom = new Date(dateFormatted);
    const nowDate = new Date();
    const diffTime = Math.abs(nowDate - dateFrom);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
// tripInfo = { destinationInfo, weatherInfo, startDate, endDate }
const setTripResultHTMLElement = (tripInfo) => {
    document.getElementById('result-data__location').textContent = tripInfo.destinationInfo.name;
    document.getElementById('result-data__weather').textContent = tripInfo.weatherInfo.temp;
    document.getElementById('result-data__departure').textContent = tripInfo.startDate;
    document.getElementById('result-data__arrival').textContent = tripInfo.endDate;
    document.getElementById('result-img').src = tripInfo.destinationInfo.imageUrl;

};

export { getDaysLeftFromNow, setTripResultHTMLElement };