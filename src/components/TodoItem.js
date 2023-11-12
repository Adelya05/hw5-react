import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";


class TodoItem extends React.Component {
  handleDelete = () => {
    if (this.props.isCompletedScreen) {
      this.props.handleDeleteCompletedTodo(this.props.id);
    } else {
      this.props.handleDeleteTodo(this.props.id);
    }
  }
  handleCommit = () => {
    this.props.handleCommit(this.props.id);
  }

  render() {
    const {
      todoTitle,
      todoDescription,
      handleDeleteTodo, 
      handleDeleteCompletedTodo,
      id,
      handleCommit,
      index,
      isCompletedScreen,
    } = this.props;

    return (
      <div className="todo-list-item">
        <div>
          <h3>{todoTitle}</h3>
          <p>{todoDescription}</p>
        </div>
        <div>
          <AiOutlineDelete onClick={this.handleDelete} title="Delete?" className="icon" />
  
          {isCompletedScreen ? (
            <IoMdRefresh className="icon" onClick={this.handleCommit} />
          ) : (
            <BsCheckLg
              onClick={this.handleCommit}
              title="Completed?"
              className=" check-icon"
            />
          )}
        </div>
      </div>
    );
  }
}

export default TodoItem;

