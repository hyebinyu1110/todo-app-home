import TodoListItem from './TodoListItem';
import './TodoList';


const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {
                todos.map((todo)=>(
                    <TodoListItem todo={todo} onRemove={onRemove} onToggle={onToggle} key={todo.id}/>
                ))
            }

           
        </div>
    )
}

export default TodoList;