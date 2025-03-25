import React, { useState } from 'react'
import { useSelector } from "react-redux"

import List from "./List";
function TodoList() {
  let todos=useSelector(state=>state.todos)
  if(todos.length==0)return ""

  return (
    <div className="todo-list-items">

      {todos.map((todo)=>(
          <List todo={todo} key={todo.id} />
      ))}

      
    </div>
  )
}

export default TodoList
