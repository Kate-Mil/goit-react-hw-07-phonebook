import axios from 'axios';

axios.defaults.baseURL = 'https://648ec4f775a96b664444415b.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};
