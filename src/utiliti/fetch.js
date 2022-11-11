import axios from 'axios';

export const BASE_URL = 'https://todo.api.devcode.gethired.id';

const options = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

