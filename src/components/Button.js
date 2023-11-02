import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <div className="todo-input-item">
      <button onClick={onClick} className="primary-btn" type="button" >
        {text}
      </button>
    </div>
  );
};

export default Button;
