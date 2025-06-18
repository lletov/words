import React, { useState } from 'react'
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
import { Accordion } from './Accordion';
import { WordStat } from './WordStat';
import { Breadcrumbs } from './Breadcrumbs';
import { setWordStatistic } from '../utils/LocalStorageUtils';

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

  const [testProgress, setTestProgress] = useState(1)

  if (!localStorage.getItem('statistic')) {
      localStorage.setItem('statistic', JSON.stringify({}))
  }

  function checkAnswer(answer){

    let status;
    if (answer === testArray[questionNumber].variants[testArray[questionNumber].correctIndex]) {
      console.log('true');
      status = true;
    } else {
      console.log('false');
      status = false;
    }
    const ans = {word: testArray[questionNumber].variants[testArray[questionNumber].correctIndex], status: status};
    increaseQuestionNumber();
    setTestProgress(questionNumber + 2);
    addResult(ans)
    setWordStatistic(ans.word, ans.status)

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
    setTestProgress(1);
    setStartTime();
    console.log('creating test array done');
  }
  
  if (possibleURLs.find((el) => el === URLprefix) && testArray !== null) {
    if ((questionNumber + 1) <= testWordsNumber) {

      const variants = testArray[questionNumber].variants.map((v) => 
        <button 
          key={v.toString()}
          className='btn-m test-btn' 
          onClick={(e)=> {checkAnswer(v)}}>
            {words[v].translation.join(', ')}
        </button>
      )
      return (
        <>
        <Breadcrumbs/>
        <div className='content test'>
          <div className='test-status-bar'>
            {/* <button className='btn-s'>назад</button> */}
            <p>{questionNumber +1} / {testWordsNumber}</p>
            <progress className='test-progress'max={testWordsNumber} value={testProgress}></progress>
          </div>
          <h4>{testArray[questionNumber].variants[testArray[questionNumber].correctIndex]}</h4>
          <div className='group test-variants'>
            <p>Выберите верный перевод</p>
            {variants}
          </div>
        </div>
        </>
      )
    } else {
      let trueAnswersCount = result.filter((el) => {return el.status === true}).length;
      const testTime = (endTime.getTime() - startTime.getTime())/1000
      const minutes = Math.floor(testTime / 60);
      const seconds = Math.floor(testTime - minutes * 60);
      let formatedMinutes;
      let formatedSeconds;
      minutes.toString().length < 2 
        ? formatedMinutes = '0'+ minutes
        : formatedMinutes = minutes
        seconds.toString().length < 2 
        ? formatedSeconds = '0'+ seconds
        : formatedSeconds = seconds
      return (
        <>
        <Breadcrumbs/>
        <div className='content'>
          <h5>Резульататы теста "{URLprefix}"</h5>
          <div className='res-item'>
            <div className='res-numbers-item'>
              <div className='res-tip'>
                <img src={done}/>
                <p>результат</p>
              </div>
              <h3>{trueAnswersCount} / {result.length}</h3>
            </div>
            <div className='res-numbers-item'>
              <div className='res-tip'>
                <img src={clock}/>
                <p>время</p>
              </div>
              <h3>{formatedMinutes}:{formatedSeconds} мин.</h3>
            </div>
          </div>
          {/* <div className='res-item accordion-item'>
            <div className='res-item-header'>
              <img src={stat}/>
              <h2>stat</h2>
            </div>
            <img className='accordion-arrow' src={arrow}/>
          </div> */}
          <Accordion
            title={'статистика'}
            icon={'stat'}
            content={<WordStat result={result}/>}
          />
          <div className='group'>
            <button onClick={(e) => {resetTest(storeTests[URLprefix])}} className='btn-m'>пройти еще раз</button>
            <Link to='/'><button className='btn-m accent'>на главную страницу</button></Link>
          </div>
        </div>
        </>
      )
    }
  } else {
    return (
      <NotFound/>
    )
  }
}
