import React from 'react'
import { Link } from 'react-router-dom'
const menuItems = [
    { name: "Todo List", path: "/" },
    { name: "Student Record", path: "/student" },
    { name: "Product List", path: "/product" },
]
function Sidebar() {
  return (
    <div className='w-full max-w-[300px]'>
      <ul className='p-[30px_20px]'>
        {
          menuItems.map((item, index) => {
            return (
              <li key={index} className='p-4 hover:bg-[#f7f7f8] rounded-lg cursor-pointer'>
                <Link to={item.path} className='text-[18px] font-medium text-gray-900'>
                  {item.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar