import React from 'react'
import dict from './../assets/dictionary.png'
import arrow from './../assets/arrow-right.svg'
import stack from './../assets/stack.png'

export const BigCard = ({title, text, counter, param, icon}) => {

const images = {
  dict: dict,
  tests: stack
}

  return (
    <div  className='test-card'>
      <div className='test-card-content big'>
        <div className='test-card-header'>
          <div className='test-card-title'>
            <img src={images[icon]}/>
            <h3>{title}</h3>
          </div>
          <p>{text}</p>
        </div>
          <div className='test-card-tip'>
            <img src={stack}/>
            <p>{counter} {param}</p>
          </div>
      </div>
      <img src={arrow}/>
    </div>
  )
}
