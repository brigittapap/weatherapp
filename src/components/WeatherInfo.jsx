import { WeatherDataContext } from "./WeatherDataProvider";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import cloudy2 from "../images/animated/cloudy2.svg";
import day from "../images/animated/day.svg";
import north from "../images/north.svg";

function WeatherInfo() {
  const [weatherData] = useContext(WeatherDataContext);

  const dateBuilder = (d) => {
    const months = [
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
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
  };

  const renderImage = () => {
    console.log("Render logoooo");
    if (typeof weatherData.main.temp !== "undefined") {
      if (weatherData.main.temp > 16) {
        return <img src={day} alt="Sunny" className="small-image" />;
      } else if (weatherData.main.temp <= 0) {
        return <img src={north} />;
      } else if (weatherData.main.temp < 16) {
        return <img src={cloudy2} />;
      }
    }
  };

  if (Object.keys(weatherData).length !== 0) {
    return (
      <Card
        variant="outlined"
        sx={{
          maxWidth: 800,
          margin: "0 auto",
          backgroundColor: "rgba(240, 240, 240, 0.5)", // Semi-transparent backgroundthe background color
        }}
      >
        <CardContent>
          <Typography variant="h2" component="div">
            {weatherData.name}, {weatherData.sys.country}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {dateBuilder(new Date())}
          </Typography>
          <Typography variant="h3" component="div">
            {renderImage()}

            {weatherData.main ? `${weatherData.main.temp.toFixed()}°C` : null}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Max temperature:{" "}
            {weatherData.main
              ? `${weatherData.main.temp_max.toFixed()}°C`
              : null}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Min temperature:{" "}
            {weatherData.main
              ? `${weatherData.main.temp_min.toFixed()}°C`
              : null}
          </Typography>
          <Typography variant="h5" component="div">
            {weatherData.weather ? weatherData.weather[0].description : null}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000 + weatherData.timezone)
              .toUTCString()
              .slice(-11, -4)}{" "}
            AM
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000 + weatherData.timezone)
              .toUTCString()
              .slice(-11, -4)}{" "}
            PM
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Feels Like:{" "}
            {weatherData.main
              ? `${weatherData.main.feels_like.toFixed()}°C`
              : null}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Humidity:{" "}
            {weatherData.main ? `${weatherData.main.humidity}%` : null}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Wind Speed:{" "}
            {weatherData.wind
              ? `${weatherData.wind.speed.toFixed()} MPH`
              : null}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Cloudiness:{" "}
            {weatherData.clouds.all
              ? `${weatherData.clouds.all} %`
              : "No clouds today"}
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

export default WeatherInfo;
