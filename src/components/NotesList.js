import React from 'react'
import Note from './Note'
import AddNote from './AddNote'


const NotesList = ({notes, saveNote, deleteNote}) => {
    return (
        <div className='notes__list'>
            {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text} 
                    date={note.date}
                    deleteNote={deleteNote}
                />
            ))}
            <AddNote saveNote={saveNote} />

        </div>
    )
}

export default NotesList
