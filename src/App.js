import React, { Component } from 'react';
import './App.css';

import Input from './components/Input';
import Button from './components/Button';
import Switcher from './components/Switcher';
import TodoItem from './components/TodoItem';
import Clear from './components/Clear';
import Edit from './components/Edit';
import { BiEdit } from 'react-icons/bi';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newTodoTitle: '',
      newDescription: '',
      allTodos: [],
      completedTodos: [],
      isCompletedScreen: false,
      isEditing: false,
      editedTodoId: null,
      editedTodoTitle: '',
      editedTodoDescription: '',
    };
  }

  handleEditTodo = (id) => {
    const todoToEdit = this.state.allTodos.find((item) => item.id === id);
    this.setState({
      editedTodoId: id,
      editedTodoTitle: todoToEdit.title,
      editedTodoDescription: todoToEdit.description,
      isEditing: true,
    });
  };

  handleEditedTodo = () => {
    const updatedTodos = this.state.allTodos.map((item) => {
      if (item.id === this.state.editedTodoId) {
        return {
          ...item,
          title: this.state.editedTodoTitle,
          description: this.state.editedTodoDescription,
        };
      }
      return item;
    });

    this.setState({
      allTodos: updatedTodos,
      isEditing: false,
      editedTodoId: null,
      editedTodoTitle: '',
      editedTodoDescription: '',
    });
  };

  handleAddNewTodo = () => {
    if (this.state.newDescription && this.state.newTodoTitle) {
      const date = new Date();
      let newTodoObj = {
        id: date.getMilliseconds(),
        title: this.state.newTodoTitle,
        description: this.state.newDescription,
      };

      let updatedTodoArr = [...this.state.allTodos];
      updatedTodoArr.push(newTodoObj);

      this.setState({
        allTodos: updatedTodoArr,
        newTodoTitle: '',
        newDescription: '',
      });
    }
  };

  handleCommit = (index) => {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth();
    let yyyy = date.getFullYear();
    let hh = date.getHours();
    let minutes = date.getMinutes();
    let ss = date.getSeconds();
    let finalDate =
     dd + '-' + mm + '-' + yyyy + '-' + ' at' + hh + ':' + minutes + ':' + ss;

    let filteredTodo = {
      ...this.state.allTodos.find((item) => item.id === index),
      completed_at: finalDate,
    };

    let updatedList = [...this.state.completedTodos, filteredTodo];

    this.setState({
      completedTodos: updatedList,
    });
    this.handleDeleteTodo(index);
  };

  handleToDo = (index) => {
    let todo = {
      ...this.state.completedTodos.find((item) => item.id === index),
    };

    this.setState({
      allTodos: [...this.state.allTodos, todo],
    });

    this.handleDeleteCompletedTodo(index);
  };

  handleDeleteTodo = (id) => {
    this.setState({
      allTodos: this.state.allTodos.filter((item) => item.id !== id),
    });
  };

  handleDeleteCompletedTodo = (id) => {
    this.setState({
      completedTodos: this.state.completedTodos.filter((item) => item.id !== id),
    });
  };

  handleClear = () => {
    this.setState({
      allTodos: [],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My Todos</h1>
        <div className="todo-wrapper">
          <div className="todo-input">
            <Input
              value={this.state.newTodoTitle}
              setValue={(value) => this.setState({ newTodoTitle: value })}
              name={'Title'}
              description={"What's the title of your To Do?"}
            />
            <Input
              value={this.state.newDescription}
              setValue={(value) => this.setState({ newDescription: value })}
              name={'Description'}
              description={"What's the description of your To Do?"}
            />
            <Button onClick={this.handleAddNewTodo} />
          </div>
          <div className="clear-wrapper">
            <Clear handleClear={this.handleClear} />
            <Switcher
              isCompletedScreen={this.state.isCompletedScreen}
              setIsCompletedScreen={(value) => this.setState({ isCompletedScreen: value })}
            />
          </div>

          <div className="todo-list">
            {this.state.isCompletedScreen === true
              ? this.state.completedTodos.map((item, index) => (
                  <div key={index}>
                    <TodoItem
                      handleCommit={this.handleToDo}
                      index={index}
                      handleDeleteTodo={this.handleDeleteTodo}
                      id={item.id}
                      isCompletedScreen={this.state.isCompletedScreen}
                      todoTitle={item.title}
                      todoDescription={item.description}
                      handleDeleteCompletedTodo={this.handleDeleteCompletedTodo}
                     
                    />
                  </div>
                ))
              : this.state.allTodos.map((item, index) => (
                  <div key={index}>
                    <TodoItem
                      handleCommit={this.handleCommit}
                      index={index}
                      handleDeleteTodo={this.handleDeleteTodo}
                      isCompletedScreen={this.state.isCompletedScreen}
                      id={item.id}
                      todoTitle={item.title}
                      todoDescription={item.description}
                      handleDeleteCompletedTodo={this.handleDeleteCompletedTodo}
                    />
                    {this.state.isEditing && this.state.editedTodoId === item.id && (
                      <Edit
                        isEditing={this.state.isEditing}
                        editedTodoId={this.state.editedTodoId}
                        editedTodoTitle={this.state.editedTodoTitle}
                        editedTodoDescription={this.state.editedTodoDescription}
                        setEditedTodoTitle={(value) => this.setState({ editedTodoTitle: value })}
                        setEditedTodoDescription={(value) =>
                          this.setState({ editedTodoDescription: value })
                        }
                        handleSaveEditedTodo={this.handleEditedTodo}
                      />
                    )}
                    <BiEdit
                      onClick={() => this.handleEditTodo(item.id)}
                      title="Edit"
                      className="icon-edit"
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;







