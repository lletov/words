import React from 'react'
import { BigCard } from './BigCard'
import { Link } from 'react-router-dom'
import words from '../Words'
import useTestStore from './../store/Store';

export const More = () => {
  const storeTests = useTestStore((state) => state.tests)
  const wordsCounter = Object.keys(words).length
  const testsCounter = Object.keys(storeTests).length
  return (
    <div className='section'>
        <div className='section-header'>
            <h5>Основное</h5>
            <p>Собрали основные разделы в одном месте</p>
        </div>
        <div style={{width: '100%'}}>
          <Link 
              style={{ textDecoration: 'none' }} 
              to={'/wordslist'}
          ><BigCard 
            title='Словарь' 
            text='Все слова, которые могут встретиться в тесте' 
            counter={wordsCounter} 
            param='слов' 
            icon='dict'
          /></Link>
        </div>
        <div style={{width: '100%'}}>
          <Link 
              style={{ textDecoration: 'none' }} 
              to={'/tests'}
          ><BigCard 
            title='Тесты' 
            text='Тесты для проверки знаний' 
            counter={testsCounter} 
            param='вариантов' 
            icon='tests'
          /></Link>
        </div>
    </div>
  )
}

