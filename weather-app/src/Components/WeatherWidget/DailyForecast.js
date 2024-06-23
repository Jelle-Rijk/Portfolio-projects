import "./DailyForecast.css";
import TemperatureMaxMin from "./TemperatureMaxMin.js";

const DailyForecast = (props) => {
  return (
    <>
      <div className="daily-forecast-container">
        <p className="daily-forecast-date">{props.date}</p>
        <TemperatureMaxMin
          tempMax={props.tempMax}
          tempMin={props.tempMin}
          key={`tempMaxMin-dailyForecast-${props.date}`}
        ></TemperatureMaxMin>
      </div>
    </>
  );
};

export default DailyForecast;
