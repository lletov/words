import React from 'react'
import useCountStore from './../store/Store'
import { useState } from 'react'

export const Panel = () => {

    const increase = useCountStore((state) => state.setCount)
    const stateObject = useCountStore((state) => state.object)
    const setField = useCountStore((state) => state.setObjectField)
    const updField = useCountStore((state) => state.updateObjectField)
    const count = useCountStore((state) => state.count)

    const [inputList, setInputList] = useState([]);
    const [clickCounter, setClickCounter] = useState(0);

    const onAddBtnClick = event => {
        setClickCounter(clickCounter + 1);
        setInputList(inputList.concat(
            <input 
                key={inputList.length} 
                onChange={(e) =>{addObj(clickCounter, e.target.value)}}
            />));
        
        console.log('click');
      };

    const minRange = 20;
    const maxRange = 45;

    function changeHandler(value){
        // console.log(value);
        increase(value);
    }

    function addObj(id, value){
        stateObject[id]
            ? updField(id, value)
            : setField(id, value)
        setField(id, value);
        console.log(value);
    }

  return (
    
    <div>
        {/* <input 
            type='range'
            min={minRange}
            max={maxRange}
            value={count}
            onChange={(e) => {changeHandler(e.target.value)}}
        />
        <div className='input-range'>
            <p>{minRange}</p>
            <p>{maxRange}</p>
        </div> */}
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {inputList}
        </div>
        <button 
            onClick={onAddBtnClick}
        >+</button>
    </div>
  )
}
