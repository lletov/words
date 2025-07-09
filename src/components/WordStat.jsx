import React from 'react'
import words from '../Words'

export const WordStat = ({result}) => {
    const resultList = result.map(r => 
        <div className='wordstat-str' key={r.word}>
            <h2>{r.word}</h2>
            <div 
                className='wordstat-str-marker' 
                style={r.status ? null : {backgroundColor: '#FF6363'}}>
            </div>
            <h2>{!r.status ? words[r.word].translation.join(', ') : null}</h2>
        </div>
    )
  return (
    <div className='wordstat'>{resultList}</div>
  )
}
