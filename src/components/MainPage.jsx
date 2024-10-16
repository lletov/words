import React from 'react'
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div className="content">
        <p>MainPage</p>
        <div className="group">
          <Link to='/tests'><button className="btn-m accent">проверить знания</button></Link>
          <Link to='/wordslist'><button className="btn-m">список слов</button></Link>
        </div>
        

    </div>
  )
}
