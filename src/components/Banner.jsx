import React from 'react'
import { Link } from 'react-router-dom'
import arrow from './../assets/arrow-right.svg'

export const Banner = () => {
    const raw = "game, gasp, gave, gaze, gently, get, giggle, girl, girlfriend, give, given, glad, glance, glare, glass, go, God, gone, gonna, good, got, gotten, grab, great, green, greet, grey, grin, grip, groan, ground, group, grow, guard, guess, gun, guy, had, hadn't, hair, half, hall, hallway, hand, handle, hang, happen, happy, hard, has, hate, have, haven't, he, he'd, he's, head, hear, heard, heart, heavy, held, hell, hello, help, her, here, herself, hey, hi, hide, high, him, himself, his, hit, hold, home, hope, horse, hospital, hot, hour, house, how, however, hug, huge, huh, human, hundred, hung, hurry, hurt"
    const translated = "игра, вздохнуть, отдал, взгляд, нежно, получать, хихикать, девочка, подруга, давать, данный, радостный, взглянуть мельком, блики, стекло, идти, Бог, ушел, собираюсь, хороший, получил, получил, схватить, большой, зеленый, приветствовать, серый, ухмылка, схватить, стон, земля, группа, расти, сторожить, предполагать, пистолет, парень, имел, не имел, волосы, половина, зал, коридор, рука, ручка, вешать, случаться, счастливый, жесткий, имеет, ненавидеть, иметь, нет, он, он бы, он, голова, слышать, слышал, сердце, тяжелый, держал, ад, привет, помощь, ее, здесь, себя, привет, привет, скрывать, высокий, ему, сам, его, ударять, держать, дом, надеяться, лошадь, больница, горячий, час, дом, как, однако, обнимать, огромный, хм, человек, сто, висит, торопиться, повредить"
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
