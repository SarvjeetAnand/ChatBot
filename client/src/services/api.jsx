import axios from 'axios';

const api = axios.create({
  baseURL: 'chatbot-production-6f12.up.railway.app',
});

export default api;
