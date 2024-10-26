import React from 'react'
import { Link } from 'react-router-dom'
import arrow from './../assets/arrow-right.svg'

export const Banner = () => {
  return (
    <div className='banner'>
        <div className='group'>
            <h4>WORDS - онлайн тестирование на знание английского</h4>
            <p>проверьте свои знания языка при помощи онлайн теста, результат покажем сразу</p>
        </div>
        <Link to='/tests'><button className="btn-m accent">пройти тест</button></Link>
        <div className='banner-more-btn'>
            <p>Больше возможностей</p>
            <img src={arrow}/>
        </div>
    </div>
  )
}
