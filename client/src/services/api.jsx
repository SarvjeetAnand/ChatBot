import axios from 'axios';

const api = axios.create({
  baseURL: 'https://chatbot-1-brrq.onrender.com',
});

export default api;
