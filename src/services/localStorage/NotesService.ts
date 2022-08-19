import { nanoid } from 'nanoid';

// Configuration
import CONFIG from '../../global/CONFIG';

// Entities
import NoteEntities from '../../entities/Note';

// Errors
import NotFoundError from '../../errors/NotFoundError';

const NotesService = {
  addNote(payload: NoteEntities) {
    const notes = this.getAllNotes();
    notes.push({
      ...payload,
      id: nanoid(),
      createdAt: payload.createdAt || new Date(),
      archived: payload.archived || false,
    });
    window.localStorage.setItem(CONFIG.NOTE_SERVICE_KEY, JSON.stringify(notes));
  },

  getAllNotes(): NoteEntities[] {
    const notes: string | null = window.localStorage.getItem(CONFIG.NOTE_SERVICE_KEY);
    return JSON.parse(notes ? notes : '[]');
  },

  updateNoteById(id: string | undefined, payload: NoteEntities) : void {
    const notes = this.getAllNotes();
    const noteIdx = notes.findIndex(({ id: noteId }) => (noteId === id));

    if (noteIdx < 0) {
      throw new NotFoundError('Note not found.');
    }

    const updatedNote = {
      ...notes[noteIdx],
      ...payload,
    };
    notes[noteIdx] = updatedNote;

    window.localStorage.setItem(CONFIG.NOTE_SERVICE_KEY, JSON.stringify(notes));
  },

  deleteNoteById(id: string | undefined): void {
    const notes = this.getAllNotes();
    const updatedNotes = notes.filter((note) => (note.id !== id));

    window.localStorage.setItem(CONFIG.NOTE_SERVICE_KEY, JSON.stringify(updatedNotes));
  },
};

export default NotesService;
