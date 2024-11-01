import React from 'react'
import { useState, useEffect } from 'react'
import {fetchWeatherData} from './../utils/WeatherUtils'

export const WeatherCard = ({city, lat, lng}) => {

    let temp
    const [APItemp, setAPITemp] = useState(null)
    const [lastFetchTime, setLastFetchTime] = useState(null)

    useEffect(() => {
        getWeather(lat,lng)
        // update weather every timeout (100 min)
        setTimeout(() => setLastFetchTime(Date.now()), 6000000);
        },[lastFetchTime]);

    async function getWeather(lat, lng){
        try {
            let d = new Date();
            const data = await fetchWeatherData(lat,lng)
            setAPITemp(Math.round(data.current.temperature2m))
            console.log('get weather in ' + d.toUTCString());
          } catch (e) {
            console.error(e.message);            
          }

        
    }

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
