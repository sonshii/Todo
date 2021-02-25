/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import { Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './TodoItem.css';

const TodoItem = ({
  id, name, completed, toggleCompleted, deleteTodo,
}) => (
  <li className={completed ? 'completed' : null}>
    <div className="Wrap-row-item">
      <div>
        <Checkbox
          color="primary"
          checked={completed}
          onClick={() => toggleCompleted(id)}
        />
        <span>{name}</span>
      </div>
      <IconButton
        aria-label="delete"
        onClick={() => deleteTodo(id)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  </li>
);

export default TodoItem;
