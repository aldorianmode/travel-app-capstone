# Travel App Project - FEND Capstone

## Overview
This application is intended to group all knowledge learnt in Udacity's Front End Web Developer Nanodegree.
Basic functionality is to add information of your next trip (location, start and end date) while weather information and image from destination
will be retrieved consuming different API's.

## Instructions
### Environment variables configuration
Create `.env` file containing the following environment variables:
* `GEONAMES_USR`
    - GeoNames user. Used to get geographical data from location names to visit in the application (eg: cities, countries names, etc.)
    - Ref: https://www.geonames.org/export/web-services.html
* `PIXABAY_API_KEY`
    - Pixabay API Key. Used to obtain images from places to visit in the application
    - Ref: https://pixabay.com/api/docs/
* `WEATHERBIT_API_KEY`
    - Weatherbit API Key. Used to obtain weather forecast from places to visit in the application
    - Ref: https://www.weatherbit.io/api

### Build
#### Production
`npm run build-prod`
##### Run
Start local server (port 8081) with `npm run start` and enter in the next URL `http://localhost:8081` with your browser

#### Dev
`npm run build-dev`
##### Run
After running the previous command, your browser will open the client side application.
Run `npm run start` to start backend.

### Run tests
`npm run test`

## TODO
* Improve test coverage
* Improve UI style
* [BUG]: Arrival date can't be earlier than Departure

