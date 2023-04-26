import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isRefreshing = true;
};
const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.refreshUser.pending]: handlePending,
    [authOperations.signUp.pending]: handlePending,
    [authOperations.signIn.pending]: handlePending,
    [authOperations.signOut.pending]: handlePending,
    [authOperations.refreshUser.rejected]: handleRejected,
    [authOperations.signUp.rejected]: handleRejected,
    [authOperations.signIn.rejected]: handleRejected,
    [authOperations.signOut.rejected]: handleRejected,
    [authOperations.refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [authOperations.signUp.fulfilled]: handleFulfilled,
    [authOperations.signIn.fulfilled]: handleFulfilled,
    [authOperations.signOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = null;
    },
  },
});

export const authReducer = authSlice.reducer;
