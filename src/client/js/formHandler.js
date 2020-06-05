import { 
    getDestinationData,
    getCurrentWeatherData,
    getForecastWeatherData,
    saveTrip
} from './httpAPI';
import { getDaysLeftFromNow, setTripResultHTMLElement } from './utils';

async function handleSubmit(event) {
    event.preventDefault();

    // Get trip destination input
    const destination = document.getElementById('destination').value;
    // Get trip's start date input
    const startDate = document.getElementById('startDate').value;
    // Get trip's end date input
    const endDate = document.getElementById('endDate').value;

    if (!destination && !startDate && !endDate) {
        //TODO: Set border colors to the empty inputs
        return;
    }
    // TODO: Add input values consistency

    const destinationDataResp = await getDestinationData(destination);
    if (destinationDataResp.ok) {
        // Get destination's latitude and longitude
        // destinationInfo = { name, lat, lon, imageUrl }
        const destinationInfo = destinationDataResp.data;
        const { lat, lon } = destinationInfo;

        // Calculate days left to start the trip
        const daysLeft = getDaysLeftFromNow(startDate);

        // If the trip starts within a week get current weather, if not get forecast (project's letter decision)
        const weatherDataResp = (daysLeft <= 7) ? await getCurrentWeatherData(lat, lon) : await getForecastWeatherData(lat, lon);

        if (weatherDataResp.ok) {
            // weatherInfo = { temp, app_temp, description }
            const weatherInfo = weatherDataResp.data;
            const tripInfo = { destinationInfo, weatherInfo, startDate, endDate };
            console.log(`tripInfo = ${JSON.stringify(tripInfo)}`);
            // Show results
            setTripResultHTMLElement(tripInfo);
            // Save trip in backend
            saveTrip(tripInfo);
        }        
    }    
}

export { handleSubmit };