import React from 'react'
import useCountStore from './../store/Store'

export const View = () => {

  const inputNumber = useCountStore((state) => state.count)
  const object = useCountStore((state) => state.object)

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>

      {/* <div className='number'>{inputNumber}</div> */}
      {Object.values(object).map((el, index) => <p key={index}>{el}</p>)}
      {/* <div>{Object.values(object)}</div> */}
    </div>
    
  )
}
