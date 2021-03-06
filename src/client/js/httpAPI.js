const serverBaseUrl = 'http://localhost:8081/';

const getData = async (url='') => { 
    const response = await fetch(url, {
        method: 'GET', 
        mode: 'cors'
    });
    try {
        const ret = { 
            ok : response.ok,
            status : response.status,
        };

        if (response.ok) {
            ret.data = await response.json();
        }
        return ret;
    }
    catch(error) {
        console.log("error", error);
    }
};

const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),       
    });
    try {
        const ret = { 
            ok : response.ok,
            status : response.status,
        };

        if (response.ok &&
            response.headers.has('Content-Type') &&
            response.headers.get('Content-Type') === 'application/json') {

            ret.data = await response.json();
        }
        return ret;
    }
    catch(error) {
        console.log("error", error);
    }
}

const getDestinationData = async (destinationName) => {
    return await getData(`${serverBaseUrl}getDestinationData?destinationName=${destinationName}`);
}

const getCurrentWeatherData = async (lat, lon) => {
    return await getData(`${serverBaseUrl}getCurrentWeatherData?lat=${lat}&lon=${lon}`);
}

const getForecastWeatherData = async (lat, lon) => {
    return await getData(`${serverBaseUrl}getForecastWeatherData?lat=${lat}&lon=${lon}`);
}

const getTrip = async () => {
    return await getData(`${serverBaseUrl}getTrip`);
}

const saveTrip = async (trip) => {
    return await postData(`${serverBaseUrl}saveTrip`, trip);
}

export { 
    getDestinationData,
    getCurrentWeatherData,
    getForecastWeatherData,
    getTrip,
    saveTrip,
};

/*
// Reference: https://openweathermap.org/current#{By ZIP CODE}
const getTemperatureByZipCode = async (zipCode) => {
    const weatherData = await getData(`${baseUrl}?zip=${zipCode}&appid=${openWeatherMapAPIKey}`);
    const temp = weatherData.main.temp;
    // TODO: Add error handling
    return temp;
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Add Event Listener to button[id="generate"]
document.getElementById('generate').addEventListener('click', async (e) => {
    const zipCodeInput =  document.getElementById('zip').value;
    getTemperatureByZipCode(zipCodeInput).then((temp) => {
        const feelingsInput = document.getElementById('feelings').value;
        const data = {
            'temperature': temp,
            'date': newDate,
            'userResponse': feelingsInput, 
        };
        postData('/projectData', data).then(async () => {
            const data = await getData('/projectData');
            document.getElementById('date').textContent = `Date: ${data.date}`;
            document.getElementById('temp').textContent = `Temperature: ${data.temperature}`;
            document.getElementById('content').textContent = `User Response: ${data.userResponse}`;    
        })
    });   
});
*/