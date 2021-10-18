import React from 'react';

const TodoDiplsay = (props) => {
    const {todoList, setTodoList} = props

    const handleCheck = (index) => {
        setTodoList(todoList.map((todo,i) => {
            if(index === i){
                todo = {...todo, completed:!todo.completed}
            }
            return todo
        }))
    }

    const handleDelete = (index) => {
        setTodoList(todoList.filter((todo,i) =>{
            return index !== i
        }))
    }

    return(
        <div>
            <ul style={{listStyleType:'none'}}>
                {
                    todoList.map((todo,index) => (
                        <div key={index}>
                            <li>
                                <span style={{textDecoration:todo.completed?'line-through':null,color:todo.completed?'gray':null}}>{todo.todo}</span>
                                <input type="checkbox" checked={todo.completed} onChange={e => handleCheck(index)}/>
                                {
                                    todo.completed?
                                        <button onClick={e => handleDelete(index)}>Delete</button>:null
                                }
                            </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoDiplsay;