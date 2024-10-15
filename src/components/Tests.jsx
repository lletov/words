import React from 'react'
import { Link } from 'react-router-dom';
import { TestCard } from './TestCard';
import useTestStore from './../store/Store';
import {generareRandomList, shuffle, generateTestObject} from '../utils/TestSetupUtils';
import words from '../Words';


export const Tests = () => {

  const storeTests = useTestStore((state) => state.tests)

//   const storeTestArray = useTestStore((state) => state.testArray)
//   const possibleURLs = Object.keys(storeTests);

  const setTestArray = useTestStore((state) => state.setTestArray);
  const resetQuestionNumber = useTestStore((state) => state.resetQuestionNumber);
  const setTestWordsNumber = useTestStore((state) => state.setTestWordsNumber);

  function startTest(t){
    console.log('start creating test array');

    const checkingWords = generareRandomList(Object.keys(words), storeTests[t].wordsCounter)
    const testArr = generateTestObject(checkingWords);
    resetQuestionNumber();
    setTestWordsNumber(storeTests[t].wordsCounter)
    setTestArray(testArr);

    console.log('creating test array done');
    return
  }

  const tests = Object.keys(storeTests).map(t => 
    <Link 
        to={`/tests/${storeTests[t].url}`}
        key={t}
        onClick={(e) =>{startTest(t)}}
    >
            <TestCard
                title={storeTests[t].title}
                subtitle={storeTests[t].subtitle}
                wordsCounter={storeTests[t].wordsCounter}
                time={storeTests[t].time}  
            />
    </Link>
    )

  return (
    <div>
    {tests} 
    </div>
  )
}
