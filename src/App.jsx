import "./App.css";
import { WeatherDataProvider } from "./components/WeatherDataProvider";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  return (
    <WeatherDataProvider>
      <div className="app">
        <WeatherInfo />
      </div>
    </WeatherDataProvider>
  );
}

export default App;
