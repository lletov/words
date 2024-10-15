import React from 'react'

export const TestCard = ({title, subtitle, wordsCounter, time}) => {
  return (
    <div  className='test-card'>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{wordsCounter}</p>
        <p>{time}</p>
    </div>
  )
}
