import './App.css'

function App() {
  return (
    <div id="backboard">
      <h1>ToDo List</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add your task"
          /* …bind to state here… */
        />
        <button className="add-btn">+</button>
      </div>
    </div>
  );
}

export default App
