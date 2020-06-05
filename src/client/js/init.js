import { handleSubmit } from './formHandler'
import { getTrip } from './httpAPI'
import { setTripResultHTMLElement } from './utils'

async function init() {
    // Add event listener to 'Search' submit button
    document.getElementById('searchSubmit').addEventListener('click', handleSubmit);

    // Get last trip added
    const trip = await getTrip();
    if (trip.ok && trip.data) {
        setTripResultHTMLElement(trip.data);
    }        
};

export { init };