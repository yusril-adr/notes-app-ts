import { createSlice } from '@reduxjs/toolkit';

// Services
import NotesService from '../../localStorage/NotesService';

const initialState = {
  list: NotesService.getAllNotes(),
};

export const notesSlicer = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    updateNoteList: (state) => {
      const updatedList = NotesService.getAllNotes();

      state.list = updatedList;
    },
  },
});

export const {
  updateNoteList,
} = notesSlicer.actions;

export default notesSlicer.reducer;
