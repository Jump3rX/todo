import React from "react";

const TodoCard = (props) => {
  const { todo, todoIndex, handleDeleteToDo, handleCompleteToDo } = props;
  console.log(todo);
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons" disabled={todo.complete}>
        <button
          onClick={() => {
            handleCompleteToDo(todoIndex);
          }}
        >
          <h6>Done{todoIndex}</h6>
        </button>
        <button
          onClick={() => {
            handleDeleteToDo(todoIndex);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
