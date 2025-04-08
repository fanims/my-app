import React, { useState } from 'react'

const tableHeading = ["Name", "Email", "Cell Number", "Profile URL"];

function StudentRecord() {

  const [stdetail, setstdetail] = useState([]);
  const [valueName, setvalueName] = useState('');
  const [valuemail, setvaluemail] = useState('');
  const [valuenumber, setvaluenumber] = useState('');
  const [valueurl, setvalueurl] = useState('');

  const changeName = (event) => {
    setvalueName (event.target.value);
  };
  const changeEmail = (event) => {
    setvaluemail (event.target.value);
  };
  const changeNumber = (event) => {
    setvaluenumber (event.target.value);
  };
  const changeUrl = (event) => {
    setvalueurl (event.target.value);
  };

  const addDetail = (event) => {
    event.preventDefault()
    if (valueName.trim !== '') {
      setstdetail((prevItem) => [...prevItem, valueName])
      setvalueName('');
    }
    if (valuemail.trim !== '') {
      setstdetail((prevItem) => [...prevItem, valuemail])
      setvaluemail('');
    }
    if (valuenumber.trim !== '') {
      setstdetail((prevItem) => [...prevItem, valuenumber])
      setvaluenumber('');
    }
    if (valueurl.trim !== '') {
      setstdetail((prevItem) => [...prevItem, valueurl])
      setvalueurl('');
    }
  };
  return (
    <div className="flex gap-4 mt-10 items-start justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Students Detail</h2>
            <form className="flex flex-col">
                <input type="text" value={valueName} onChange={changeName} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Full Name" />
                <input type="email" value={valuemail} onChange={changeEmail} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email" />
                <input type="text" value={valuenumber} onChange={changeNumber} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone Number" />
                <input type="text" value={valueurl} onChange={changeUrl} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="LinkedIn Profile URL" />
                <button type="submit" onClick={addDetail} className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 cursor-pointer">Add Detail</button>
            </form>
        </div>
        <div className="w-full bg-white rounded-lg shadow-md p-6">
          <table className='w-full'>
            <thead>
              <tr className='bg-[#f7f7f8]'>
                {
                  tableHeading.map((item, index) => (
                    <th key={index} className='p-4 text-left'>{item}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  stdetail.map((item, index) => (
                    <td key={index} className='p-4 text-left'>{item}</td>
                  ))
                }
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default StudentRecord