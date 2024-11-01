import React from 'react'
import { DictionaryCard } from './DictionaryCard'
import { Link } from 'react-router-dom'

export const More = () => {
  return (
    <div className='section'>
        <div className='section-header'>
            <h5>Разное</h5>
            <p>Собрали полезные разделы в одном месте</p>
        </div>
        <div style={{width: '100%'}}>
          <Link 
              style={{ textDecoration: 'none' }} 
              to={'/wordslist'}
          ><DictionaryCard/></Link>
        </div>
        
    </div>
  )
}
