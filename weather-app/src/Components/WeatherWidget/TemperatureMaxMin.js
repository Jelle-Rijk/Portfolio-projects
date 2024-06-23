import "./TemperatureMaxMin.css";

const TemperatureMaxMin = (props) => {
  return (
    <div className="temperature-max-min-container">
      <p>Max. {props.tempMax}°C</p>
      <p>Min. {props.tempMin}°C</p>
    </div>
  );
};

export default TemperatureMaxMin;
