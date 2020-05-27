import { getData } from './httpAPI';

const baseUrl = 'http://api.geonames.org/';

const getCityInfo = async (cityName) => {
    const result = getData(`${baseUrl}searchJSON?username=${process.env.GEONAMES_USR}&name_startsWith=${name}&maxRows=10`);
    const firstResult = result.geonames[0];
    return {
        'name': firstResult.name,
        'lat': firstResult.lat,
        'lng': firstResult.lng,
    };
};