import React, { useEffect, useState } from 'react';

function EditTodoPopup({ closeEditPopup, onEditTodo, todo }) {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setText(todo.text);
    }, [todo])

    const handleEditTodo = (e) => {
        e.preventDefault();
        console.log(text);
        if (text === '') {
            setError('Task is null!');
        } else if (text === todo.text) {
            setError('Task is not change');
        } else {
            onEditTodo({
                id: todo.id,
                text: text.trim(),
            })
            closeEditPopup();
        }
    }

    return (
        <div className="fixed z-10 left-0 top-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white shadow-lg w-1/3 p-4 rounded ">
                <h2 className="font-bold text-xl mb-4">Edit Todo</h2>
                <form onSubmit={handleEditTodo}>
                    <input
                        className="w-full border border-gray-300 p-2 rounded outline-none"
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Enter task...' />
                </form>
                {error && <p className="text-red-400">{error}</p>}
                <div className="flex justify-between mt-6">
                    <button className="bg-gray-400 rounded p-2"
                        onClick={() => closeEditPopup()}
                    >
                        Cancel</button>
                    <button className="bg-green-400 rounded p-2"
                        onClick={handleEditTodo}
                    >
                        Change</button>
                </div>
            </div>
        </div>
    );
}

export default EditTodoPopup;