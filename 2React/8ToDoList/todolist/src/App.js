import React, {useState} from 'react';
import './App.css';
import TodoAdd from './components/todoAdd';
import TodoDiplsay from './components/todoDiplsay';

function App() {

  const [todoList, setTodoList] = useState([])

  return (
    <div className="App">
      <TodoAdd todoList={todoList} setTodoList={setTodoList}/>
      <TodoDiplsay todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
