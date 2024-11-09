import React from "react";
import TodoCard from "./TodoCard";
const TodoList = (props) => {
  const { todos, selectedTab, handleDeleteToDo, handleCompleteToDo } = props;
  const tab = "All";
  const filteredTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filteredTodosList.map((todo, index) => {
        return (
          <TodoCard
            key={index}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            todo={todo}
            {...props}
          />
        );
      })}
    </>
  );
};

export default TodoList;
