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
  
//削除ボタン
  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo.id !== targetTodo.id));
  };

//編集フォームの表示非表示
const [isEditable, setIsEditable] = useState(false);

const handleOpenEditForm = () => {
  setIsEditable(true);
};

const handleCloseEditForm = () => {
  setIsEditable(false);
};

const handleEditTodo = () => {
  handleCloseEditForm();
};

  return (
    <div>
      {!isEditable ? (
        <>
          <input
            type="text"
            label="タイトル"
            value={todoTitle}
            onChange={(e)=>handleSetTodoTitle(e)}
          />
          <button onClick={()=>handleAddTodo()}>作成</button>
        </>
      ) : (
        <EditForm />
      )}
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>ID:{todo.id}</span>
            <span>{todo.title}</span>
            <Filter />
            <button onClick={() => handleOpenEditForm(todo)}>編集</button>
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




