import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_URL } from 'constants/constants';

axios.defaults.baseURL = SERVER_URL;

const fetchContacts = createAsyncThunk(
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

const addContact = createAsyncThunk(
  'contact/addContact',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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

const editContact = createAsyncThunk(
  'contact/editContact',
  async ({ formData, id }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, formData);
      return { data: response.data, status: response.request.status };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);

const delContact = createAsyncThunk(
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

const updateStatusContact = createAsyncThunk(
  'contact/updateStatusContact',
  async ({ id, favorite }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}/favorite`, favorite);
      return { data: response.data, status: response.request.status };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);

const contactsOperations = {
  fetchContacts,
  addContact,
  editContact,
  delContact,
  updateStatusContact,
};

export default contactsOperations;
