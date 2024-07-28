import React, { useState } from 'react'
import useTodoValueContext from '../utils/useTodoValueContext'
import useTodoActionContext from '../utils/useTodoActionsContext'

const Todo = () => {
  const todoList = useTodoValueContext()
  const actions = useTodoActionContext()
  const [todo, setTodo] = useState<string>('')
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(todo.trim()) {
      actions.add(todo)
      setTodo('')
    }
  }
  return (
    <>
      {todoList.map((item) => (
        <div key={item.id}>
          <h1 onClick={() => actions.toggle(item.id)} style={{textDecoration: item.done ? 'line-through': ''}}>{item.todo}</h1>
          <button onClick={() => actions.delete(item.id)}>X</button>
        </div>
      ))}
      <form onSubmit={addTodo}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button>+</button>
      </form>
    </>
  )
}

export default Todo