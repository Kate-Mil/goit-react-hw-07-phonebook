import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, delContact } from 'services/getContacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  () => {
    return getContacts();
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    return postContact({ name, number });
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return delContact(id);
  }
);
