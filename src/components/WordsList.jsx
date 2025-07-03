import React, { useState } from 'react'
import words from './../Words'
import { Breadcrumbs } from './Breadcrumbs'
import { WordsListNav } from './WordsListNav'
import { getWordStatistic } from '../utils/LocalStorageUtils'
import useTestStore from './../store/Store';
import Filters from './Filters'
import Input from './Input'

export const WordsList = () => {

  const statisticOn = useTestStore((state) => state.statisticOn);
  const statistic = JSON.parse(localStorage.getItem('statistic'));
  
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [filteredWordList, setFilteredWordList] = useState(words)
  const [searchQuery, setSearchQuery] = useState('')

  function handleInput(text) {
    setSearchQuery(text);
  }
  function clearInput() {
    setSearchQuery('')
  }

  const filterItems = [
    'All',
    'A1',
    'A2',
    'B1',
    'A2',
    'C1',
    'C2'
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
  const wordsList = Object.keys(filteredWordList).filter(w => w.toLowerCase().includes(searchQuery.toLowerCase())).map(w => {
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
      <Input
        maxLength={80} 
        text={searchQuery} 
        handleInput={handleInput} 
        clearInput={clearInput}
      />
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
