const { getData } = require('./httpAPI');

// Base URL for future forecast
const forecastBaseUrl = 'http://api.weatherbit.io/v2.0/forecast/daily/';
// Base URL for current forecast
const currentBaseUrl = 'http://api.weatherbit.io/v2.0/current';

const getCurrentWeather = async (lat, lon) => {
    const result = await getData(`${currentBaseUrl}?key=${process.env.WEATHERBIT_API_KEY}&lat=${lat}&lon=${lon}`);
    const firstResult = result.data[0];
    return {
        'temp': firstResult.temp,
        'app_temp': firstResult.app_temp,
        'description': firstResult.weather.description,
    }
}

const getForecastWeather = async (lat, lon) => {
    const result = await getData(`${forecastBaseUrl}?key=${process.env.WEATHERBIT_API_KEY}&lat=${lat}&lon=${lon}`);
    // Get latest day of the forecast
    const forecast = result.data[15];
    return {
        'temp': forecast.temp,
        // Calculate average apparent temp to match current weather result
        'app_temp': ((forecast.app_max_temp + forecast.app_min_temp)/2),
        'description': forecast.weather.description,
    }
}

module.exports = { getCurrentWeather, getForecastWeather };