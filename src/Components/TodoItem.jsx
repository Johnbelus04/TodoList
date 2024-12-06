import React, { useState } from 'react';
import EditTodoPopup from './EditTodoPopup';
import DeleteTodoPopup from './DeleteTodoPopup';
import { formatTime } from '../utils/timeUtils'

function TodoItem({ todo, onDelete, onEdit }) {

    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [openDeletePopup, setOpenDeletePopup] = useState(false);

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
            time: formatTime(todo.id, Date.now()),
        })
        console.log(formatTime(todo.id, Date.now()));
    };

    const handleOpenDeletePopup = () => {
        setOpenDeletePopup(true);
    }

    const handleCloseDeletePopup = () => {
        setOpenDeletePopup(false);
    }

    const onDeleteTodo = () => {
        onDelete(todo.id);
    }

    return (
        <div className="relative flex flex-col gap-2 bg-blue-100 p-2">
            <div className="flex gap-2" >
                <input
                    type="checkbox"
                    className="w-4"
                    checked={todo.isCompleted}
                    onChange={handleCheckboxChange}
                />
                <p className={`text-lg w-full text-blue-500 break-words ${todo.isCompleted ? 'line-through' : ''}`} > {todo.text} </p>
            </div>
            <div className="absolute right-4 flex gap-4">
                <button className="text-blue-300 hover:text-blue-500"
                    onClick={() => openEditPopup()}
                >
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button className="text-blue-300 hover:text-blue-500"
                    onClick={() => handleOpenDeletePopup()}
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            {todo.isCompleted && <p className="text-gray-400 text-xs" >Completion time: {todo.time}</p>}
            {isEditPopupOpen && <EditTodoPopup onEditTodo={onEdit} closeEditPopup={closeEditPopup} todo={todo} />}
            {openDeletePopup && <DeleteTodoPopup onClose={handleCloseDeletePopup} onDelete={onDeleteTodo} />}
        </div>
    );
}

export default TodoItem;