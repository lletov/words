import React from 'react'
import { WeatherCard } from './WeatherCard'

export const Weather = () => {
    const citiesObj = {
        0: {
            name: 'Лондон',
            lat: 51.507128, 
            lng: -0.127548
        },
        1: {
            name: 'Манчестер',
            lat: 53.477724, 
            lng: -2.243940
        },
        2: {
            name: 'Эдинбург',
            lat: 55.949742, 
            lng: -3.190510
        },
        3: {
            name: 'Дублин',
            lat: 53.340273, 
            lng: -6.252871
        }
    }

    const cards = Object.keys(citiesObj).map((el) => <WeatherCard key={el} city={citiesObj[el].name} lat={citiesObj[el].lat} lng={citiesObj[el].lng}/>)

  return (
    <div className='section'>
        <h5>Погода в Англии</h5>
        <p>Посмотреть обстановку в разных городах</p>
        <div className='weather-cards'>{cards}</div>
    </div>
  )
}
