import React, { useState } from "react";
import "./App.css";
import axios from "axios";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "a1357df929ebtfc24fcd7f75o52d3097";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
  return (
    <div class="container">
      <div class="card text-center pt-3" style={{ width: "40rem" }}>
        <div class="card-body">
          <form class="search-form" id="search-form">
            <input
              type="text"
              placeholder="Enter the city"
              size="40"
              class="search shadow-sm"
              id="city-input"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="submit" class="search-button" id="weather">
              Search
            </button>
            <button type="submit" class="search-button" id="currentid">
              Current
            </button>
          </form>
          <br />

          <div class="date-today" id="date-today">
            November 24
            <br />
          </div>
          <div class="time" id="time">
            Thursday 22:51
          </div>

          <h1 class="city-name" id="city" style={{ fontSize: "35px" }}>
            {" "}
            {props.data.city}
          </h1>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="overcast clouds"
            class="sun-icon"
            id="icon"
          />
          <br />

          <span
            id="temperature"
            class="currentTemp"
            style={{ fontSize: "15px" }}
          ></span>
          <span class="celsius-fahrenheit">
            <a href="#" id="celsius-link">
            celsius={props.data.temperature}°C
            </a>{" "}
            /
            <a href="#" id="fahrenheit-link">
              °F
            </a>
          </span>

          <div class="description" id="description">
            {props.data.description}
          </div>
        </div>
        <br />
        <div class="humidity">
          <div class="now">
            {" "}
            Humidity: <span id="humidity">{props.data.humidity}</span>
            <strong> %</strong>
            <br />
            Wind: <span id="wind">{props.data.wind}</span>
            <strong> km/h</strong>
          </div>
        </div>

        <div class="weather-forecast" id="forecast">
          <div class="row">
            <div class="col" bg-white border rounded shadow-sm>
              <div class="weather-forecast-date">Wed</div>
              <img
                src="http://openweathermap.org/img/wn/13d@2x.png"
                alt=""
                width="42"
              ></img>
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 1° </span>
                <span class="weather-forecast-temperature-min"> -4° </span>
              </div>
            </div>

            <div class="col" bg-white border rounded shadow-sm>
              <div class="weather-forecast-date">Thu</div>
              <img
                src="http://openweathermap.org/img/wn/04d@2x.png"
                alt=""
                width="42"
              ></img>
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 1° </span>
                <span class="weather-forecast-temperature-min"> 0° </span>
              </div>
            </div>

            <div class="col" bg-white border rounded shadow-sm>
              <div class="weather-forecast-date">Fri</div>
              <img
                src="http://openweathermap.org/img/wn/04d@2x.png"
                alt=""
                width="42"
              ></img>
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 0° </span>
                <span class="weather-forecast-temperature-min"> -2° </span>
              </div>
            </div>

            <div class="col" bg-white border rounded shadow-sm>
              <div class="weather-forecast-date">Sat</div>
              <img
                src="http://openweathermap.org/img/wn/13d@2x.png"
                alt=""
                width="42"
              ></img>
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 2° </span>
                <span class="weather-forecast-temperature-min"> -1° </span>
              </div>
            </div>

            <div class="col" bg-white border rounded shadow-sm>
              <div class="weather-forecast-date">Sun</div>
              <img
                src="http://openweathermap.org/img/wn/04d@2x.png"
                alt=""
                width="42"
              ></img>
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 2° </span>
                <span class="weather-forecast-temperature-min"> 0° </span>
              </div>
            </div>

            <div class="col" bg-white border rounded shadow-sm>
              <div class="weather-forecast-date">Mon</div>
              <img
                src="http://openweathermap.org/img/wn/04d@2x.png"
                alt=""
                width="42"
              ></img>
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 2° </span>
                <span class="weather-forecast-temperature-min"> 0° </span>
              </div>
            </div>

            <div class="col" bg-white border rounded shadow-sm>
              <div class="weather-forecast-date">Tue</div>
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt=""
                width="42"
              ></img>
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 3° </span>
                <span class="weather-forecast-temperature-min"> -1° </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small class="openSourceCode">
        <a
          href="https://github.com/LychTetiana/Project_Weather"
          target="_blank"
        >
          Open-source code
        </a>
        , by Tetiana Lych
      </small>
    </div>
  );
} else {
  search();
  return "Loading...";
}
}

