import { createContext, useState } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import WeatherWidget from "./Components/WeatherWidget/WeatherWidget";
import "./App.css";

export const WeatherDataContext = createContext(null);

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <div className="app-container">
      <WeatherDataContext.Provider value={[weatherData, setWeatherData]}>
        <SearchBar></SearchBar>
        {weatherData && <WeatherWidget></WeatherWidget>}
      </WeatherDataContext.Provider>
    </div>
  );
};

export default App;
