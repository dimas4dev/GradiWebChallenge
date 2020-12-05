import React, { useState } from "react";
import "../../assets/styles/Bogota/Bogota.scss";
import Sun from "../../assets/images/Sun.svg";
import Cloudy from "../../assets/images/Cloudy.svg";
import Rain from "../../assets/images/Rain.svg";

const Bogota = () => {
  const [weather, setweather] = useState({
    clima: "",
  });
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/find?q=Bogota&units=metric&appid=399cee046a954376a1274420f7d16366",
    // "https://api.openweathermap.org/data/2.5/find?q=Bogota&units=metric&appid=97372d7201bc3143f6bbb7fe6ec8e2ef",

    true
  );
  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //   console.log(xhr.responseText);
      //   console.log(xhr.response);
      const Jasonsito = JSON.parse(xhr.responseText);
      console.log();
      setweather({
        temp: Jasonsito.list[0].main.temp,
        weatherStatus: Jasonsito.list[0].weather[0].main,
        weatherStatusDay1: Jasonsito.list[1].main.temp,
        // weatherStatusDay2: Jasonsito.list[2].main.temp,
        // weatherStatusDay3: Jasonsito.list[3].main.temp,
      });
    }
  };

  const funcionClima = (Clima) => {
    let IconWeather = "";
    if (Clima == "Clouds") {
      IconWeather = Cloudy;
    }
    if (Clima == "Rain") {
      IconWeather = Rain;
    }
    if (Clima == "Sun") {
      IconWeather = Sun;
    } else {
      IconWeather = Cloudy;
    }
    return IconWeather;
  };

  return (
    <article className="container">
      <div className="container__principal">
        <header className="header">
          <h1>Bogota</h1>
          <p>Today's weather is:</p>
        </header>
        <figure className="image__principal">
          <p>{weather.temp > 0 ? weather.temp : 0}ºC</p>
          <img src={funcionClima(weather.weatherStatus)} alt="" />
        </figure>
      </div>
      <div className="container__forecast">
        <p>3 Days Forecast</p>
      </div>
      <div className="container__secondary">
        <p>
          Day 1: {weather.weatherStatusDay1 > 0 ? weather.weatherStatusDay1 : 0}
          ºC
        </p>
        <p>
          Day 2: {0}
          ºC
        </p>
        <p>
          Day 3:{0}
          ºC
        </p>
      </div>
    </article>
  );
};

export default Bogota;
