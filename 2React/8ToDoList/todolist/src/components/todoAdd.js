import React, {useState} from 'react';

const TodoAdd = (props) => {
    const {todoList, setTodoList} = props

    const [todo, setTodo] = useState("")
    
    const handleAdd = (e) => {
        e.preventDefault()

        const todoItem = {
            todo:todo,
            completed:false
        }

        if(setTodo.length !== 0){
            setTodoList([...todoList,todoItem])
            setTodo("")
        }
    }

    return(
        <div>
            <form onSubmit={handleAdd}>
                <input type="text" placeholder="Don't cry, breath, etc" value={todo} onChange={e => setTodo(e.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default TodoAdd;