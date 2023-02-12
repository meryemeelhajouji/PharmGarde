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

// get all pharmacies
export const getPharmacies = async () => {
  const { data } = await axios.get('/pharmacy');
  return data.data;
};

// add pharmacy
export const addPharmacy = async (pharmacy) => {
  const { data } = await axios.post('/pharmacy', pharmacy);
  return data;
};

// delete pharmacy
export const deletePharmacy = async (id) => {
  const { data } = await axios.delete(`/pharmacy/${id}`);
  return data;
};

// change pharmacy status
export const changePharmacyStatus = async (id, status) => {
  const { data } = await axios.put(`/pharmacy/gard/${id}`);
  return data;
};
