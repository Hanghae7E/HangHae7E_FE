/* eslint-disable no-param-reassign */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
import {
  AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse,
} from 'axios';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig =>
// console.info(`[request] [${JSON.stringify(config)}]`);
// console.log(config.url);

  config;
const onRequestError = (error: AxiosError): Promise<AxiosError> =>
// console.error(`[request error] [${JSON.stringify(error)}]`);
  Promise.reject(error);
const onResponse = (response: AxiosResponse): AxiosResponse =>
  // console.info(`[response] [${JSON.stringify(response)}]`);
  response;
const onResponseError = (error: AxiosError): Promise<AxiosError> =>
  // console.error(`[response error] [${JSON.stringify(error)}]`);
  Promise.reject(error);
export default function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
