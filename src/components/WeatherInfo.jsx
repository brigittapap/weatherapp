import { WeatherDataContext } from "./WeatherDataContext";
import { useContext } from "react";

function WeatherInfo() {
  const [weatherData, setWeatherData] = useContext(WeatherDataContext);

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  if (Object.keys(weatherData).length != 0) {
    console.log(weatherData);
    return (
      <div className="container">
        <div className="top">
          <div className="location">
            <p>
              {weatherData.name}, {weatherData.sys.country}
            </p>
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="temp">
            {weatherData.main ? (
              <h1>{weatherData.main.temp.toFixed()}°C</h1>
            ) : null}
          </div>
          <div className="description">
            {weatherData.weather ? (
              <p>{weatherData.weather[0].description}</p>
            ) : null}
          </div>
          <div className="sunrise">
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000 + weatherData.timezone)
              .toUTCString()
              .slice(-11, -4)}{" "}
            AM
          </div>
          <div className="sunset">
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000 + weatherData.timezone)
              .toUTCString()
              .slice(-11, -4)}{" "}
            PM
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {weatherData.main ? (
              <p className="bold">{weatherData.main.feels_like.toFixed()}°F</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {weatherData.main ? (
              <p className="bold">{weatherData.main.humidity}%</p>
            ) : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {weatherData.wind ? (
              <p className="bold">{weatherData.wind.speed.toFixed()} MPH</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
          <div className="wind">
            {weatherData.clouds.all ? (
              <p className="bold">{weatherData.clouds.all} %</p>
            ) : (
              "No clouds today"
            )}
            <p>Cloudiness</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default WeatherInfo;
