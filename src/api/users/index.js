import axios from 'axios';
import { API_BASE_URL } from 'configs/AppConfig';
import { notification } from 'antd';

// Config

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let notificationParam = {
      message: '',
    };
    if (error.response.status === 404) {
      notificationParam.message = 'Not Found';
    }

    if (error.response.status === 500) {
      notificationParam.message = 'Internal Server Error';
    }

    if (error.response.status === 508) {
      notificationParam.message = 'Time Out';
    }
    notification.error(notificationParam);
    return Promise.reject(error);
  }
);

export default service;
