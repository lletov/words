import React from 'react'
import useCountStore from './../store/Store'
import { useState } from 'react'
import { GroupInput } from './GroupInput'

export const Panel = () => {

    const increase = useCountStore((state) => state.setCount);
    const stateObject = useCountStore((state) => state.object);
    const setGroup = useCountStore((state) => state.setObjectGroup);
    // const updField = useCountStore((state) => state.updateObjectField)
    const count = useCountStore((state) => state.count);

    // const [inputList, setInputList] = useState([]);
    const [groupsList, setGroupsList] = useState([]);
    const [groupClickCounter, setGroupClickCounter] = useState(0);
    const [pointClickCounter, setPointClickCounter] = useState(0);

    function addGroupHandleClick(e, value){
        setGroupsList(groupsList.concat(
            <GroupInput/>
        ));
        setGroup('group' + groupClickCounter, null);
        setGroupClickCounter(groupClickCounter + 1);
    }

    // const onAddBtnClick = event => {
    //     setClickCounter(clickCounter + 1);
    //     setInputList(inputList.concat(
    //         <input 
    //             key={inputList.length} 
    //             onChange={(e) =>{addObj(clickCounter, e.target.value)}}
    //         />));
        
    //     console.log('click');
    //   };

    // const minRange = 20;
    // const maxRange = 45;

    // function changeHandler(value){
    //     // console.log(value);
    //     increase(value);
    // }

    // function inputOnchange(id, value){
    //     // stateObject[id]
    //     //     ? updField(id, value)
    //     //     : updField(id, value)
    //     setGroup(clickCounter, e.target.value)
    //     console.log(value);
    // }

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
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            {groupsList}
        </div>
        <button 
            onClick={addGroupHandleClick}
        >+ Group</button>
    </div>
  )
}
