import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_URL } from 'constants/constants';

axios.defaults.baseURL = SERVER_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk(
  '/auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const verifyEmail = createAsyncThunk(
  '/auth/verify',
  async (verificationToken, thunkAPI) => {
    try {
      const response = await axios.post(
        `/auth/verify/${verificationToken}`,
        verificationToken
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const resendVerifyEmail = createAsyncThunk(
  '/auth/verify',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post(`/auth/verify`, email);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const signIn = createAsyncThunk(
  '/auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const signOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    token.unSet();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const refreshUser = createAsyncThunk('/auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    token.set(persistedToken);
    const response = await axios.get('/auth/current');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const authOperations = {
  refreshUser,
  signUp,
  signIn,
  signOut,
  verifyEmail,
  resendVerifyEmail,
};

export default authOperations;
