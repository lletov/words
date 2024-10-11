import React from 'react'
import { Link } from 'react-router-dom';
import useTestStore from './../store/Store';


export const Tests = () => {

  // const bears = useTestStore((state) => state.bears)
  const testVariantsNumbers = useTestStore((state) => state.testVariants)

  const testVariants = testVariantsNumbers.map(num => <Link to={`/tests/${num}`}>Test {num} слов</Link>)

  return (
    <div>
        
    {/* <Link to={`/tests/${bears}`}>Test 100</Link> */}
    {testVariants}
    
    </div>
  )
}
