import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/',
});

axiosInstance.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['apikey'] = process.env.REACT_APP_API_KEY;
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

export default axiosInstance;