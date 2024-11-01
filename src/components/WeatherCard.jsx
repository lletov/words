import React from 'react'
import { useState, useEffect } from 'react'
import {fetchWeatherData} from './../utils/WeatherUtils'

export const WeatherCard = ({city, lat, lng}) => {
    useEffect(() => {
        getWeather(lat,lng)
        },[]);

    let temp
    const [APItemp, setAPITemp] = useState(null)

    async function getWeather(lat, lng){
        const data = await fetchWeatherData(lat,lng)
        setAPITemp(Math.round(data.current.temperature2m))
    }
    getWeather(lat,lng)

    APItemp !== null 
        ? APItemp > 0 
            ? temp = "+" + APItemp
            : temp = APItemp
        : temp = '--'

  return (
    <div className='weather-card'>
        <h5>{temp}°</h5>
        <p>{city}</p>
    </div>
  )
}
