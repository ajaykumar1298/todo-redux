import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import SaveIcon from '@mui/icons-material/Save';
import { todoDone, todoRemove, todoUpdate } from "../store/todoSlice";
function List({todo}) {
  let dispatch=useDispatch()
  let [isEditText,setIsEditText]=useState(false)
  let [editText,setEditText]=useState(todo.text)
  return (
    
      <div className={`todo-list-item ${todo.done?"red":""}`}>
            <input className={`todo-item-text ${isEditText?"input-text-edited":""}`} type="text" value={editText} disabled={!isEditText} onChange={(e)=>setEditText(e.target.value)}/>
            {todo.done?<span className="todo-cancel-icon" onClick={()=>{
              dispatch(todoDone(todo))
            }}>
              <CancelIcon/>
            </span>:<span className="todo-check-icon" onClick={()=>{
              dispatch(todoDone(todo))
            }}>
              <CheckCircleIcon/>
            </span>}
            <span className={`todo-edit-icon `}  onClick={()=>{
              if(isEditText){
                setIsEditText(false)
                let updatedtodo={...todo,text:editText}
                dispatch(todoUpdate(updatedtodo))
              }else{
                setIsEditText(true)
              }
            }}>
              {isEditText?<SaveIcon/>:<EditIcon/>}
            </span>
            
            <span className="todo-remove-icon" onClick={()=>{
              dispatch(todoRemove(todo))
            }}>
              <DeleteIcon/>
            </span>
          </div>

  )
}

export default List
