import { 
    getDestinationData,
    getCurrentWeatherData,
    getForecastWeatherData,
} from './httpAPI';
import { getDaysLeftFromNow } from './utils';

async function handleSubmit(event) {
    event.preventDefault();

    // Get trip destination input
    const destination = document.getElementById('destination').value;
    const destinationInfo = await getDestinationData(destination);

    // Get trip start date input
    const inputDate = document.getElementById('date').value;
    // Calculate days left to start the trip
    const daysLeft = getDaysLeftFromNow(inputDate);
    // Get destination's latitude and longitude
    const { lat, lon } = destinationInfo;
    // If the trip starts within a week get current weather, if not get forecast (project's letter decision)
    const weatherInfo = (daysLeft <= 7) ? await getCurrentWeatherData(lat, lon) : await getForecastWeatherData(lat, lon);
}

export { handleSubmit };