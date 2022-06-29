import axios from 'axios';
import setupInterceptorsTo from './Interceptors';

const baseUrl = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
});

export default setupInterceptorsTo(baseUrl);
