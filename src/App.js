import React, { useState } from "react";
import "./App.css";

import Input from "./components/Input";
import Button from "./components/Button";
import Switcher from "./components/Switcher";
import TodoItem from "./components/TodoItem";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (title && description) {
      const newTask = {
        title: title,
        description: description
      };

      setTodos([...todos, newTask]);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
         
          <Input
            name={"Title"}
            description={"What's the title of your To Do?"}
            value={title}
            setValue={setTitle} 
          />

          <Input
            name={"Description"}
            description={"What's the description of your To Do?"}
            value={description}
            setValue={setDescription} 
            
          />
          <Button onClick={addTodo} text="Add" />
        </div>
        <Switcher />
        <div className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem key={index} title={todo.title} description={todo.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;




  // const [count, setCount] = useState(0);
  // const [input, setInput] = useState(0);

  // const handleIncrement = () => {
  //   setCount((count) => count + 1);
  // };

  // const handleDecrement = () => {
  //   setCount((count) => (count === 0 ? count : count - 1));
  // };

  // const handleIncrementByAmount = () => {
  //   setCount(input);
  // };

  // const handleChangeInput = (event) => {
  //   setInput(event.target.value);
  // };


//  {/* <div style={{ display: "flex", gap: "20px" }}>
//         <button onClick={handleDecrement}>-</button>
//         <div>{count}</div>
//         <button onClick={handleIncrement}>+</button>
//         <input value={input} onChange={handleChangeInput} type="number" />
//         <button onClick={handleIncrementByAmount}>incrementByAmount</button>
//       </div> */}