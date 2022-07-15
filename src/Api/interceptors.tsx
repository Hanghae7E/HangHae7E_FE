/* eslint-disable no-param-reassign */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
import {
  AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse,
} from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const newConfig = { ...config };
  // newConfig.url = `${config.url}`;
  //   if (newConfig.headers['Content-Type'] === 'multipart/form-data') { return newConfig; }
  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }
  return newConfig;
};
const onRequestError = (error: AxiosError): Promise<AxiosError> =>
// console.error(`[request error] [${JSON.stringify(error)}]`);
  Promise.reject(error);
const onResponse = (response: AxiosResponse): AxiosResponse => {
  if (
    response.data
    && response.headers['content-type'] === 'application/json'
  ) {
    response.data = camelizeKeys(response.data);
  }

  return response;
};
const onResponseError = (error: AxiosError): Promise<AxiosError> =>
  // console.error(`[response error] [${JSON.stringify(error)}]`);
  Promise.reject(error);
export default function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
