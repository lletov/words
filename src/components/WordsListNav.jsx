import React from 'react'
import ScrollToTop from './../ScrollToTop';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import arrow from './../assets/arrow-right.svg'

export const WordsListNav = () => {

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
  const [currentLetter, setCurrentLetter] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  function scrollTop(){
    window.scrollTo(0, 0);
    setCurrentLetter(null)
  }

  const lettersLinks = letters.map((l) => {
    return <HashLink 
            to={"/wordslist#letter-" + l}
            style={{ textDecoration: 'none' }}
        >
            <div 
                className={'word-list-nav-letter'+ (currentLetter === l ? ' active' : '')} 
                onClick={() => setCurrentLetter(l)}
            >
                {l.toUpperCase()}
            </div>
        </HashLink>
  })

  return (
    <div className='word-list-nav'>
        {/* <input 
            className='letter-slider' 
            type='range' 
            min={0} 
            max={letters.length - 1}
            onChange={(e) => {setSliderCurrentLetter(letters[e.target.value])}}  
        /> */}
        <div className='word-list-letters-links'>{lettersLinks}</div>
        {/* <p>{currentLetter}</p> */}
        <button 
            className='scroll-top-btn' 
            style={{display: scrollPosition > 200 ? 'flex' : 'none'}} 
            onClick={() => scrollTop()}><img src={arrow}/></button>
    </div>
  )
}
