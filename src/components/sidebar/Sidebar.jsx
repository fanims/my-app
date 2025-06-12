import React from 'react'

const sidemenue = [
    "Todo List",
    "Student Detail",
    "Product List"
]
function Sidebar() {
  return (
    <div className='w-full max-w-[300px]'>
      <ul className='p-[30px_20px]'>
        {
          sidemenue.map((item, index) => {
            return(
              <li key={index} className='p-4 hover:bg-[#f7f7f8] rounded-lg cursor-pointer'>
                <span className='text-[18px] font-medium text-gray-900'>
                  {item}
                </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar