import React ,{useContext}from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { AppContext } from "./wea"
export default function Wright({ weather }) {
  const date = new Date();


  const temperature = weather?.main?.temp;
  const feelsLike = weather?.main?.feels_like;
  const humidity = weather?.main?.humidity;
  const windSpeed = weather?.wind?.speed;
  const tempMax = weather?.main?.temp_max;
  const tempMin = weather?.main?.temp_min;
  const name=weather?.name
  const { newSearch, weatherdata } = useContext(AppContext);
  return (
    <div>
      <div className="weather-right">
        <div className="today">
          <TiWeatherPartlySunny className="wlogo" />
          <h1>Today</h1>
        </div>
        <h1 className="dare">{date.toLocaleDateString()}</h1>
   
        <h1 className="temp">{temperature}°C</h1>
        <h1 className="placeNAME">{name}</h1>
        <div className="tempdet">
          <div className="boxL">
            <div className="boxwa">
              <FaTemperatureHigh className="tI" />
              <h1>
                Real feel:
                <span>
                  <b>{feelsLike}</b>
                </span>
              </h1>
            </div>
            <div className="boxwa">
              <WiHumidity className="tI" />
              <h1>
                Humidity:
                <span>
                  <b>{humidity}%</b>
                </span>
              </h1>
            </div>
            <div className="boxwa">
              <FiWind className="tI" />
              <h1>
                Wind:{" "}
                <span>
                  <b>{windSpeed}km/h</b>
                </span>
              </h1>
            </div>
          </div>
          <div className="boxr">
            <div className="boxwa">
              <BsFillSunriseFill className="tI" />
              <h1>
                Rise:{" "}
                <span>
                  <b>04.50 AM</b>
                </span>
              </h1>
            </div>
            <div className="boxwa">
              <BsFillSunsetFill className="tI" />
              <h1>
                Set :
                <span>
                  <b>6:05 PM</b>
                </span>
              </h1>
            </div>
            <div className="boxwa">
              <AiOutlineArrowUp className="tI" />
              <h1>
                High:{" "}
                <span>
                  <b>{tempMax}°C</b>
                </span>
              </h1>
            </div>
            <div className="boxwa">
              <AiOutlineArrowDown className="tI" />
              <h1>
                Low:{" "}
                <span>
                  <b>{tempMin}°C</b>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
