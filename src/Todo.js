import React from 'react'


const Todo = ({todo}) => {
  return (
    <div>
      <select>
        <option>未着手</option>
        <option>進行中</option>
        <option>完了</option>
      </select>
      {todo.name}
    </div>
  )
}

export default Todo