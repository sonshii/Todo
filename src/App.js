import { useState } from 'react';
import './App.css';
import InputTodo from './Components/InputTodo/InputTodo'
import TodoList from './Components/TodoList/TodoList'
import Footer from './Components/Footer/Footer'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => setTodos([...todos, {
    id: `${new Date().getTime()}`,
    name: todo,
    completed: false
  }]);
  
  const Toggle = (todoID) => {
    const newTodoList = todos.map(todo => todo.id === todoID ?
    {...todo, completed: !todo.completed} : todo)
    setTodos(newTodoList);
  }
  const AllToggle = () =>{
    setTodos(todos.map(todo => {return {...todo, completed: true}} ))
  }

  const Destroy = (todoID) => {
    const neTodoList = todos.filter(todo => todo.id !== todoID)
    setTodos(neTodoList)
    console.log(neTodoList)
  }

  const [toggle,setToggle] = useState('');

  const toggleHandler = (tog) =>{
    setToggle(tog);
  }

  const allDestroy = () =>{
    setTodos(todos.filter(todo=> !todo.completed))
  }

  const activeCount = todos.reduce(function(count,todo){
    return todo.completed ? count : count + 1;
  }, 0);
  const completedCount = todos.length - activeCount;
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>ToDo List</h1>
       <div className="WrapFlex">
          <InputTodo 
            AllToggle= {AllToggle}
            onCreate={addTodo}/>
          <TodoList 
            todos={todos}
            onCheck={Toggle}
            delTodo={Destroy}
            toggle={toggle}
          />
          <Footer
            toggle={toggleHandler}
            allDestroy={allDestroy}
            completedCount={completedCount}
            activeCount={activeCount}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
