import React, { Fragment, useState } from 'react'

const Navbar = () => {
    const navigation = [
        "Home",
        "About",
        "Contact Us"
    ]
    const [isOpen, setisOpen] = useState(false);
  return (
    <Fragment>
        <nav>
            <ul className='flex item-center gap-3'>
                {
                    navigation.map(item => {
                        return(
                            <li>{item}</li>
                        )
                    })
                }
            </ul>
            <button className='cursor-pointer' onClick={() => setisOpen(!isOpen)}>Show</button>
            {
                isOpen && <h2>Chaaaaa</h2>
            }
        </nav>
    </Fragment>
  )
}

export default Navbar