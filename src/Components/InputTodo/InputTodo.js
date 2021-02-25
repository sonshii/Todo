/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './InputTodo.css';

const InputTodo = ({ toggleAllTodos, addTodo }) => {
  const [value, setValue] = useState('');
  return (
    <div className="InputTodo">
      <label
        onClick={() => toggleAllTodos()}
      />
      <input className="toggle-all" type="text" placeholder="New Task" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button variant="contained" color="primary" onClick={() => addTodo(value)}>
        Add
      </Button>
    </div>
  );
};
export default InputTodo;
