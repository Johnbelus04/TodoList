import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';


function TodoList({ todos, onOpenAddPopup, onDelete, onEdit }) {

    const [lenTodoCompleted, setLenTodoCompleted] = useState(0);
    const [totalTodos, setTotalTodos] = useState(0);
    const [completionRate, setCompletionRate] = useState(0);

    useEffect(() => {
        const todoCompleted = todos.filter(todo => todo.isCompleted === true);
        setLenTodoCompleted(todoCompleted.length);
        setTotalTodos(todos.length);

        setCompletionRate(lenTodoCompleted / totalTodos);
    }, [todos, lenTodoCompleted, totalTodos])

    return (
        <div className="relative flex flex-col items-center bg-white w-full h-auto pb-20 border border-gray-300">
            <h1 className="font-bold uppercase p-2 text-xl text-gray-600" >todolist</h1>
            <button className="absolute right-4 top-4 bg-green-400 text-white rounded-sm p-2 text-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-sm active:bg-green-600 transition duration-200 ease-in-out"
                onClick={() => onOpenAddPopup()}>
                <i class="fa-solid fa-plus"></i>
            </button>
            <div className="border border-gray-300 w-3/4 h-auto flex flex-col p-2 gap-2">
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
                ))}
            </div>
            <div className="absolute left-32 bottom-4 w-48 flex justify-center">
                <div className="w-full bg-gray-300 h-6 rounded-full">
                    <div
                        style={{
                            width: `${completionRate * 100}%`,
                            backgroundColor: 'rgb(72, 187, 120)',
                            height: '100%',
                            borderRadius: '9999px',
                            transition: 'width 0.5s ease-in-out',
                        }}
                    ></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-semibold">
                    <span>
                        <b>{lenTodoCompleted}</b> of <b>{totalTodos}</b> tasks done
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TodoList;