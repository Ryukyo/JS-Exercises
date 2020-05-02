const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=b710bd0cfeec089581a49de4fe12b75c&query=37.8267,-122.4233';

request({ url : url}, (error, response) => {
    const data = JSON.parse(response.body);

    console.log(data.current);
})