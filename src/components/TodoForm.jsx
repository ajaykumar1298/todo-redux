import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { todoAdd } from "../store/todoSlice";


function TodoForm() {
  let [inputText,setInputText]=useState("")
  let dispatch=useDispatch()

  let addTodo=()=>{
    dispatch(todoAdd(inputText))
    setInputText("")

  }
  return (
    <div className="todo-container">
      <input className="todo-input" type="text" value={inputText} placeholder="Enter your task name" onChange={(e)=>{
        setInputText(e.target.value)
      }} />
      <button className="todo-add-btn" type="button" onClick={addTodo}>Add todo</button>
    </div>
  )
}

export default TodoForm
