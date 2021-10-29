import React from 'react'
import { FaMoon, FaSun, FaPencilAlt } from 'react-icons/fa'

const Header = ({ handleToggleDarkMode }) => {

    return (
        <div className='header'>
            <h1>Notes <FaPencilAlt className='pencil'/></h1>
            <button
                onClick={() => handleToggleDarkMode((previosDarkMode) => !previosDarkMode)}
                className='add'><FaMoon />&nbsp; Toggle Me &nbsp;<FaSun /></button>
        </div>
    )
}

export default Header;
