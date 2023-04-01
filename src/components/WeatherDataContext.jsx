import axios from "axios";
import React, { createContext, useState } from "react";

export const WeatherDataContext = createContext();

export const WeatherDataProvider = (props) => {
  const [location, setLocation] = useState();

  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3401a98f67244a2761343403f0115876`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });

      setLocation("");
    }
  };

  return (
    <WeatherDataContext.Provider value={[data, setData]}>
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
