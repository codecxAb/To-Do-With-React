import React from "react";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const todoRef = useRef("");
  const [todoLst, settodoLst] = useState([]);

  //logic for the add handeller button
  function addBtnhandeller() {
    const newTodo = todoRef.current.value;
    if (newTodo.trim() !== "") {
      settodoLst((prev) => [...prev, newTodo]);
    }
    todoRef.current.value = "";
    // console.log(todoLst);
  }

  //logic for the delete handeller button
  function deleteHandeller(index) {
    settodoLst((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="bg-zinc-900 w-full min-h-screen text-white flex flex-col items-center ">
      <div className="todo-add flex w-full justify-center gap-3 bg-zinc-900 pt-20">
        <input
          ref={todoRef}
          className="bg-zinc-800 w-1/2 rounded-xl h-12 px-5 "
          type="text"
          placeholder="Add New Todo"
        />
        <button
          onClick={addBtnhandeller}
          className="px-5 py-2 bg-orange-500 text-white rounded-xl"
        >
          Add
        </button>
      </div>
      <div className="todo-list text-white bg-zinc-700 w-1/3  rounded flex mt-5 justify-center">
        <ul className="bg-zinc-700 w-1/2 flex flex-col items-center min-h-96 gap-3">
          <h1 className="text-xl font-bold text-orange-500">Todo List</h1>
          {todoLst.map((todo, i) => (
            <li
              className="text-white bg-zinc-600 w-96 flex justify-between items-center rounded py-2 px-2"
              key={i}
            >
              <i>{i + 1})</i>
              <p>{todo}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => deleteHandeller(i)}
                  className="px-3 py-1 bg-red-500 rounded "
                >
                  Delete
                </button>
                <button className="px-3 py-1 bg-yellow-500 rounded">
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
