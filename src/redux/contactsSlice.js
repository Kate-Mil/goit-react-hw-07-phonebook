import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },

  reducers: {
    addContacts: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const persistedContactsSlice = persistReducer(
  { key: 'contacts', storage, whitelist: ['items'] },
  contactsSlice.reducer
);

export const { addContacts, deleteContact } = contactsSlice.actions;
