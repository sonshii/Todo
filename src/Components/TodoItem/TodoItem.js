
import './TodoItem.css'
import { Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const TodoList = ({id,name,completed,onCheck,delTodo})=>{
    return(  
        <li className={completed ? 'completed' : null}>
            <div className="Wrap-row-item">
                <div>
                    <Checkbox 
                        color="primary"
                        checked={completed}
                        onClick={()=> onCheck(id)}
                        />
                    <span>{name}</span>
                </div>
                <IconButton 
                    aria-label="delete"
                    onClick={()=> delTodo(id)}>
                    <DeleteIcon />
                </IconButton>     
            </div>
        </li>
    )
}

export default TodoList