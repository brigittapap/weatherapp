import { useContext } from "react";
import { WeatherDataContext } from "./WeatherDataContext";

function WeatherInfo() {
  const { data: weatherData } = useContext(WeatherDataContext);

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
        <div className="tempm">
          <p>Max temperature: </p>
          {weatherData.main ? (
            <p> {weatherData.main.temp_max.toFixed()}°C</p>
          ) : null}
        </div>
        <div className="tempm">
          <p>Min temperature: </p>
          {weatherData.main ? (
            <p>{weatherData.main.temp_min.toFixed()}°C</p>
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

        {/* <div className="bottom-small">
          <div className="feels">
            {weatherData.main ? (
              <h3 className="bold">
                {weatherData.main.feels_like.toFixed()}°C
              </h3>
            ) : null}
            <h4>Feels Like</h4>
          </div>
          <div className="humidity">
            {weatherData.main ? (
              <h3 className="bold">{weatherData.main.humidity}%</h3>
            ) : null}
            <h4>Humidity</h4>
          </div>
          <div className="wind">
            {weatherData.wind ? (
              <h3 className="bold">{weatherData.wind.speed.toFixed()} MPH</h3>
            ) : null}
            <h4>Wind Speed</h4>
          </div>
          <div className="wind">
            {weatherData.clouds.all ? (
              <h3 className="bold">{weatherData.clouds.all} %</h3>
            ) : (
              "No clouds today"
            )}
            <h4>Cloudiness</h4>
          </div>
        </div> */}
      </div>
    );
  } else {
    return (
      <div>
        <p>No data avilable. Loading...</p>
      </div>
    );
  }
}

export default WeatherInfo;
