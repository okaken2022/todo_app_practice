import React, { useState } from "react";

const InputForm = () => {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState("")
  const [todoId, setTodoId] = useState(1)

  const handleSetTodoTitle = e => {
    setTodoTitle(e.target.value)
  }


  const resetTodoTitle = () => { setTodoTitle("") }

  const handleAddTodo = () => {
    setTodos([...todos, { id: todoId, title: todoTitle , status: 'notStarted'}])
    setTodoId(todoId + 1)
    resetTodoTitle()
  }

  return (
    <>
        <div>
          <input
            type="text"
            label="タイトル"
            value={todoTitle}
            onChange={()=>handleSetTodoTitle}
          />
          <button onClick={()=>handleAddTodo}>作成</button>
        </div>
    </>
  )
};

export default InputForm;
