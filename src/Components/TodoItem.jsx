import React, { useState } from 'react';
import EditTodoPopup from './EditTodoPopup';

function TodoItem({ todo, onDelete, onEdit }) {

    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

    const openEditPopup = () => {
        setIsEditPopupOpen(true);
    }

    const closeEditPopup = () => {
        setIsEditPopupOpen(false);
    }

    const handleCheckboxChange = (e) => {
        onEdit({
            id: todo.id,
            text: todo.text,
            isCompleted: e.target.checked,
        })
    };

    return (
        <div className="relative flex gap-2 bg-blue-100 p-2">
            <input
                type="checkbox"
                className="w-4"
                checked={todo.isCompleted}
                onChange={handleCheckboxChange}
            />
            <p className={`text-lg text-blue-500 ${todo.isCompleted ? 'line-through' : ''}`} > {todo.text} </p>
            <div className="absolute right-4 flex gap-4">
                <button className="text-blue-300 hover:text-blue-500"
                    onClick={() => openEditPopup()}
                >
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button className="text-blue-300 hover:text-blue-500"
                    onClick={() => onDelete(todo.id)}
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            {isEditPopupOpen && <EditTodoPopup onEditTodo={onEdit} closeEditPopup={closeEditPopup} todo={todo} />}
        </div>
    );
}

export default TodoItem;