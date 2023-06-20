import React from 'react';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filer from './Filter/Filter';

export default function App() {
  return (
    <div style={{ paddingLeft: 15 }}>
      <h1 className="contact_title">Phonebook</h1>
      <ContactForm />
      <h2 className="contact__title">Contacts</h2>
      <Filer />
      <ContactList />
    </div>
  );
}
