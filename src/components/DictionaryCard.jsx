import React from 'react'
import dict from './../assets/dictionary.png'
import arrow from './../assets/arrow-right.svg'
import stack from './../assets/stack.png'
import words from './../Words'

export const DictionaryCard = () => {

const counter = Object.keys(words).length
  return (
    <div  className='test-card'>
      <div className='test-card-content dictionary'>
        <div className='test-card-header'>
          <div className='test-card-title'>
            <img src={dict}/>
            <h3>Словарь</h3>
          </div>
          <p>Все слова, которые могут встретиться в тесте</p>
        </div>
          <div className='test-card-tip'>
            <img src={stack}/>
            <p>{counter} слов</p>
          </div>
      </div>
      <img src={arrow}/>
    </div>
  )
}
