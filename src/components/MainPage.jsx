import React from 'react'
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div>
        MainPage
        <Link to='/tests'>Tests</Link>
        <Link to='/wordslist'>Words list</Link>

    </div>
  )
}
