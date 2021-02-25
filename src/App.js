/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

import InputTodo from './Components/InputTodo/InputTodo';
import TodoList from './Components/TodoList/TodoList';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  /**
  * Добавляет новую задачу в state todos
  * @param {object} todo - Задача
  * @param {string} id - Идентификатор задачи
  * @param {string} completed - true - задача выполнена, false - задача не выполнена
  */
  const addTodo = (todo) => setTodos([...todos, {
    id: `${new Date().getTime()}`,
    name: todo,
    completed: false,
  }]);

  /**
  * Изменяет свойство completed в todos на true или false
  * @param {string} todoID - идентификатор выбранного чекбокса задачи
  */
  const toggleCompleted = (todoID) => {
    const newTodoList = todos.map((todo) => (todo.id === todoID
      ? { ...todo, completed: !todo.completed } : todo));
    setTodos(newTodoList);
  };

  /**
  * Изменяет свойство completed в todos на true или false у всех элементов
  */
  const toggleAllTodos = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

  /**
  * Удаляет из todos выбранную задачу
  * @param {string} todoID - идентификатор выбранного чекбокса todo
  */
  const deleteTodo = (todoID) => {
    const newTodoList = todos.filter((todo) => todo.id !== todoID);
    setTodos(newTodoList);
  };

  const [filter, setfilter] = useState('');

  /**
  * Устанавливает значение filter на значение выбранной кнопки(all,asctive или completed)
  * @param {string} filterValue - значение выбранной кнопки(all,active или completed)
  */
  const buttonFilter = (filterValue) => {
    setfilter(filterValue);
  };

  /**
  * Удаляет все выбранные (completed:true) задачи
  */
  const deleteAllCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  /**
  * Считает все невыполненные задачи
  * @param {number} activeCount - количество невыполненных(еще активных) todo
  */
  const activeCount = todos.reduce((count, todo) => (todo.completed ? count : count + 1), 0);

  /**
  * Считает все выполненные задачи
  * @param {number} completedCount - количество выполненных(отмеченных) todo
  */
  const completedCount = todos.length - activeCount;

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <div className="WrapFlex">
          <InputTodo
            toggleAllTodos={toggleAllTodos}
            addTodo={addTodo}
          />
          <TodoList
            todos={todos}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
            filter={filter}
          />
          <Footer
            buttonFilter={buttonFilter}
            deleteAllCompletedTodos={deleteAllCompletedTodos}
            completedCount={completedCount}
            activeCount={activeCount}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
