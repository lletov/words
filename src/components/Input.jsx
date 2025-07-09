import React from 'react'
import { useState } from 'react';
import arrow from './../assets/arrow-right.svg'
import { X } from 'lucide-react';

export default function Input({maxLength, text, handleInput, clearInput}) {

  return (
    <div className='input-wrapper'>
        <input
            type='text'
            value={text}
            onChange={(e) => handleInput(e.target.value)}
            placeholder='Поиск'
            maxLength={maxLength}
        />
        <section className='input-btns'>
            <p>{`${text.length}/${maxLength}`}</p>
            {text.length > 0 && <button onClick={(e) => clearInput(text)}><X className='size-4 cursor-pointer'/></button>}
        </section>
    </div>
  )
}