import React from "react";

const Input = ({ name, description, value, setValue }) => {
  return (
    <div className="todo-input-item">
      <label>{name}:</label>
      <input value={value} 
       type="text" 
       placeholder={description} 
       onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Input;
