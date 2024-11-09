import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import TodoCard from "./components/TodoCard";
import { useState, useEffect } from "react";
function App() {
  // const todos = [
  //    { input: "Hello! Add your first todo!", complete: true },
  // //   { input: "Get the groceries!", complete: false },
  // //   { input: "Learn how to web design", complete: false },
  // //   { input: "Say hi to gran gran", complete: true },
  // ];

  const [todos, setTodos] = useState([]);

  const [selectedTab, setSelectedTab] = useState("All");

  function handleAddToDo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteToDo(index) {
    let newList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newList[index] = completedTodo;
    setTodos(newList);
    handleSaveData(newList);
  }

  function handleDeleteToDo(index) {
    let newList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newList);
    handleSaveData(newList);
  }
  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }
  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    } else {
      let db = JSON.parse(localStorage.getItem("todo-app"));
      setTodos(db.todos);
    }
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleDeleteToDo={handleDeleteToDo}
        handleCompleteToDo={handleCompleteToDo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handleAddToDo={handleAddToDo} />
    </>
  );
}

export default App;
