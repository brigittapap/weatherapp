import { WeatherDataContext } from "./WeatherDataContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function WeatherInfoSmall({ location }) {
  const [locationdata, setLocationData] = useState([]);

  useEffect(() => {
    console.log("use Effect");

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3401a98f67244a2761343403f0115876`
      )
      .then((response) => {
        setLocationData(response.data);
        console.log(locationdata);
        console.log(response.data);
      });
  }, []);

  if (locationdata != 0 || locationdata == null || locationdata == undefined) {
    console.log(location);
    console.log(locationdata);
    return (
      <div>
        <div className="bottom-small">
          <div>
            {" "}
            <h2>
              {locationdata.name}, {locationdata.sys.country}
            </h2>
          </div>
          <div className="feels">
            <h3>Temperature</h3>
            {locationdata.main ? (
              <h4 className="bold">{locationdata.main.temp.toFixed()}°C</h4>
            ) : null}
          </div>
          <div className="feels">
            <h3>Feels like</h3>
            {locationdata.main ? (
              <h4 className="bold">
                {locationdata.main.feels_like.toFixed()}°C
              </h4>
            ) : null}
          </div>
          <div className="wind">
            <h3>Wind Speed</h3>
            {locationdata.wind ? (
              <h4 className="bold">{locationdata.wind.speed.toFixed()} MPH</h4>
            ) : null}
          </div>
          <div className="wind">
            <h3>Cloudiness</h3>
            {locationdata.clouds.all ? (
              <h4 className="bold">{locationdata.clouds.all} %</h4>
            ) : (
              "No clouds today"
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bottom-small">
        <div>
          <p>No data avilable</p>
        </div>
      </div>
    );
  }
}

export default WeatherInfoSmall;
