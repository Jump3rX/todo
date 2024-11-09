import React, { useState } from "react";

const TodoInput = (props) => {
  const { handleAddToDo } = props;
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        className="add-task"
        placeholder="Add Task"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (!inputVal) {
            return;
          }
          handleAddToDo(inputVal);
          setInputVal("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
