const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=b710bd0cfeec089581a49de4fe12b75c&query=${latitude},${longitude}`;

    request({ url : url, json : true}, (error, response) => {
        if (error)callback('Unable to connect to weather service', undefined);
        else if (response.body.error) callback('Unable to connect to weather service', undefined);
        else callback(undefined, `${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees out.`);
    });
}

module.exports = forecast;