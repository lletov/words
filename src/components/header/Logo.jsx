import React from 'react'
import quote from './../../assets/quote.png'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link 
        to='/'
        style={{textDecoration: 'none'}}
    >
        <div className='logo'>
            <img src={quote}/>
            <p>WORDS</p>
        </div>
    </Link>
    
  )
}
