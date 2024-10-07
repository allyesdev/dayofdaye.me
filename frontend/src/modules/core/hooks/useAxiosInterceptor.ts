import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '@/modules/core/libs';
import { showError } from '@/utils/errorUtil';

export const useAxiosInterceptor = () => {
  const navigate = useNavigate();

  const onRequest = (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('token');
    if (accessToken && !config.headers.Authorization) {
      config.headers.Authorization = accessToken;
    }
    return config;
  };

  const onResponse = (response: AxiosResponse) => {
    if (response.data) {
      return response.data;
    }
    return response;
  };

  const onError = (error: AxiosError | Error) => {
    console.error(error);

    if (axios.isAxiosError(error)) {
      const { method, url } = error.config as InternalAxiosRequestConfig;
      if (error.response) {
        const { status, data } = error.response;
        console.error(
          `[ERR] ${method?.toUpperCase()} ${url} | Error ${status} `
        );
        switch (status) {
          case 401: // unauthorized
          case 400: // bad request
          case 403: // # 403 Forbidden
          case 404: // # 404 Not Found
          case 409: // # 409 Conflict
          case 429: // # 429 Too Many Requests
          case 500: // internal server error
            showError('', data);
            break;

          default:
            showError('HttpUnknownError');
            break;
        }
      }
    } else if (error instanceof Error && error.name === 'TimeoutError') {
      showError(error.name);
    } else {
      showError('EtcError');
    }
    return Promise.reject(error);
  };

  const requestInterceptor = axiosInstance.interceptors.request.use(
    onRequest,
    onError
  );
  const responseInterceptor = axiosInstance.interceptors.response.use(
    onResponse,
    onError
  );

  useEffect(
    () => () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    },
    [requestInterceptor, responseInterceptor]
  );
};
