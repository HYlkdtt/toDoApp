import { useState } from 'react';
import './App.css';
import { FaTrash } from 'react-icons/fa';

function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    var text = taskText.trim();
    if (!text) return;
    setTasks(function(prev) {
      return prev.concat({ text: text, completed: false });
    });
    setTaskText('');
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  }

  function toggleComplete(idx) {
    setTasks(function(prev) {
      return prev.map(function(task, i) {
        if (i === idx) {
          return { text: task.text, completed: !task.completed };
        }
        return task;
      });
    });
  }

  function deleteTask(idx) {
    setTasks(function(prev) {
      return prev.filter(function(_, i) {
        return i !== idx;
      });
    });
  }

  function clearAll() {
    setTasks([]);
  }

  var pendingCount = tasks.filter(function(t) {
    return !t.completed;
  }).length;

  return (
    <div id="backboard">
      <div id="frame">
        <h1>Todo App</h1>
      </div>
      
      <div className="input-group">
        <input
          type="text" 
          placeholder="Add your new todo"
          value={taskText}
          onChange={function(e) { setTaskText(e.target.value); }}
          onKeyPress={handleKeyPress}
        />
        <button className="add-btn" onClick={addTask}>+</button>
      </div>

      <ul className="task-list">
        {tasks.map(function(task, idx) {
          return (
            <li
              key={idx}
              className={'task-item' + (task.completed ? ' completed ' : '')}
            >
              <span onClick={function() { toggleComplete(idx); }}>
                {task.text}
              </span>
              <button className="delete-btn" onClick={function() { deleteTask(idx); }}>
                <FaTrash />
              </button>
            </li>
          );
        })}
      </ul>

      <div className="footer">
        <span>
          You have {pendingCount} pending {pendingCount === 1 ? 'task' : 'tasks'}
        </span>
        <button className="clear-btn" onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
