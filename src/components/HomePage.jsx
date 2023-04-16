import axios from "axios";
import React, { createContext, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import WeatherInfoSmall from "./WeatherInfoSmall";
import { useContext, useEffect } from "react";
import { WeatherDataContext } from "./WeatherDataContext";
import WeatherInfo from "./WeatherInfo";

function HomePage() {
  const [value, setValue] = React.useState(0);
  const [weatherData, setWeatherData] = useContext(WeatherDataContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const defaultLocations = ["London", "Napoli", "Cluj-Napoca", "Dubai"];

  if (Object.keys(weatherData).length != 0) {
    return (
      <div>
        <Tabs
          value={value}
          // onChange={handleChange} //TODO
          centered
        >
          <Tab label="Today" />
          <Tab label="Tomorrow" />
        </Tabs>
        <WeatherInfo />
        <div className="container"></div>
      </div>
    );
  } else {
    return (
      <div>
        <Tabs
          value={value}
          // onChange={handleChange} //TODO
          centered
        >
          <Tab label="Today" />
          <Tab label="Tomorrow" />
        </Tabs>
        {defaultLocations.map((location) => (
          <WeatherInfoSmall location={location} />
        ))}
        <div className="container"></div>
      </div>
    );
  }
}

export default HomePage;
