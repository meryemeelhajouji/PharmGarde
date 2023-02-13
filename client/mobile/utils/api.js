import axios from 'axios';
import Constants from 'expo-constants';
const { manifest } = Constants;

const url = `http://${manifest.debuggerHost.split(':').shift()}:5000/api`;
console.log(url);
axios.defaults.baseURL = url;

export const getAllPharmacies = async () => {
  const response = await axios.get('/pharmacy');
  return response.data;
};
