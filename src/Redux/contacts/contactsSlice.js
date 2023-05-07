import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './operations';

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
    [contactsOperations.fetchContacts.pending]: handlePending,
    [contactsOperations.addContact.pending]: handlePending,
    [contactsOperations.editContact.pending]: handlePending,
    [contactsOperations.delContact.pending]: handlePending,
    [contactsOperations.updateStatusContact.pending]: handlePending,
    [contactsOperations.fetchContacts.rejected]: handleRejected,
    [contactsOperations.addContact.rejected]: handleRejected,
    [contactsOperations.editContact.rejected]: handleRejected,
    [contactsOperations.delContact.rejected]: handleRejected,
    [contactsOperations.updateStatusContact.rejected]: handleRejected,
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = { status: null, message: null };
      state.items = action.payload.data;
      state.items.sort(
        (a, b) => b.favorite - a.favorite || a.name.localeCompare(b.name)
      );
      state.status = action.payload.status;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = { status: null, message: null };
      state.items.push(action.payload.data);
      state.status = action.payload.status;
    },
    [contactsOperations.editContact.fulfilled](state, action) {
      state.isLoading = false;
      state.status = action.payload.status;
      state.error = { status: null, message: null };
      const index = state.items.findIndex(
        contact => contact._id === action.payload.data._id
      );
      state.items.splice(index, 1, action.payload.data);
    },
    [contactsOperations.updateStatusContact.fulfilled](state, action) {
      state.isLoading = false;
      state.status = action.payload.status;
      state.error = { status: null, message: null };

      const index = state.items.findIndex(
        contact => contact._id === action.payload.data._id
      );
      state.items.splice(index, 1, action.payload.data);
    },
    [contactsOperations.delContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = { status: null, message: null };
      const index = state.items.findIndex(
        contact => contact._id === action.payload.data._id
      );
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
