import { Fragment, useContext, useEffect, useState } from "react";
import { WeatherDataContext } from "./WeatherDataContext";

const getTomorrowDateString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split("T")[0];
  return tomorrowString;
};

const TomorrowForecast = () => {
  const { forecast } = useContext(WeatherDataContext);

  const [tomorrowForecast, setTomorrowForecast] = useState(null);

  useEffect(() => {
    if (forecast) {
      const tomorrowString = getTomorrowDateString();

      const filteredForecast = forecast.list.filter((item) =>
        item.dt_txt.includes(tomorrowString)
      );

      setTomorrowForecast(filteredForecast);
    }
  }, [forecast]);

  if (tomorrowForecast == null) return null;

  return (
    <>
      <div className="bottom-small">
        {tomorrowForecast.map((item) => (
          <Fragment key={`${item.dt}-weather-info`}>
            <p>{item.dt_txt}</p>
            <p>{item.main.temp.toFixed()}</p>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default TomorrowForecast;
