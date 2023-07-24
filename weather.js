let searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', getRequest);

function getCityCode() {
    return document.querySelector('#search').value;
}

function getRequest() {
    let cityCode = getCityCode();
    let url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${cityCode}.json`;
    axios.get(url)
        .then(displayResult)
        .catch(displayError)
        .finally(finish);
}

function displayResult(response) {
    let weatherData = response.data;

    let cityNameElement = document.querySelector('#city-name');
    cityNameElement.textContent = weatherData.name;
    let latitudeElement = document.querySelector('#latitude');
    latitudeElement.textContent = weatherData.coord.lat;
    let longitudeElement = document.querySelector('#longitude');
    longitudeElement.textContent = weatherData.coord.lon;
    let weatherInfoElement = document.querySelector('#weather-info');
    weatherInfoElement.textContent = weatherData.weather[0].description;
    let minTemperatureElement = document.querySelector('#min-temperature');
    minTemperatureElement.textContent = weatherData.main.temp_min;
    let maxTemperatureElement = document.querySelector('#max-temperature');
    maxTemperatureElement.textContent = weatherData.main.temp_max;
    let humidityElement = document.querySelector('#humidity');
    humidityElement.textContent = weatherData.main.humidity;
    let windSpeedElement = document.querySelector('#wind-speed');
    windSpeedElement.textContent = weatherData.wind.speed;
    let windDirectionElement = document.querySelector('#wind-direction');
    windDirectionElement.textContent = weatherData.wind.deg;
}

function displayError(error) {
    console.log(error);
}

function finish() {
    console.log('Ajax 通信が終わりました');
}

