import React from 'react'
import { Link } from 'react-router-dom';
import { TestCard } from './TestCard';
import { StatusBar } from './StatusBar';
import useTestStore from './../store/Store';
import {generareRandomList, generateTestObject} from '../utils/TestSetupUtils';
import words from '../Words';


export const Tests = () => {

  const storeTests = useTestStore((state) => state.tests)

//   const storeTestArray = useTestStore((state) => state.testArray)
//   const possibleURLs = Object.keys(storeTests);

  const setTestArray = useTestStore((state) => state.setTestArray);
  const resetQuestionNumber = useTestStore((state) => state.resetQuestionNumber);
  const setTestWordsNumber = useTestStore((state) => state.setTestWordsNumber);
  const setStartTime = useTestStore((state) => state.setStartTime);

  function startTest(t){
    console.log('start creating test array');

    const checkingWords = generareRandomList(Object.keys(words), storeTests[t].wordsCounter)
    const testArr = generateTestObject(checkingWords);
    resetQuestionNumber();
    setTestWordsNumber(storeTests[t].wordsCounter)
    setTestArray(testArr);
    setStartTime();
    console.log('creating test array done');
    return
  }

  const tests = Object.keys(storeTests).map(t => 
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
      <StatusBar />
      <div className='content'>
        <h2>выберите тест</h2>
        <div className='group'>
          {tests} 
        </div>
      </div>
    </>
    
  )
}

