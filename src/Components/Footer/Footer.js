/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import { Button } from '@material-ui/core';
import './Footer.css';

const Footer = ({
  buttonFilter, deleteAllCompletedTodos, completedCount, activeCount,
}) => {
  let clearButton = null;

  if (completedCount > 0) {
    clearButton = (
      <Button
        onClick={() => deleteAllCompletedTodos()}
        size="small"
      >
        delete
      </Button>
    );
  }
  return (
    <footer>
      <div className="Wrap-row">
        <span>
          <strong>{activeCount}</strong>
          &nbsp;
          still have
        </span>
        <div className="footButton">
          <Button variant="outlined" onClick={() => buttonFilter('all')}>All</Button>
          <Button variant="outlined" onClick={() => buttonFilter('active')}>Active</Button>
          <Button variant="outlined" onClick={() => buttonFilter('completed')}>Completed</Button>
        </div>
      </div>
      <div className="DeleteButton">
        {clearButton}
      </div>
    </footer>
  );
};

export default Footer;
