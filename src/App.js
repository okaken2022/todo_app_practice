import React, { useState } from 'react';
import EditForm from './EditForm';
import Filter from './Filter';


const App = () => {
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
    <div>
      <input
        type="text"
        label="タイトル"
        value={todoTitle}
        onChange={(e)=>handleSetTodoTitle}
      />
      
      <button onClick={()=>handleAddTodo}>作成</button>
      <EditForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <Filter />
            <button>編集</button>
            <button>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




