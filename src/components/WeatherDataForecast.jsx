import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { WeatherDataContext } from "./WeatherDataContext";

function WeatherDataForecast() {
  const [weatherData, setWeatherData] = useContext(WeatherDataContext);
  const [locationdata, setLocationData] = useState({});

  const location = weatherData.name;
  useEffect(() => {
    console.log("useEffect called");
    console.log(weatherData.name);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=3401a98f67244a2761343403f0115876`
      )
      .then((response) => {
        console.log(response.data);
        setLocationData(locationdata);
        console.log(locationdata.data[0].dt);
      });
    console.log(locationdata);
  }, []);

  if (Object.keys(location).length != 0) {
    return (
      <div>
        Show something location
        <div className="bottom-small">
          <div>
            <p>{locationdata.city}</p>
          </div>
        </div>
      </div>
    );
  } else {
    <div>
      Show something
      <div className="bottom-small">
        <div>
          <p>Location data</p>
        </div>
      </div>
    </div>;
  }
}

export default WeatherDataForecast;
