const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { getDestinationInfo } = require('./js/geonamesAPI');

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

// Routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send({'mock': 'test'});
})

app.get('/getDestinationData', async (req, res) => {
    const destinationName = req.body.destinationName;
    const destinationInfo = await getDestinationInfo(destinationName);
    res.send(destinationInfo);
})

// Setup Server
app.listen(8081, () => (console.log("Running server!")));