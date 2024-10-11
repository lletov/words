import React from 'react'
import { Link } from 'react-router-dom';
import useTestStore from './../store/Store';


export const Tests = () => {

  const bears = useTestStore((state) => state.bears)

  return (
    <div>
    <Link to={`/tests/${bears}`}>Test 100</Link>
    
    </div>
  )
}
