import React, { useState } from 'react'
import words from './../Words'
import { Breadcrumbs } from './Breadcrumbs'
import { WordsListNav } from './WordsListNav'
import { getWordStatistic } from '../utils/LocalStorageUtils'
import useTestStore from './../store/Store';
import Filters from './Filters'

export const WordsList = () => {

  const statisticOn = useTestStore((state) => state.statisticOn);
  const statistic = JSON.parse(localStorage.getItem('statistic'));

  const filterItems = [
    'All',
    'A1',
    'B1',
    'C1'
  ]

  function filterSelected(selected){
    console.log(selected)
  }
  
  let currentLetter = ''
  const wordsList = Object.keys(words).map(w => {
    if (w.split('')[0] !== currentLetter) {
      currentLetter = w.split('')[0]
      return <>
        <div className='letter-pointer'>{currentLetter.toUpperCase()}</div>
        <div id={'letter-' + currentLetter}></div>
        <div className='word-list-row' key={w}>
          <h2>{w}</h2>
          <p>{getWordStatistic(w, statisticOn, statistic)}</p>
          <h2>{words[w].translation.join(', ')}</h2>
      </div>
      </>
      
    } else {
      return <div className='word-list-row' key={w}>
        <h2>{w}</h2>
        <p>{getWordStatistic(w, statisticOn, statistic)}</p>
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
      <Filters
        items={filterItems} 
        onSelect={filterSelected} 
        defaultSelected='All'
      />
      <div className='word-list-list'>
        {wordsList}
      </div>
    </div>
  </>
  
)
}
