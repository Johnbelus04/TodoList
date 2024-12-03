import React, { useState } from 'react';

function AddTodoPopup({ closeAddPopup, onAddTodo }) {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        console.log(text);
        if(text === '') {
           setError('Task is null! Enter task...');
        } else {
            onAddTodo({
                id: Date.now(),
                text: text.trim(),
                isCompleted: false,
            });
            closeAddPopup();
        }
    }

    return (
        <div className="fixed left-0 top-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white shadow-lg w-1/3 p-4 rounded ">
            <h2 className="font-bold text-xl mb-4">Add Todo</h2>
                <form onSubmit={handleAddTodo}>
                    <input
                        className="w-full border border-gray-300 p-2 rounded outline-none" 
                        type="text" 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Enter task...' />
                </form>
                {error && <p className="text-red-400">{error}</p> }
                <div className="flex justify-between mt-6">
                    <button className="bg-gray-400 rounded p-2"
                        onClick={() => closeAddPopup()}
                    >
                        Cancel</button>
                    <button className="bg-green-400 rounded p-2"
                        onClick={handleAddTodo}
                    >
                        Add todo</button>
                </div>
            </div>
        </div>
    );
}

export default AddTodoPopup;