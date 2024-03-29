import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TaskList from "./components/TaskList";
import CompletedTaskList from "./components/CompletedTaskList";
import Header from "./components/Header"; // Import the Header component
import DeveloperCard from './components/DeveloperCard';
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    const completedTask = todos.find((todo) => todo.id === id);
    setCompletedTasks([
      ...completedTasks,
      { ...completedTask, time: new Date().toLocaleString() },
    ]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = () => {
    if (newTodoTitle.trim() !== "" && newTodoDescription.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        title: newTodoTitle,
        description: newTodoDescription,
        completed: false,
        time: new Date().toLocaleString(),
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle("");
      setNewTodoDescription("");
    }
  };

  const removeAllCompleted = () => {
    setCompletedTasks([]);
  };

  return (
    <div>
      <Header />
      <div className="content">
        <div className="left-section">
          <TodoForm
            newTodoTitle={newTodoTitle}
            newTodoDescription={newTodoDescription}
            setNewTodoTitle={setNewTodoTitle}
            setNewTodoDescription={setNewTodoDescription}
            addTodo={addTodo}
          />
          <DeveloperCard />
        </div>
        <div className="right-section">
          <div className="card">
            <h2>Task List</h2>
            <table className="task-list-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <TaskList
                todos={todos}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
              />
            </table>
          </div>
          <div className="card">
            <h2>
              Completed Tasks
              {completedTasks.length > 0 && (
          <button className="remove-all-btn" onClick={removeAllCompleted}>
            Remove All Completed Tasks
          </button>
        )}
            </h2>
            <table className="task-list-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Time</th>
                </tr>
              </thead>
              <CompletedTaskList
                completedTasks={completedTasks}
                removeAllCompleted={removeAllCompleted}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
