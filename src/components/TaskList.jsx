import React from 'react';
import completeIcon from '../images/complete-icon.png'; // Import complete icon
import deleteIcon from '../images/delete-icon.png'; // Import delete icon

const TaskList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <tbody>
      {todos.map(todo => (
        <tr key={todo.id}>
          <td>{todo.title}</td>
          <td>{todo.description}</td>
          <td>{todo.time}</td>
          <td>
            <img className='icon' src={completeIcon} alt="Complete" onClick={() => completeTodo(todo.id)} />
            <img className='icon' src={deleteIcon} alt="Delete" onClick={() => deleteTodo(todo.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TaskList;
