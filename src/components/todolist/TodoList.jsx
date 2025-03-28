import React, { useState } from 'react'

function TodoList() {
    const [inputValue, setinputValue] = useState('');
    const [items, setitems] = useState([]);
    const inputChange = (event) => {
        setinputValue(event.target.value);
    };
    const addItem = () => {
        if (inputValue.trim() !== '') {
            setitems((prevItems) => [...prevItems, inputValue]);
            setinputValue('');
        }
    };
    const removeItems = () => {
        setitems((prenItems) => prenItems.slice(0, -1));
    };
    return (
        <div>
            <h2 className='text-5xl text-black font-medium'>TodoList</h2>
            <div className='mt-4 flex items-center gap-3.5 p-4 rounded-lg bg-[#f7f7f8]'>
                <input type="text" value={inputValue} onChange={inputChange} className='border border-gray-600' />
                <button className='cursor-pointer px-1.5 bg-green-700 text-white rounded' onClick={addItem}>Add</button>
            </div>
            <ul className='flex flex-col'>
                {
                    items.map((item, index) => (
                        <li key={index} className='w-[265px] flex items-center justify-between gap-3.5 mt-3 py-2 px-4 rounded-lg bg-[#f7f7f8]'>
                            <span>{item}</span>
                            <button onClick={removeItems} className='cursor-pointer px-1.5 bg-red-700 text-white rounded'>Del</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList