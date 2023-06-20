import { createSlice } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts, addContact } from './index';
import {
  handlePending,
  handleFulfilled,
  handleRejected,
  handleDeleteContact,
  handleaAddContacts,
} from './index';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContact.fulfilled, handleaAddContacts)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});
