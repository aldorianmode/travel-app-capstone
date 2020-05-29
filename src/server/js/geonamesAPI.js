const { getData } = require('./httpAPI');

const baseUrl = 'http://api.geonames.org/';

const getDestinationInfo = async (destinationName) => {
    const result = getData(`${baseUrl}searchJSON?username=${process.env.GEONAMES_USR}&name_startsWith=${destinationName}&maxRows=10`);
    const firstResult = result.geonames[0];
    return {
        'name': firstResult.name,
        'lat': firstResult.lat,
        'lng': firstResult.lng,
    };
};

module.exports = { getDestinationInfo };