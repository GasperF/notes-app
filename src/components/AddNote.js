import React, {useState} from 'react'

const AddNote = ({saveNote}) => {

    const [noteText, setNoteText] = useState('');

    const chaLimit = 150;

    const handleChange = (event) => {
        if (chaLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const saveTheNote = () => {
        if (noteText.trim().length > 0) {
            saveNote(noteText);
            setNoteText('');
        } 
    };

    return (
        <div className='note new'>
            <textarea
                cols="10"
                rows="8"
                placeholder="Add a note..."
                value={noteText}
                onChange={handleChange}
            >
            </textarea>
            <div className="note__footer">
                <p>{chaLimit - noteText.length} Remaining</p>
                <button className='add' onClick={saveTheNote}>add</button>
            </div>

        </div>
    )
}

export default AddNote;
