console.log('Client side javascript file is loaded!');

fetch('http://localhost:3000/weather?address=munich').then((response) => {
    response.json().then((weatherData) => {
        if (weatherData.error) {
            console.log(weatherData.error);
        } else {
            console.log(weatherData.location);
            console.log(weatherData.forecast);
        }
    }) 
})