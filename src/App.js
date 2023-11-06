import React, { useEffect, useState } from "react";
import "./App.css";

import Input from "./components/Input";
import Button from "./components/Button";
import Switcher from "./components/Switcher";
import TodoItem from "./components/TodoItem";
import Clear from "./components/Clear";

function App() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

    useEffect(() => {
    const fetchTodos = async () => {
      await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((res) => console.log(res));
    };
    fetchTodos();
  }, []);

  const handleAddNewTodo = () => {
    if (newDescription && newTodoTitle) {
      const date = new Date();
      let newTodoObj = {
        id: date.getMilliseconds(),
        title: newTodoTitle,
        description: newDescription,
      };

      let updatedTodoArr = [...allTodos];
      updatedTodoArr.push(newTodoObj);

      setAllTodos(updatedTodoArr);

      setNewTodoTitle("");
      setNewDescription("");
    }
  };

  const handleCommit = (index) => {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth();
    let yyyy = date.getFullYear();
    let hh = date.getHours();
    let minutes = date.getMinutes();
    let ss = date.getSeconds();
    let finalDate = `${dd}-${mm}-${yyyy} at ${hh}:${minutes}:${ss}`;

    let filteredTodo = {
      ...allTodos.find((item) => item.id === index),
      completed_at: finalDate,
    };

    let updatedList = [...completedTodos, filteredTodo];
    console.log(updatedList);
    setCompletedTodos(updatedList);

    handleDeleteTodo(index);
  };

  const handleToDo = (index) => {
    let todo = {
      ...completedTodos.find((item) => item.id === index),
    };

    setAllTodos([...allTodos, todo]);
    setCompletedTodos(completedTodos.filter((item) => item.id !== index));
  };

  const handleDeleteTodo = (id) => {
    setAllTodos(allTodos.filter((item, index) => item.id !== id));
  };

  const handleClear = () => {
    setAllTodos([]);
  };

  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <Input
            value={newTodoTitle}
            setValue={setNewTodoTitle}
            name={"Title"}
            description={"What's the title of your To Do?"}
          />
          <Input
            value={newDescription}
            setValue={setNewDescription}
            name={"Description"}
            description={"What's the description of your To Do?"}
          />
          <Button onClick={handleAddNewTodo} />
        </div>
        <div className="clear-wrapper">
          <Clear handleClear={handleClear} />
          <Switcher
            isCompletedScreen={isCompletedScreen}
            setIsCompletedScreen={setIsCompletedScreen}
          />
        </div>
        <div className="todo-list">
          {isCompletedScreen === true
            ? completedTodos?.map((item, index) => (
                <TodoItem
                  handleCommit={handleToDo}
                  key={index}
                  index={index}
                  handleDeleteTodo={handleDeleteTodo}
                  id={item.id}
                  isCompletedScreen={isCompletedScreen}
                  todoTitle={item.title}
                  todoDescription={item.description}
                />
              ))
            : allTodos.map((item, index) => (
                <TodoItem
                  handleCommit={handleCommit}
                  key={index}
                  index={index}
                  handleDeleteTodo={handleDeleteTodo}
                  isCompletedScreen={isCompletedScreen}
                  id={item.id}
                  todoTitle={item.title}
                  todoDescription={item.description}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;   