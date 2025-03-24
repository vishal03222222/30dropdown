import React, { Component } from 'react';

class NotePad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.loadNotes(),
    };
  }

  // Load notes from local storage
  loadNotes = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  };

  // Save notes to local storage
  saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
  };

  // Handle creating a new note
  handleCreateNote = () => {
    const newNote = { content: '', id: Date.now() }; // Use timestamp as a unique ID
    this.setState(
      (prevState) => ({
        notes: [...prevState.notes, newNote],
      }),
      this.saveNotes
    );
  };

  // Handle updating a note's content
  handleUpdateNote = (id, content) => {
    const updatedNotes = this.state.notes.map((note) =>
      note.id === id ? { ...note, content } : note
    );
    this.setState({ notes: updatedNotes }, this.saveNotes);
  };

  // Handle deleting a note
  handleDeleteNote = (id) => {
    const filteredNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: filteredNotes }, this.saveNotes);
  };

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>
          <img src="./card-text.svg" alt="Notes" style={styles.icon} />
          Notes
        </h1>
        <button onClick={this.handleCreateNote} style={styles.button}>
          <img src="./pencil.svg" alt="Create Note" style={styles.buttonIcon} />
          Create Note
        </button>
        <div style={styles.notesContainer}>
          {this.state.notes.map((note) => (
            <div key={note.id} style={styles.note}>
              <p
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => this.handleUpdateNote(note.id, e.target.innerText)}
                style={styles.noteContent}
              >
                {note.content}
                <img
                  src="./trash.svg"
                  alt="Delete Note"
                  onClick={() => this.handleDeleteNote(note.id)}
                  style={styles.deleteIcon}
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Inline styles
const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #cf9aff, #95c0ff)',
    color: '#fff',
    paddingTop: '4%',
    paddingLeft: '10%',
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '35px',
    fontWeight: 600,
  },
  icon: {
    width: '60px',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(#9418fd, #571094)',
    color: '#fff',
    fontSize: '16px',
    border: 0,
    outline: 0,
    borderRadius: '40px',
    padding: '15px 25px',
    margin: '30px 0 20px',
    cursor: 'pointer',
  },
  buttonIcon: {
    width: '25px',
    marginRight: '8px',
  },
  notesContainer: {
    width: '100%',
  },
  note: {
    maxWidth: '500px',
    minHeight: '150px',
    background: '#fff',
    color: '#333',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '5px',
    position: 'relative',
  },
  noteContent: {
    width: '100%',
    minHeight: '100px',
    outline: 'none',
    position: 'relative',
  },
  deleteIcon: {
    width: '25px',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '15px',
    right: '15px',
  },
};

export default NotePad;
