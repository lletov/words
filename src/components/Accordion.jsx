import React from 'react'
import stat from './../assets/stat.png'
import arrow from './../assets/arrow-right.svg'
import { useState, useRef } from 'react'

export const Accordion = ({title, content, icon}) => {

  const [isOpen, setIsOpen] = useState(false);
  const contentHeight = useRef()

  const imgURL = {
    "stat": stat,
  }

  function handleClick(){
    setIsOpen(!isOpen)
  }

  return (
    <div className='accordion'>
        <div className='accordion-header' onClick={handleClick}>
            <div className='res-item-header'>
                <img src={imgURL[icon]}/>
                <h2>{title}</h2>
            </div>
            <img className={`accordion-arrow ${isOpen ? 'active' : ''}`}  src={arrow}/>
        </div>
        <div ref={contentHeight} className="accordion-content" style={
          isOpen
          ? { height: contentHeight.current.scrollHeight}
          : { height: "0px"}
         }>
            <div style={{padding: '24px', paddingTop: '0px'}}>{content}</div>
         </div>
    </div>
  )
}