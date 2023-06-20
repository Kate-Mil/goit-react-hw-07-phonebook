import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact } from 'services/getContacts-api';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  () => {
    return getContacts();
  }
);

export const postContactThunk = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    return postContact({ name, number });
  }
);
