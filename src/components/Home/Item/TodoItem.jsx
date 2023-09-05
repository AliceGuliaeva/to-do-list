import React from 'react'
import Checkbox from './Checkbox'
import cn from 'classnames'
import RemoveIcon from './RemoveIcon'

const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <div className='flex justify-between w-full rounded-2xl bg-zinc-800'>
      <button className='flex items-center mb-4 p-5'
      onClick={() => changeTodo(todo._id)}>
          <Checkbox isCompleted={todo.isCompleted}/>
          <span className={cn({
            'line-through' : todo.isCompleted
          })}
          >{todo.title}
          </span>
      </button>
      <button onClick={() => removeTodo(todo._id)}>
        <RemoveIcon />
      </button>
    </div>
  )
}

export default TodoItem