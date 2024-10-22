import React from 'react'
import satellite from './../assets/satellite.png'
import cat from './../assets/cat.png'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='not-found'>
      <img src={cat}></img>
      <h3>Ой!</h3>
      <p>Похоже, такой страницы не существует или возникла ошибка</p>
      <Link to='/'><button className='btn-s'>на главную страницу</button></Link>
    </div>
  )
}
