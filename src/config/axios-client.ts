import axios from 'axios';
import {Base_URL} from './client';

export const get = async (apiURL: string, params?: any) => {
  return axios.get(`${Base_URL}/${apiURL}`, {
    params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
};
