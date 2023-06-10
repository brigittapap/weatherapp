import "./App.css";
import HomePage from "./components/HomePage";
import { WeatherDataProvider } from "./components/WeatherDataContext";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  return (
    <WeatherDataProvider>
      <div className="app">
        <HomePage />
      </div>
    </WeatherDataProvider>
  );
}

export default App;
