import React from 'react'
import useTestStore from './../store/Store';
import { useParams } from 'react-router-dom';
import { NotFound } from './NotFound';

export const Test = () => {

  const bears = useTestStore((state) => state.bears)
  const wordsAmount = Number(useParams().wordsAmount);
  
  if (wordsAmount === bears) {
    return (
      <div>Test</div>
    )
  } else {
    return (
      <NotFound/>
    )
  }
  
}
