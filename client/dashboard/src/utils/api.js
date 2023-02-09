import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;

// login
export const login = async (email, password) => {
  const { data } = await axios.post('/auth/login', { email, password });
  return data;
};

// forget password
export const forgetPassword = async (email) => {
  const { data } = await axios.post('/auth/forget', { email });
  return data;
};

// reset password
export const resetPassword = async (token, password) => {
  const { data } = await axios.post(`/auth/reset/${token}`, { password });
  return data;
};
