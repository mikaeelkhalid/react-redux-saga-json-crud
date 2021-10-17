import axios from 'axios';

const url = 'http://localhost:5000/users';

export const loadUsersApi = async () => {
  await axios.get(url);
};
