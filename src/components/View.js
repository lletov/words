import React from 'react'
import useCountStore from './../store/Store'

export const View = () => {

  const inputNumber = useCountStore((state) => state.count)

  return (
    <div className='number'>{inputNumber}</div>
  )
}
