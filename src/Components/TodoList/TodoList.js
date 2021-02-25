/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({
  todos, onCheck, delTodo, toggle,
}) => {
  const todoFilter = (toggle) => {
    switch (toggle) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };
  return (
    <div className="listWrap">
      <ul>
        {todoFilter(toggle).map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onCheck={onCheck}
            delTodo={delTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
