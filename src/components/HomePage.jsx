import React, { useContext } from "react";
import DefaultLocations from "./DefaultLocations";
import TomorrowForecast from "./TomorrowForecast";
import { WeatherDataContext } from "./WeatherDataContext";
import WeatherInfo from "./WeatherInfo";

function HomePage() {
  const [value, setValue] = React.useState("1");
  const { data: weatherData } = useContext(WeatherDataContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const defaultLocations = [
    "London",
    "Napoli",
    "Cluj-Napoca",
    "Dubai",
    "Budapest",
    "Paris",
  ];

  if (Object.keys(weatherData).length != 0) {
    return (
      <div>
        <div className="container">
          <WeatherInfo />
          <TomorrowForecast />
        </div>
        <div className="container">
          {defaultLocations.map((location) => (
            <DefaultLocations location={location} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <WeatherInfo />
        <div className="container">
          {defaultLocations.map((location) => (
            <DefaultLocations location={location} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
