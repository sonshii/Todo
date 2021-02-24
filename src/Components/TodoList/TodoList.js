import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

const TodoList = ({todos, onCheck, delTodo,toggle}) =>{
    const todoFilter = (toggle) =>{
        switch (toggle){
                case 'active': 
                return todos.filter((todo)=>!todo.completed);
                case 'completed': 
                return todos.filter((todo)=>todo.completed);
                default: 
                return todos;
            }
    }
    return(
        <div className="listWrap">
            <ul>
                {todoFilter(toggle).map(item => 
                    <TodoItem 
                        key ={item.id} 
                        {...item} 
                        onCheck={onCheck}
                        delTodo ={delTodo}
                        />)}
            </ul>
        </div>
    )
}

export default TodoList
