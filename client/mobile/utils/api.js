import axios from 'axios';
import Constants from 'expo-constants';
const { manifest } = Constants;

const url = `http://${manifest.debuggerHost.split(':').shift()}:5000/api`;
axios.defaults.baseURL = url;

export const getAllPharmacies = async () => {
  const response = await axios.get('/pharmacy');
  return response.data;
};

export const getGardingPharmacies = async () => {
  const response = await axios.get('/pharmacy/gard/active');
  return response.data;
};

export const getPharmacyComments = async (id) => {
  const response = await axios.get(`/comment/${id}`);
  return response.data;
};
