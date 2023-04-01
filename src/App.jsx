import "./App.css";
import { WeatherDataProvider } from "./components/WeatherDataContext";
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
