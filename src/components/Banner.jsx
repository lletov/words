import React from 'react'
import { Link } from 'react-router-dom'
import arrow from './../assets/arrow-right.svg'

export const Banner = () => {
    const raw = "call, calm, came, can, can't, car, card, care, carefully, carry, case, cat, catch, caught, cause, cell, chair, chance, change, chase, check, cheek, chest, child, children, chuckle, city, class, clean, clear, climb, close, clothes, coffee, cold, college, color, come, comment, complete, completel, computer, concern, confuse, consider, continue, control, conversatio, cool, corner, couch, could, couldn't, counter, couple, course, cover, crack, crazy, cross, crowd, cry, cup, cut, cute, dad, damn, dance, dark, date, daughter, day, dead, deal, dear, death, decide, deep, definitely, desk, did, didn't, die, different, dinner, direction, disappear, do, doctor, does, doesn't, dog, don't, done, door, doubt, down, drag, draw, dream, dress, drink, drive, drop, drove, dry, during"
    const translated = "вызов, спокойствие, пришел, может, не мочь, машина, карта, забота, осторожно, нести, случай, кот, ловить, пойманный, причина, клетка, стул, шанс, изменять, гнаться, проверять, щека, грудь, ребенок, дети, смеяться, город, сорт, чистый, прозрачный, взбираться, закрывать, одежда, кофе, холодный, колледж, цвет, приходить, комментарий, полный, полность, компьютер, беспокойство, путать, учитывать, продолжать, контроль, бесед, прохладный, угол, диван, мог, не мог, прилавок, пара, курс, крышка, трескаться, сумасшедший, крест, толпа, плакать, чашка, резать, милый, папа, проклятие, танцевать, темный, дата, дочь, день, мертвый, иметь дело, дорогой, смерть, решать, глубокий, определенно, рабочий стол, делал, не сделал, умереть, другой, ужин, направление, пропадать, делать, врач, делает, не делает, собака, не, сделанный, дверь, сомневаться, вниз, тащить, рисовать, мечтать, одеваться, напиток, водить машину, уронить, ехал, сухой, в течение"
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
