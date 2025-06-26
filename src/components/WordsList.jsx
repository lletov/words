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
  
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [filteredWordList, setFilteredWordList] = useState(words)

  const filterItems = [
    'All',
    'A1',
    'B1',
    'C1'
  ]

  function filterSelected(selected) {
    setSelectedFilter(selected)
    let filteredObj = words
    if (selected !== 'All')(
      filteredObj = Object.fromEntries(Object.entries(words).filter(
          ([_, value]) => value.level.includes(selected)
        )
      )
    )
    setFilteredWordList(filteredObj)
}
  
  let currentLetter = ''
  const wordsList = Object.keys(filteredWordList).map(w => {
    if (w.split('')[0] !== currentLetter) {
      currentLetter = w.split('')[0]
      return <>
        <div className='letter-pointer'>{currentLetter.toUpperCase()}</div>
        <div id={'letter-' + currentLetter}></div>
        <div className='word-list-row' key={w}>
          <div className="test-card-tip">
            <h2>{w}</h2>
            <p>{getWordStatistic(w, statisticOn, statistic)}</p>
          </div>
          <h2>{words[w].translation.join(', ')}</h2>
      </div>
      </>
      
    } else {
      return <div className='word-list-row' key={w}>
        <div className="test-card-tip">
            <h2>{w}</h2>
            <p>{getWordStatistic(w, statisticOn, statistic)}</p>
        </div>
        <h2>{words[w].translation.join(', ')}</h2>
      </div>
    }
    }
  )
return (
  <>
    <Breadcrumbs/>
    {/* <WordsListNav/> */}
    <div style={{display: 'flex', alignItems: 'start', padding: '12px 24px', flexDirection: 'column', gap: '12px'}}>
      <h5>Список слов</h5>
      <Filters
        items={filterItems} 
        onSelect={filterSelected} 
        selected={selectedFilter}
      />
    </div>
    <div className='word-list'>
      {/* <WordsListNav/> */}
      <div className='word-list-list'>
        {wordsList}
      </div>
    </div>
  </>
  
)
}
