import axios from 'axios';

axios.defaults.baseURL = 'https://648ec4f775a96b664444415b.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

// export const postContact = async ({ name, number }) => {
//   const response = await axios.post(`/contacts`, {
//     name,
//     number,
//   });
//   return response.data;
// };

// export const postContact = async ({ name, number }) => {
//   try {
//     const response = await axios.post(`/contacts`, {
//       name,
//       number,
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Ошибка при выполнении запроса:', error);
//     throw error;
//   }
// };

export const postContact = async ({ name, number }) => {
  const response = await axios.post(`/contacts`, { name, number });
  return response.data;
};
