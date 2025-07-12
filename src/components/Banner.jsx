import React from 'react'
import { Link } from 'react-router-dom'
import arrow from './../assets/arrow-right.svg'
import banner from './../assets/banner.svg'
import { motion } from 'framer-motion'

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
        <motion.img 
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{delay: 0.1, type: 'spring', stiffness: 180, bounce: 0.25, mass: 0.8}}
            src={banner}
        />
        <motion.div className='group'
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{delay: 0.3, type: 'spring'}}
        >
            <h4>WORDS - онлайн тестирование на знание английского</h4>
            <p style={{color: '#3676e2'}}>проверьте свои знания языка при помощи онлайн теста, результат покажем сразу</p>
        </motion.div>
        <Link to='/tests'><motion.button
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{delay: 0.45, type: 'spring'}}
            className="btn-m accent">пройти тест</motion.button></Link>
        <div className='banner-more-btn'>
            <p>Больше возможностей</p>
            <img src={arrow}/>
        </div>
    </div>
  )
}
