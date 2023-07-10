import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([{ id: 1, title: 'redux' }])

  return (
    <div className="App">
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
