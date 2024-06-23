import { useContext, useState } from "react";
import { WeatherDataContext } from "../../App";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const [weatherData, setWeatherData] = useContext(WeatherDataContext);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitButtonHandler = () => {
    const [latitude, longitude] = [52.0681, 6.5634];
    const baseURL = "https://api.open-meteo.com/v1/forecast?";
    const latitudeString = `latitude=${latitude}`;
    const longitudeString = `longitude=${longitude}`;

    const fetchURL = `${baseURL}${latitudeString}&${longitudeString}&daily=temperature_2m_max,temperature_2m_min`;
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("Succesfully fetched from Open-Meteo");
        setWeatherData(data);
      })
      .catch((err) => `Fetch failed, here is the error: ${err}`);
  };

  return (
    <div>
      <input type="text" onChange={inputHandler}></input>
      <button onClick={submitButtonHandler}>Get weather</button>
    </div>
  );
};

export default SearchBar;
