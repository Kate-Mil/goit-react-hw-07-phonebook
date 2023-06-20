import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'services/getContacts-api';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  () => {
    return getContacts();
  }
);
