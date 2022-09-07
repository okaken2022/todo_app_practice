import React from "react";

const EditForm = ({newTitle, handleEditFormChanges, handleEditTodo, handleCloseEditForm}) => {
  return (
    <>
      <input
        type='text'
        label='新しいタイトル'
        value={newTitle}
        onChange={handleEditFormChanges}
      />
      <button onClick={()=>handleEditTodo}>編集を保存</button>
      <button onClick={()=>handleCloseEditForm}>キャンセル</button>
    </>
  );
};

export default EditForm;

