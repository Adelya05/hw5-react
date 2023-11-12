import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-input-item">
        <button onClick={this.props.onClick} className="primary-btn" type="button">
          Add
        </button>
      </div>
    );
  }
}

export default Button;
