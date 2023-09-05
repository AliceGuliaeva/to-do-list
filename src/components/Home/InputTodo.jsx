import React, { useState } from 'react'

const InputTodo = ({addTodo, setTitle, title}) => {
  return (
    <div className=' mt-20'>
        <input type="text"
         onChange=
         {e => setTitle(e.target.value)}
          value= {title} 
         onKeyDown =
         {e => e.key === 'Enter' && addTodo(title)}
         placeholder = 'Add a task'
          className='w-full rounded-2xl bg-zinc-800 p-3'/>
    </div>
  )
}

export default InputTodo