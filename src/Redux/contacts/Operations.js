import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_URL } from 'constants/constants';

axios.defaults.baseURL = SERVER_URL;

// axios.defaults.baseURL = 'https://6405eac6eed195a99f90a28a.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return { data: response.data, status: response.request.status };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return { data: response.data, status: response.request.status };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);

export const delContact = createAsyncThunk(
  'contact/delContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return { data: response.data, status: response.request.status };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);

export const editContact = createAsyncThunk(
  'contact/editContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return { data: response.data, status: response.request.status };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);
