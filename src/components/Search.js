import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Search = ({handleSearchNote}) => {
    return (
        <div className='search'>
            <FaSearch className='search__icon' />
            <input
                onChange={(event) => handleSearchNote(event.target.value)}
                type="text"
                placeholder='Search for a note...'
            />
        </div>
    )
}

export default Search;