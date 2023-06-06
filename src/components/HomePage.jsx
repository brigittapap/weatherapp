import axios from "axios";
import React, { createContext, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import WeatherInfoSmall from "./WeatherInfoSmall";
import { useContext, useEffect } from "react";
import { WeatherDataContext } from "./WeatherDataContext";
import WeatherInfo from "./WeatherInfo";
import TabContext from "@mui/lab/TabContext";
import TomorrowForecast from "./TomorrowForecast";

function HomePage() {
  const [value, setValue] = React.useState("1");
  const { data: weatherData, forecast } = useContext(WeatherDataContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const defaultLocations = ["London", "Napoli", "Cluj-Napoca", "Dubai"];

  if (Object.keys(weatherData).length != 0) {
    return (
      <div>
        <TabContext value={value}>
          <Tabs
            value={value}
            onChange={handleChange} //TODO
            centered
          >
            <Tab label="Today" value="1" />
            <Tab label="Tomorrow" value="2" />
            <Tab label="Forecast" value="3" />
          </Tabs>
          <TabPanel value="1">
            <WeatherInfo />
          </TabPanel>
          <TabPanel value="2">
            <TomorrowForecast forecast={forecast} />
          </TabPanel>
          <TabPanel value="3">No adata available</TabPanel>
        </TabContext>
      </div>
    );
  } else {
    return (
      <div>
        <TabContext value={value}>
          <Tabs
            value={value}
            onChange={handleChange} //TODO
            centered
          >
            <Tab label="Today" value="1" />
            <Tab label="Tomorrow" value="2" />
            <Tab label="Forecast" value="3" />
          </Tabs>
          <TabPanel value="1">
            {defaultLocations.map((location) => (
              <WeatherInfoSmall location={location} />
            ))}
          </TabPanel>
          <TabPanel value="2">No data available</TabPanel>
          <TabPanel value="3">No adata available</TabPanel>
        </TabContext>
      </div>
    );
  }
}

export default HomePage;
