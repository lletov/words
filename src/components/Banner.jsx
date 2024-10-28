import React from 'react'
import { Link } from 'react-router-dom'
import arrow from './../assets/arrow-right.svg'

export const Banner = () => {
    const raw = ""
    const translated = ""
    function set2(raw, translated){
        const rawList = raw.split(', ');
        const translatedList = translated.split(', ');
        const resObj = [];
        for (let i=0;i<rawList.length;i++){
           resObj.push([rawList[i]] + ': ' + '"' + translatedList[i] + '"')
        }
        console.log(resObj)
    }
    set2(raw, translated)
    

  return (
    <div className='banner'>
        <div className='group'>
            <h4>WORDS - онлайн тестирование на знание английского</h4>
            <p>проверьте свои знания языка при помощи онлайн теста, результат покажем сразу</p>
        </div>
        <Link to='/tests'><button className="btn-m accent">пройти тест</button></Link>
        <div className='banner-more-btn'>
            <p>Больше возможностей</p>
            <img src={arrow}/>
        </div>
    </div>
  )
}
