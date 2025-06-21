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
    <div  className='test-card' style={{width: '100%'}}>
        <div className='test-card-content' style={{width: '100%'}}>
            <div className='test-card-header'>
              <div className='test-card-title'>
                {/* <img src={imgURL[img]}/> */}
                <h3>Cтатистика</h3>
              </div>
              <p>Собираем статистику ваших ответов на этом устройстве</p>
            </div>
            <div className='test-card-tips' style={{justifyContent: 'space-between'}}>
                <p>Статус: {statisticOn === 'true' ? 'Включено' : 'Отключено'}</p>
                <Switch
                    checked={statisticOn === 'true' ? true : false}
                    onCheckedChange={handleChange}
                />
            </div>
        </div>
    </div>
  )
}
