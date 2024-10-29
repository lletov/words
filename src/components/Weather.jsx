import React from 'react'
import {fetchWeatherData} from './../utils/WeatherUtils'

export const Weather = () => {
    const citiesObj = {
        0: {
            name: 'London',
            lat: 51.507128, 
            lng: -0.127548
        },
        1: {
            name: 'Manchester',
            lat: 53.477724, 
            lng: -2.243940
        },
        2: {
            name: 'Edinburgh',
            lat: 55.949742, 
            lng: -3.190510
        },
        3: {
            name: 'Dublin',
            lat: 53.340273, 
            lng: -6.252871
        }
    }

    async function getWeather(){
        const tempList = await Promise.all(Object.keys(citiesObj).map(async (el) => fetchWeatherData(citiesObj[el].lat, citiesObj[el].lng)))
        return tempList
    }
    

  return (
    <div>
        <h5>Погода в Англии</h5>
        <p>Посмотреть обстановку в разных городах</p>
    </div>
  )
}
