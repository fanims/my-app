import React, { Fragment, useState } from 'react'

const Navbar = () => {
    const navigation = [
        "Home",
        "About",
        "Contact Us"
    ]
  return (
    <Fragment>
        <nav>
            <ul className='flex item-center gap-3'>
                {
                    navigation.map((item, index) => {
                        return(
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </nav>
    </Fragment>
  )
}

export default Navbar