import React from 'react';

const TodoForm = ({ newTodoTitle, newTodoDescription, setNewTodoTitle, setNewTodoDescription, addTodo }) => {
  return (
    <div className="todo-form"> {/* Add todo-form class */}
      <h2>Add Todo</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={newTodoTitle}
          onChange={e => setNewTodoTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={newTodoDescription}
          onChange={e => setNewTodoDescription(e.target.value)}
        />
      </div>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
