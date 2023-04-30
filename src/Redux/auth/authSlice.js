import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';

const initialState = {
  user: { name: null, email: null },
  isVerificationCodeSent: false,
  isVerify: false,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  message: null,
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
  state.isVerificationCodeSent = true;
  state.isVerify = true;
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
    [authOperations.verifyEmail.pending]: handlePending,
    [authOperations.resendVerifyEmail.pending]: handlePending,
    [authOperations.refreshUser.rejected]: handleRejected,
    [authOperations.signUp.rejected]: handleRejected,
    [authOperations.verifyEmail.rejected]: handleRejected,
    [authOperations.resendVerifyEmail.rejected]: handleRejected,
    [authOperations.signIn.rejected]: handleRejected,
    [authOperations.signOut.rejected]: handleRejected,
    [authOperations.refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [authOperations.signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isVerificationCodeSent = true;
      state.isVerify = false;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = null;
    },
    [authOperations.verifyEmail.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isVerificationCodeSent = true;
      state.isVerify = true;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = null;
    },
    [authOperations.resendVerifyEmail.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.message = action.payload.message;
      state.isVerificationCodeSent = true;
      state.isVerify = false;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = null;
    },
    [authOperations.signIn.fulfilled]: handleFulfilled,
    [authOperations.signOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isVerificationCodeSent = false;
      state.isVerify = false;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = null;
    },
  },
});

export const authReducer = authSlice.reducer;
