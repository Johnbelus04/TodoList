import React from 'react';

function DeleteTodoPopup({ onClose, onDelete }) {
    return (
        <div className="fixed left-0 top-0 w-full h-full bg-slate-200 bg-opacity-50 z-10 flex justify-center" >
            <div className="bg-green-300 w-1/3 h-28 p-2 rounded flex flex-col items-center border border-black" >
                <h1 className="text-2xl text-red-500">Confirm delete</h1>
                <div className="flex justify-around w-full mt-4" >
                    <button className="bg-gray-400 rounded p-2" 
                        onClick={() => onClose()}
                        >Cancel</button>
                    <button className="bg-red-400 rounded p-2" 
                        onClick={() => onDelete()}
                        >Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteTodoPopup;