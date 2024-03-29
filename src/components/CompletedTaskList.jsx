import React from 'react';

const CompletedTaskList = ({ completedTasks, removeAllCompleted }) => {
  return (
    <>
      <tbody>
        {completedTasks.map(task => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.time}</td>
          </tr>
        ))}
      </tbody>
    
    </>
  );
};

export default CompletedTaskList;
