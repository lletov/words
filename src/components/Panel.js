import React from 'react'
import useCountStore from './../store/Store'

export const Panel = () => {

    const increase = useCountStore((state) => state.setCount)
    const count = useCountStore((state) => state.count)

    const minRange = 20;
    const maxRange = 45;

    function changeHandler(value){
        // console.log(value);
        increase(value);
    }
  return (
    
    <div>
        <input 
            type='range'
            min={minRange}
            max={maxRange}
            value={count}
            onChange={(e) => {changeHandler(e.target.value)}}
        />
        <div className='input-range'>
            <p>{minRange}</p>
            <p>{maxRange}</p>
        </div>
    </div>
  )
}
