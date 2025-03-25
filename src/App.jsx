import { useState } from 'react'
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/todoList";

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<TodoForm/>
<TodoList/>
  </>
  )
}


export default App
