import React from 'react'
import Logo from './logo'
import Navbar from './Navbar'

function Header() {
  return (
    <header className='flex item-center justify-between px-5 py-4'>
        <Logo/>
        <Navbar/>
    </header>
  )
}

export default Header