import React, { useEffect, useState } from 'react';
import './index.css';
import TodoList from './Components/TodoList';
import AddTodoPopup from './Components/AddTodoPopup';

function App() {

    const [todos, setTodos] = useState([]);
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')));
    }, []);

    const openAddPopup = () => {
        setIsAddPopupOpen(true);
    }

    const closeAddPopup = () => {
        setIsAddPopupOpen(false);
    }

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
        // save to local storage
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    }

    const editTodo = (newTodo) => {
        setTodos(todos.map(todo => todo.id === newTodo.id ? newTodo : todo));
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <header className="bg-blue-500 p-5 text-white">
                <h1 className="text-black-500 uppercase font-sans text-2xl text-center">Todo List</h1>
            </header>
            <main className="flex w-full flex-col p-20 gap-5 items-center bg-blue-300">
                <TodoList todos={todos} onOpenAddPopup={openAddPopup} onDelete={deleteTodo} onEdit={editTodo} />
                {isAddPopupOpen && <AddTodoPopup onAddTodo={addTodo} closeAddPopup={closeAddPopup} />}
            </main>
            <footer className="bottom-0 left-0 w-full bg-blue-500 p-5 flex justify-center">
                <span className="text-white">@Dev by KienPT</span>
            </footer>
        </>
    )
}

export default App;
