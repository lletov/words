import React from 'react'
import { Link } from 'react-router-dom'
import arrow from './../assets/arrow-right.svg'

export const Banner = () => {
    const raw = "each, ear, early, easily, easy, eat, edge, either, else, empty, end, enjoy, enough, enter, entire, escape, especially, even, evening, eventually, ever, every, everyone, everything, exactly, except, excite, exclaim, excuse, expect, explain, expressio, eye, eyebrow, face, fact, fall, family, far, fast, father, fault, favorite, fear, feel, feet, fell, felt, few, field, fight, figure, fill, finally, find, fine, finger, finish, fire, first, fit, five, fix, flash, flip, floor, fly, focus, follow, food, foot, for, force, forget, form, forward, found, four, free, friend, from, front, frown, fuck, full, fun, funny, further"
    const translated = "каждый, ухо, рано, легко, легкий, есть, край, или, еще, пустой, конец, наслаждаться, достаточно, входить, весь, побег, особенно, даже, вечер, в конце концов, всегда, каждый, каждый, все, точно, кроме, возбуждать, восклицать, извинение, ожидать, объяснять, выражени, глаз, бровь, лицо, факт, падать, семья, далеко, быстрый, отец, вина, любимый, страх, чувствовать, ноги, упал, чувствовать себя, немного, поле, драться, фигура, наполнять, окончательно, находить, отлично, палец, заканчивать, огонь, первый, соответствовать, пять, исправить, вспышка, подбросить, пол, летать, фокус, следовать, еда, ступня, для, сила, забывать, форма, вперед, найденный, четыре, бесплатно, друг, от, передний, хмуриться, заниматься сек*ом, полный, веселье, забавный, дальше"
    function set2(raw, translated){
        const rawList = raw.split(', ');
        const translatedList = translated.split(', ');
        const resObj = [];
        for (let i=0;i<rawList.length;i++){
           resObj.push([rawList[i]] + ': ' + '"' + translatedList[i] + '"')
        }
        console.log(resObj)
    }
    set2(raw, translated)
    

  return (
    <div className='banner'>
        <div className='group'>
            <h4>WORDS - онлайн тестирование на знание английского</h4>
            <p>проверьте свои знания языка при помощи онлайн теста, результат покажем сразу</p>
        </div>
        <Link to='/tests'><button className="btn-m accent">пройти тест</button></Link>
        <div className='banner-more-btn'>
            <p>Больше возможностей</p>
            <img src={arrow}/>
        </div>
    </div>
  )
}
