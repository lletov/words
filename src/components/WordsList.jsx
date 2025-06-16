import React, { useState } from 'react'
import words from './../Words'
import { Breadcrumbs } from './Breadcrumbs'
import { WordsListNav } from './WordsListNav'
import { getWordStatistic } from '../utils/LocalStorageUtils'

export const WordsList = () => {
  
  let currentLetter = ''
  const wordsList = Object.keys(words).map(w => {
    if (w.split('')[0] !== currentLetter) {
      currentLetter = w.split('')[0]
      return <>
        <div className='letter-pointer'>{currentLetter.toUpperCase()}</div>
        <div id={'letter-' + currentLetter}></div>
        <div className='word-list-row' key={w}>
          <h2>{w}</h2>
          <h2>{getWordStatistic(w)}</h2>
          <h2>{words[w].translation.join(', ')}</h2>
      </div>
      </>
      
    } else {
      return <div className='word-list-row' key={w}>
        <h2>{w}</h2>
        <h2>{getWordStatistic(w)}</h2>
        <h2>{words[w].translation.join(', ')}</h2>
      </div>
    }
    }
  )
return (
  <>
    <Breadcrumbs/>
    {/* <WordsListNav/> */}
    <div className='word-list'>
      <div style={{display: 'flex', alignItems: 'center'}}><h5>Список слов</h5></div>
      <WordsListNav/>
      <div className='word-list-list'>
        {wordsList}
      </div>
    </div>
  </>
  
)
}
