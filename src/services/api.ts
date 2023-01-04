import { apiUrl } from 'env';
import { http } from './http';

const defaultPost = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const api = {
  login: (login: string) =>
    http(`${apiUrl}/login`, {
      ...defaultPost,
      body: JSON.stringify(login)
    })
};

export default api;
