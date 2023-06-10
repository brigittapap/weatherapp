import { WeatherDataContext } from "./WeatherDataContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function DefaultLocations({ location }) {
  const [locationdata, setLocationData] = useState([]);

  useEffect(() => {
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
      <div className="bottom-data">
        {locationdata.name}, {locationdata.sys.country}
        <div className="">
          {locationdata.main ? (
            <p>{locationdata.main.temp.toFixed()}°C</p>
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div className="bottom-data">
        <div>
          <p>No data avilable. Loading...</p>
        </div>
      </div>
    );
  }
}

export default DefaultLocations;
