import React, {useState} from "react";
import axios from 'axios'
import WeatherInfo from "./WeatherInfo";

function Location() {

    const [location, setLocation] = useState('');  
    const [data, setData] = useState({});

    //TODO: use dotenv for api key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3401a98f67244a2761343403f0115876`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
          axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
          })
        
          setLocation('')
        }
      }
      return (
        <div className="app">
            <div className="search">
                <input
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder='Enter Location'
                type="text" />

                <WeatherInfo weatherData={data} />
            </div>
          </div>
        );
}

export default Location;