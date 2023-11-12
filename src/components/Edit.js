import React, { Component } from 'react';
import { BsSave } from 'react-icons/bs';

class Edit extends Component {
  constructor(props) {
    super(props);
  }

  handleSave = () => {
    this.props.handleSaveEditedTodo(this.props.editedTodoId);
  };

  render() {
    if (!this.props.isEditing) {
      return null;
    }

    return (
      <div className="todo-list-item">
        <input
          className="todo-input-item"
          type="text"
          value={this.props.editedTodoTitle}
          onChange={(e) => this.props.setEditedTodoTitle(e.target.value)}
        />
        <input
          value={this.props.editedTodoDescription}
          onChange={(e) => this.props.setEditedTodoDescription(e.target.value)}
        />
        <BsSave onClick={this.handleSave} title="Save" className="icon" />
      </div>
    );
  }
}

export default Edit;
