import React, { useState } from 'react'
import InputTodo from './InputTodo'
import TodoItem from './Item/TodoItem'
const data = [
    {
        _id: 'fgdf',
        title:'Finish the essay',
        isCompleted: false,
    },
    {
        _id: 'dfhgbn',
        title:'Read next chapter of the book',
        isCompleted: false,
    },
    {
        _id: 'lkmk4',
        title:'Send the finished assignment',
        isCompleted: false,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)
    const [title, setTitle] = useState('')

    const changeTodo = id => {
        const copy =[...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => {
        const copy =[...todos]
        setTodos(copy.filter(t => t._id !=id))
    }

    const addTodo =title => {
        setTodos([...todos,{
        _id: new Date(),
        title,
        isCompleted: false
    }])
    setTitle('')
    }

  return (
    <div className=' text-white w-4/5 mx-auto'>
        <h1 className='text-2xl font-bold text-center mb-4'>Todo for Junior</h1>
        {todos.map(todo =>(
        <TodoItem key={todo._id} todo={todo} changeTodo = {changeTodo} removeTodo = {removeTodo}/>))}
        <InputTodo addTodo = {addTodo} setTitle = {setTitle} title = {title}/>
    </div>
  )
}

export default Home