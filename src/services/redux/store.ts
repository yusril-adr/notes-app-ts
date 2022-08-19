import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Reducers from Slice
import NotesReducer from './Note';
const store = configureStore({
  reducer: {
    notes: NotesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;