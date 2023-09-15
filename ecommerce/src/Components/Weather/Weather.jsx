import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./weather.css";
import City from "./City";
import ktm from "../../Assets/ktm.webp";
import berlin from "../../Assets/berlin.webp";
import newyork from "../../Assets/newyork.webp";
import Forecast from "./Forecast";
import DailyComponent from "./Daily"; // Rename Daily component to avoid naming conflicts
import { AiOutlineSearch } from "react-icons/ai";
import Wright from "./Wright";
import { AppContext } from "./wea";
import Navbar from "../Navbar/Navbar";

export default function Weather() {
  const [data, setData] = useState("");

  const { newSearch, weatherdata } = useContext(AppContext);

  const lon = weatherdata?.coord?.lon;
  const lat = weatherdata?.coord?.lat;

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    newSearch(data);
    setData("");
  };

  const [daily, setDaily] = useState();

  const fetchDailyData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=8f3cca8952adec446b886f89471d989a&units=metric`
      );
      setDaily(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    if (lat && lon) {
      fetchDailyData();
    }
  }, [lat, lon]);

  return (
    <>
    <Navbar/>
      <div className="putcenre">
        <div className="weather">
          <div className="weather-left">
            <div className="inp flex">
              <input
                type="text"
                value={data}
                onChange={handleChange}
                placeholder="Search new places"
              />
              <button onClick={handleClick}>
                <AiOutlineSearch className="icon" />
              </button>
            </div>

            <h1 className="wea">
              Weather <span>Forecast</span>
            </h1>
            <div className="cites">
              <City img={ktm} name="Kathmandu, Nepal" newSearch={newSearch} />
              <City img={berlin} name="Berlin, Germany" newSearch={newSearch} />
              <City img={newyork} name="New York, USA" newSearch={newSearch} />
            </div>
            {daily && <Forecast   daily={daily}/>}
            {daily && <DailyComponent daily={daily} />}
          </div>
          <Wright weather={weatherdata} />
        </div>
      </div>
    </>
  );
}
