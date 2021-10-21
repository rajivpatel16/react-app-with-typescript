import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Todo from './models/todo'
import TodosContextProvider from './store/todos-context'

function App() {
 
  return (
    <div className="App">
      <TodosContextProvider>
      <AddTodo />
      <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
