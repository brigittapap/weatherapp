export const locationUrl = (location) => {
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3401a98f67244a2761343403f0115876`;
    return WEATHER_URL;
};