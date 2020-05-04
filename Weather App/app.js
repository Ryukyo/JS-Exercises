const request = require('request');
const geocode = require ('./utils/geocode')

/* const url = 'http://api.weatherstack.com/current?access_key=b710bd0cfeec089581a49de4fe12b75c&query=37.8267,-122.4233';
const urlLocation = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGlueWFwcCIsImEiOiJjazlyNHBseGcwcW5rM3VuMXh1bnYxcGhhIn0.zHzdRbjmcXYG9vPL4ugbHw'

request({ url : url, json : true}, (error, response) => {
    if (error) console.log('Unable to connect to weather service');
    else if (response.body.error) console.log('Unable to connect to weather service');
    else console.log(`It is currently ${response.body.current.temperature} degrees`);
});

request({url : urlLocation, json : true}, (error, response) => {
    if (error) console.log('Unable to connect to geolocation service');
    else if (response.body.features.length === 0) console.log('Unable to find location');
    else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];

        console.log(latitude, longitude);
    }
}); */

geocode('Munich', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})