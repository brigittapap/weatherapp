import axios from "axios";
import React, { createContext, useState } from "react";

export const WeatherDataContext = createContext();

export const WeatherDataProvider = (props) => {
  const [location, setLocation] = useState();
  const [forecast, setForecast] = useState(null);

  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3401a98f67244a2761343403f0115876`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      await fetchForecast(location);
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });

      setLocation("");
    }
  };

  const fetchForecast = async (location) => {
    console.log("fetchForecast");
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=3401a98f67244a2761343403f0115876`;

    try {
      const response = await axios.get(url);
      setForecast(response.data);
    } catch (error) {
      console.log(error);

      const responseCode = error.response.status;

      if (responseCode === 404) {
        alert("Location not found");
      }
    }
  };

  return (
    <WeatherDataContext.Provider value={{ data, setData, forecast }}>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>
      </div>
      {props.children}
    </WeatherDataContext.Provider>
  );
};
