import React from 'react'
import useTestStore from './../store/Store';
import { useParams } from 'react-router-dom';
import { NotFound } from './NotFound';
import words from '../Words';
import { useEffect } from 'react';
import clock from './../assets/clock.png'
import done from './../assets/done.png'
import stat from './../assets/stack.png'
import arrow from './../assets/arrow-right.svg'
import { Link } from 'react-router-dom';
import {generareRandomList, generateTestObject} from '../utils/TestSetupUtils';

export const Test = () => {

  const URLprefix = useParams().testName;
  const storeTests = useTestStore((state) => state.tests)
  const possibleURLs = Object.keys(storeTests);

  const testArray = useTestStore((state) => state.testArray)
  const startTime = useTestStore((state) => state.startTime)
  const endTime = useTestStore((state) => state.endTime)
  const setEndTime = useTestStore((state) => state.setEndTime);

  const questionNumber = useTestStore((state) => state.questionNumber);
  const testWordsNumber = useTestStore((state) => state.testWordsNumber);
  const increaseQuestionNumber = useTestStore((state) => state.increaseQuestionNumber);
  const addResult = useTestStore((state) => state.addResult);

  const setTestArray = useTestStore((state) => state.setTestArray);
  const resetQuestionNumber = useTestStore((state) => state.resetQuestionNumber);
  const resetResult = useTestStore((state) => state.resetResult);
  const setTestWordsNumber = useTestStore((state) => state.setTestWordsNumber);
  const setStartTime = useTestStore((state) => state.setStartTime);

  
  
  const result = useTestStore((state) => state.result);

  function checkAnswer(answer){
    let status;
    if (answer === testArray[questionNumber].variants[testArray[questionNumber].correctIndex]) {
      console.log('true');
      status = true;
    } else {
      console.log('false');
      status = false;
    }
    const ans = {word: answer, status: status};
    increaseQuestionNumber();
    addResult(ans)

    if (questionNumber + 1 === testWordsNumber) {
      setEndTime()
    }
  }

  function resetTest(t){
    console.log('start creating test array');
    console.log(storeTests[URLprefix])

    const checkingWords = generareRandomList(Object.keys(words), t.wordsCounter)
    const testArr = generateTestObject(checkingWords);
    resetQuestionNumber();
    resetResult();
    setTestWordsNumber(t.wordsCounter)
    setTestArray(testArr);
    setStartTime();
    console.log('creating test array done');
  }
  
  if (possibleURLs.find((el) => el === URLprefix) && testArray !== null) {
    if ((questionNumber + 1) <= testWordsNumber) {

      const variants = testArray[questionNumber].variants.map((v) => <button className='btn-m' onClick={(e)=> {checkAnswer(v)}}>{words[v]}</button>)
      
      return (
        <div className='content'>
          <div className='test-status-bar'>
            <button className='btn-s'>назад</button>
            <p>{questionNumber +1} / {testWordsNumber}</p>
          </div>
          <h4>{testArray[questionNumber].variants[testArray[questionNumber].correctIndex]}</h4>
          <div className='group'>{variants}</div>
        </div>
      )
    } else {
      let trueAnswersCount = result.filter((el) => {return el.status === true}).length;
      const testTime = (endTime.getTime() - startTime.getTime())/1000
      console.log(startTime, endTime)
      return (
        <div className='content'>
          <h2>резульататы теста "{URLprefix}"</h2>
          <div className='res-item'>
            <div className='res-numbers-item'>
              <div className='res-tip'>
                <img src={done}/>
                <p>результат</p>
              </div>
              <h3>{trueAnswersCount} / {testArray.length}</h3>
            </div>
            <div className='res-numbers-item'>
              <div className='res-tip'>
                <img src={clock}/>
                <p>время</p>
              </div>
              <h3>{testTime}</h3>
            </div>
          </div>
          <div className='res-item accordion-item'>
            <div className='res-item-header'>
              <img src={stat}/>
              <h2>stat</h2>
            </div>
            <img className='accordion-arrow' src={arrow}/>
          </div>
          <div className='group'>
            <button onClick={(e) => {resetTest(storeTests[URLprefix])}} className='btn-m accent'>пройти еще раз</button>
            <Link to='/'><button className='btn-m'>на главную страницу</button></Link>
          </div>
        </div>
      )
    }
  } else {
    return (
      <NotFound/>
    )
  }
}
