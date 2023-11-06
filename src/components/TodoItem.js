// import React from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import { BsCheckLg } from "react-icons/bs";
// import { IoMdRefresh } from "react-icons/io";

// const TodoItem = ({
//   todoTitle,
//   todoDescription,
//   handleDeleteTodo,
//   id,
//   handleCommit,
//   index,
//   isCompletedScreen,
// }) => {
//   return (
//     <div className="todo-list-item">
//       <div>
//         <h3>{todoTitle}</h3>
//         <p>{todoDescription}</p>
//       </div>
//       <div>
//         <AiOutlineDelete onClick={() => handleDeleteTodo(id)} title="Delete?" className="icon" />

//         {isCompletedScreen ? (
//           <IoMdRefresh className="icon" onClick={() => handleCommit(id)} />
//         ) : (
//           <BsCheckLg
//             onClick={() => handleCommit(id)}
//             title="Completed?"
//             className=" check-icon"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default TodoItem;
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";

const TodoItem = ({
  todoTitle,
  todoDescription,
  handleDeleteTodo, // Функция для удаления из allTodos
  handleDeleteCompletedTodo, // Функция для удаления из completedTodos
  id,
  handleCommit,
  index,
  isCompletedScreen,
}) => {
  const handleDelete = () => {
    if (isCompletedScreen) {
      handleDeleteCompletedTodo(id);
    } else {
      handleDeleteTodo(id);
    }
  };

  return (
    <div className="todo-list-item">
      <div>
        <h3>{todoTitle}</h3>
        <p>{todoDescription}</p>
      </div>
      <div>
        <AiOutlineDelete onClick={handleDelete} title="Delete?" className="icon" />

        {isCompletedScreen ? (
          <IoMdRefresh className="icon" onClick={() => handleCommit(id)} />
        ) : (
          <BsCheckLg
            onClick={() => handleCommit(id)}
            title="Completed?"
            className=" check-icon"
          />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
