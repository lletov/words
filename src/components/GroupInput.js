import React from 'react'
import { useState, useLayoutEffect } from 'react';

export const GroupInput = () => {

    useLayoutEffect(() => {
        // add first point in points list before rendering
        addPointHandleClick()
    }, []);

    const [clickCounter, setClickCounter] = useState(0);
    const [pointsList, setPointsList] = useState([]);

    function addPointHandleClick(e){
        setPointsList(pointsList.concat(
            <input 
                key={pointsList.length} 
                onChange={(e) =>{console.log(e.target.value)}}
            />
        ));
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '24px'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {pointsList}
        </div>
        <button
            style={{width: '60px'}}
            onClick={(e) =>{addPointHandleClick(e)}}
        >+Point</button>
    </div>
  )
}
