import React from 'react'

function Button({className, title, type, onClick}) {
  return (
    <button type={type} onClick={onClick} className={className} >
      {title}
    </button>
  )
}

export default Button