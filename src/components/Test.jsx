import React from 'react'
import useTestStore from './../store/Store';
import { useParams } from 'react-router-dom';
import { NotFound } from './NotFound';

export const Test = () => {

  const wordsAmount = Number(useParams().wordsAmount);
  const testVariantsNumbers = useTestStore((state) => state.testVariants)

  if (testVariantsNumbers.find((el) => el === wordsAmount)) {
    return (
      <div>Test {wordsAmount}</div>
    )
  } else {
    return (
      <NotFound/>
    )
  }
}
