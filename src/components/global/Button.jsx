import React from 'react'

function Button({title, onClick}) {
  return (
    <button
        type="submit"
        onClick={onClick}
        className="
            py-2
            px-4
            mt-4
            rounded-md
            transition
            font-medium
            ease-in-out
            text-white
            duration-150
            to-blue-500
            cursor-pointer
            bg-gradient-to-r
            from-indigo-500
            hover:to-blue-600
            hover:bg-indigo-600
        ">
            {title}
    </button>
  )
}

export default Button