import React from 'react'
import useTestStore from './../store/Store';
import { useParams } from 'react-router-dom';
import { NotFound } from './NotFound';
import words from '../Words';

export const Test = () => {

  const URLprefix = useParams().wordsAmount;
  const storeTests = useTestStore((state) => state.tests)
  const possibleURLs = Object.keys(storeTests);

  const testArray = useTestStore((state) => state.testArray)

  const questionNumber = useTestStore((state) => state.questionNumber);
  const testWordsNumber = useTestStore((state) => state.testWordsNumber);
  const increaseQuestionNumber = useTestStore((state) => state.increaseQuestionNumber);
  const addStat = useTestStore((state) => state.addStat);
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
    addStat(ans)

  }
  
  if (possibleURLs.find((el) => el === URLprefix) && testArray !== null) {
    if ((questionNumber + 1) <= testWordsNumber) {

      const variants = testArray[questionNumber].variants.map(v => <button onClick={(e)=> {checkAnswer(v)}}>{words[v]}</button>)

      return (
        <div>
          <p>{questionNumber +1} / {testWordsNumber}</p>
          <p>{testArray[questionNumber].variants[testArray[questionNumber].correctIndex]}</p>
          {variants}
        </div>
      )
    } else {
      console.log(Object.values(result.stat))
      let trueAnswersCount = Object.values(result.stat).filter((el) => {return el.status === true}).length;

      return (
        <div>{trueAnswersCount}</div>
      )
    }
  } else {
    return (
      <NotFound/>
    )
  }
}
