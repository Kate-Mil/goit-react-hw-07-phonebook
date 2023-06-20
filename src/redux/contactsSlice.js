import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContactThunk,
  getContactsThunk,
  postContactThunk,
} from './index';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const addContacts = (state, { payload }) => {
  // state.items.push(payload);
  state.items = [payload, ...state.items]; // чтобы записывалось вначале списка
};
const deleteContact = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(postContactThunk.fulfilled, addContacts)
      .addCase(deleteContactThunk.fulfilled, deleteContact)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});
