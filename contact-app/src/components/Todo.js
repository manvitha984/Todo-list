import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className='btn btn-sm btn btn-danger' onClick={()=>{props.ondelete(props.todo)}}>Delete</button>
    </div>
  )
}

export default Todo
