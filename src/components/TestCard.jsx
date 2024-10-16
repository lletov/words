import React from 'react'
import arrow from './../assets/arrow-right.svg'
import clock from './../assets/clock.png'
import stack from './../assets/stack.png'

export const TestCard = ({title, subtitle, wordsCounter, time}) => {
  return (
    <div  className='test-card'>
      <div className='test-card-content'>
        <div className='test-card-header'>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className='test-card-tips'>
          <div className='test-card-tip'>
            <img src={clock}/>
            <p>{time} мин</p>
          </div>
          <div className='test-card-tip'>
            <img src={stack}/>
            <p>{wordsCounter} слов</p>
          </div>
        </div>
      </div>
      <img src={arrow}/>
        {/* <p>{title}</p>
        <p>{subtitle}</p>
        <p>{wordsCounter}</p>
        <p>{time}</p> */}
    </div>
  )
}
