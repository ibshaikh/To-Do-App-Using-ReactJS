import React from 'react';

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
  const handleComplete = () => {
    completeTodo(todo.id);
  };

  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{todo.time}</td>
      <td>
        <button onClick={handleComplete}>Complete</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoItem;
