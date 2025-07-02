import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TestCard } from './TestCard';
import useTestStore from './../store/Store';
import {generareRandomList, generateTestObject} from '../utils/TestSetupUtils';
import words from '../Words';
import { Breadcrumbs } from './Breadcrumbs';
import Input from './Input';


export const Tests = () => {

  const storeTests = useTestStore((state) => state.tests)

//   const storeTestArray = useTestStore((state) => state.testArray)
//   const possibleURLs = Object.keys(storeTests);

  const setTestArray = useTestStore((state) => state.setTestArray);
  const resetQuestionNumber = useTestStore((state) => state.resetQuestionNumber);
  const setTestWordsNumber = useTestStore((state) => state.setTestWordsNumber);
  const setStartTime = useTestStore((state) => state.setStartTime);
  const resetResult = useTestStore((state) => state.resetResult);

  const allKeys = Object.keys(words);

  const testStartArrays = {
    '5': allKeys,
    'a2': allKeys.filter(key => words[key].level.includes('A2')),
    'adverb': allKeys.filter(key => words[key].category.includes('adverb'))
  }

  const [searchQuery, setSearchQuery] = useState('')
  
    function handleInput(text) {
      setSearchQuery(text);
    }
    function clearInput() {
      setSearchQuery('')
    }


  function startTest(t){
    console.log('start creating test array');
    console.log(t)

    const checkingWords = generareRandomList(testStartArrays[t] ,storeTests[t].wordsCounter)
    const testArr = generateTestObject(checkingWords);
    console.log(testArr)
    resetQuestionNumber();
    setTestWordsNumber(storeTests[t].wordsCounter)
    setTestArray(testArr);
    setStartTime();
    resetResult();
    console.log('creating test array done');
    return
  }

  const tests = Object.keys(storeTests).filter(w => w.toLowerCase().includes(searchQuery.toLowerCase())).map(t => 
    <Link 
        to={`/tests/${storeTests[t].url}`}
        key={t}
        onClick={(e) =>{startTest(t)}}
        style={{ textDecoration: 'none' }}
    >
            <TestCard
                title={storeTests[t].title}
                img={storeTests[t].img}
                subtitle={storeTests[t].subtitle}
                wordsCounter={storeTests[t].wordsCounter}
                time={storeTests[t].time}  
            />
    </Link>
    )

  return (
    <>
      <Breadcrumbs/>
      <div className='content'>
        <h5>Выберите тест</h5>
        <Input
          maxLength={50} 
          text={searchQuery} 
          handleInput={handleInput} 
          clearInput={clearInput}
        />
        <div className='group'>
          {tests} 
        </div>
      </div>
    </>
    
  )
}

