const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { getDestinationInfo } = require('./js/geonamesAPI');
const { getCurrentWeather, getForecastWeather } = require('./js/weatherBitAPI');
const { getImageUrl } = require('./js/pixabayAPI');

// Config environment
dotenv.config();

// Start up an instance of app
const app = express();
app.use(express.static('dist'))

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Data base object
const tripsDB = [];

// Routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send({'mock': 'test'});
})

app.get('/getDestinationData', async (req, res) => {
    const destinationName = req.query.destinationName;
    const destinationInfo = await getDestinationInfo(destinationName);
    const { imageUrl } = await getImageUrl(destinationName);
    destinationInfo.imageUrl = imageUrl;
    res.send(destinationInfo);
})

app.get('/getCurrentWeatherData', async (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const currWeather = await getCurrentWeather(lat, lon);
    res.send(currWeather);
})

app.get('/getForecastWeatherData', async (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const forcWeather = await getForecastWeather(lat, lon);
    res.send(forcWeather);
})

app.post('/saveTrip', async (req, res) => {
    const trip = req.body;
    tripsDB.push(trip);
    res.status(201).end();
})

app.get('/getTrip', async (req, res) => {
    // TODO: request should contain a trip ID and return the desired one. For now we are only storing one trip
    if (tripsDB.length > 0) {
        const trip = tripsDB[0];
        res.set('Content-Type', 'application/json');
        res.send(trip);
    } else {
        res.sendStatus(404);
    }
})

// Setup Server
app.listen(8081, () => (console.log("Running server!")));