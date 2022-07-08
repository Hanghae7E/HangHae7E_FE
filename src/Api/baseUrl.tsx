import axios from 'axios';
import setupInterceptorsTo from './interceptors';

const baseUrl = axios.create({
  baseURL: 'http://huddledown.link/api',
});

export default setupInterceptorsTo(baseUrl);
