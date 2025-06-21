import React from 'react'
import { useState } from 'react';
import useTestStore from './../store/Store';
import { Switch } from "@/components/components/ui/switch"

export default function Checkbox({title, img, subtitle, state}) {

  const statisticOn = useTestStore((state) => state.statisticOn);
  const setStatisticOn = useTestStore((state) => state.setStatisticOn);

  function handleChange(){
    const newValue = statisticOn === 'true' ? false : true
    {setStatisticOn(newValue.toString());
    localStorage.setItem('statisticOn', newValue.toString())
}
    if (newValue == false){localStorage.setItem('statistic', JSON.stringify({}))}
  }
  return (
    <div  className='test-card'>
        <p>Cтатистика</p>
        <input type='checkbox' checked={statisticOn === 'true' ? true : false} onChange={handleChange}/>
        <Switch 
            checked={statisticOn === 'true' ? true : false}
            onCheckedChange={handleChange}
        />
    </div>
  )
}
