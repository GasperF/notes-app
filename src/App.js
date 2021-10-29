import React, {useState} from 'react'
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';
import './App.css'
import './components/StickyNotes.css'

const App = () => {

  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'Buy a leash',
    date: '10/13/2021'
    },
    {
    id: nanoid(),
    text: 'Walk the dog',
    date: '10/14/2021'
    },
    {
    id: nanoid(),
    text: 'Find the dog',
    date: '10/16/2021'
    },
    {
    id: nanoid(),
    text: 'Get a new dog',
    date: '10/20/2021'
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      date: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark__mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          saveNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App;