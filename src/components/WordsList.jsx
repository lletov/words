import React from 'react'
import words from './../Words'
import { Breadcrumbs } from './Breadcrumbs'

export const WordsList = () => {
  // const wordsList = Object.keys(words).map(w => 
  //   <div className='word-list-row' key={w}>
  //       <h2>{w}</h2>
  //       <h2>{words[w]}</h2>
  //   </div>
  // )
  let currentLetter = ''
  const wordsList = Object.keys(words).map(w => {
    if (w.split('')[0] !== currentLetter) {
      currentLetter = w.split('')[0]
      return <>
        <div className='letter-pointer'>{currentLetter.toUpperCase()}</div>
        <div className='word-list-row' key={w}>
          <h2>{w}</h2>
          <h2>{words[w]}</h2>
      </div>
      </>
      
    } else {
      return <div className='word-list-row' key={w}>
        <h2>{w}</h2>
        <h2>{words[w]}</h2>
      </div>
    }
    }
  )
return (
  <>
    <Breadcrumbs/>
    <div className='word-list'>
      <h5>Список слов</h5>
      {wordsList}
    </div>
  </>
  
)
}
