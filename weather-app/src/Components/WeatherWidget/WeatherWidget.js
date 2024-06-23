import { WeatherDataContext } from "../../App";
import DailyForecast from "./DailyForecast.js";
import "./WeatherWidget.css";
import { useContext } from "react";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useContext(WeatherDataContext);

  const dailyForecasts = weatherData.daily.time.slice(1).map((forecastDate) => {
    const forecastIndex = weatherData.daily.time.findIndex(
      (el) => forecastDate == el
    );

    return (
      <DailyForecast
        date={forecastDate}
        tempMax={weatherData.daily.temperature_2m_max[forecastIndex]}
        tempMin={weatherData.daily.temperature_2m_min[forecastIndex]}
        key={`${forecastDate}-dailyForecast`}
      ></DailyForecast>
    );
  });

  return (
    <>
      <div className="weather-widget-latlon-container">
        <p className="weather-widget-lat">Latitude: {weatherData.latitude}</p>
        <p className="weather-widget-lon">Longitude: {weatherData.longitude}</p>
      </div>
      <div className="today-container">
        <p>TODAY</p>
        <p className="today-max-temp">
          {weatherData.daily.temperature_2m_max[0]}°C
        </p>
        <p className="today-min-temp">
          {weatherData.daily.temperature_2m_min[0]}°C
        </p>
      </div>
      <div className="forecast-container">{dailyForecasts}</div>
      <p>{JSON.stringify(weatherData)}</p>
    </>
  );
};

export default WeatherWidget;
