import axios from 'axios';

export const data = () => {
  axios.get('http://localhost:3010/data').then((response) => {
    return response.data;
  });
};
