import axios from "axios";
import { WEATHER_API_KEY } from "../utils/utils.js";

class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  }

  async getWeatherData(location) {
    const url = `${this.apiUrl}?q=${location}&units=metric&appid=${WEATHER_API_KEY}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default WeatherService;
