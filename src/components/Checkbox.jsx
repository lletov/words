import React from 'react'
import { useState } from 'react';
import useTestStore from './../store/Store';
const statisticOn = useTestStore((state) => state.statisticOn);

export default function Checkbox({title, img, subtitle, state}) {
  const [isChecked, setIsChecked] = useState(localStorage.getItem('statisticOn'));
  function handleChange(){
    const newValue = isChecked === 'true' ? false : true
    {setIsChecked(newValue.toString());
    localStorage.setItem('statisticOn', newValue.toString())
    statisticOn

}
    if (newValue){localStorage.setItem('statistic', JSON.stringify({}))}
  }
  return (
    <div  className='test-card'>
        <p>Cтатистика</p>
        <input type='checkbox' checked={isChecked === 'true' ? true : false} onChange={handleChange}/>
    </div>
  )
}
