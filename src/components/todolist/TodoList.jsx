import React, { useState } from 'react'
import Button from '../global/button';

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
                <input type="text" value={inputValue} onChange={inputChange} className="bg-white w-full text-gray-900 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Enter Value" />
                <Button type='submit' className='btn' title={'Add'} onClick={addItem}/>
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