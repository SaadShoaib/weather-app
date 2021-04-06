const key = "79fb9db788305331e87bb3d98e99b774";
const searchBox = document.querySelector(".search-box");
const theLocation = document.querySelector(".location");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels-like span")
const pressure = document.querySelector(".pressure span")
const humidity = document.querySelector(".humidity span")

searchBox.addEventListener("keypress", handleKeyPress)

function handleKeyPress(e) {
    if(e.keyCode == 13){
        getWeather(searchBox.value)
    }
}

//fetching data from the api
function getWeather(query){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}`)
        .then(response => response.json())
        .then(displayWeather)
}

function displayWeather(data){
    console.log(data);
    displayLocation(data);
    displayTemperature(data);
    displayFeelsLike(data);
    displayPressure(data);
    displayHumidity(data);
}

function displayLocation(data){
    theLocation.textContent = `${data.name}, ${data.sys.country}`
}

function displayTemperature(data){
    temperature.innerHTML = `${Math.round(data.main.temp) - 273}<span>°c</span>`
}

function displayFeelsLike(data) {
    feelsLike.innerHTML = `${Math.round(data.main.feels_like) - 273} °c`
}

function displayPressure(data) {
    pressure.textContent = `${data.main.pressure} mb`
}

function displayHumidity(data) {
    humidity.textContent = `${data.main.humidity} %`
}