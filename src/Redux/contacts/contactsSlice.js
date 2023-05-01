import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  delContact,
  editContact,
  updateStatusContact,
} from './Operations';

const initialState = {
  items: [],
  isLoading: false,
  status: null,
  error: { status: null, message: null },
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [editContact.pending]: handlePending,
    [delContact.pending]: handlePending,
    [updateStatusContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [editContact.rejected]: handleRejected,
    [delContact.rejected]: handleRejected,
    [updateStatusContact.pending]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = { status: null, message: null };
      state.items = action.payload.data;
      state.status = action.payload.status;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = { status: null, message: null };
      state.items.push(action.payload.data);
      state.status = action.payload.status;
    },
    [editContact.fulfilled](state, action) {
      state.isLoading = false;
      state.status = action.payload.status;
      state.error = { status: null, message: null };
      const index = state.items.findIndex(
        contact => contact.id === action.payload.data.id
      );
      state.items.splice(index, 1, action.payload.data);
    },
    [updateStatusContact.fulfilled](state, action) {
      state.isLoading = false;
      state.status = action.payload.status;
      state.error = { status: null, message: null };
      const index = state.items.findIndex(
        contact => contact.id === action.payload.data.id
      );
      state.items.splice(index, 1, action.payload.data);
    },
    [delContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = { status: null, message: null };
      const index = state.items.findIndex(
        contact => contact.id === action.payload.data.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
