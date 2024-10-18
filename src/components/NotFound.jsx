import React from 'react'
import satellite from './../assets/satellite.png'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='not-found'>
      <img src={satellite}></img>
      <h3>ой!</h3>
      <p>похоже, такой страницы не существует или возникла ошибка</p>
      <Link to='/'><button className='btn-s'>на главную страницу</button></Link>
    </div>
  )
}
