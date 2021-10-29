import React from 'react'
import { FaTrash } from 'react-icons/fa'

function Note({id, text, date, deleteNote}) {
    return (
        <div className='note'>
            <h2>{text}</h2>
            <div className="note__footer">
                <p>{date}</p>
                <FaTrash
                    onClick={()=> deleteNote(id)}
                    className='delete__icon'
                />
            </div>
        </div>
    )
}

export default Note;
