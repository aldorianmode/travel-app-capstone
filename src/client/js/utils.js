// Ref: https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
const getDaysLeftFromNow = (dateStr) => {
    // Date format : '2017-06-01' retrieved from <input type="date"/>
    const dateFormatted = dateStr.replace(/-/g, '/');
    const dateFrom = new Date(dateFormatted);
    const nowDate = new Date();
    const diffTime = Math.abs(nowDate - dateFrom);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export { getDaysLeftFromNow };