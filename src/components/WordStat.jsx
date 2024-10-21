import React from 'react'

export const WordStat = ({result}) => {
    const resultList = result.map(r => 
        <div className='wordstat-str' key={r.word}>
            <h2>{r.word}</h2>
            <div 
                className='wordstat-str-marker' 
                style={r.status ? {backgroundColor: '#FFF'} : {backgroundColor: '#FF6363'}}>
            </div>
        </div>
    )
  return (
    <div className='wordstat'>{resultList}</div>
  )
}
