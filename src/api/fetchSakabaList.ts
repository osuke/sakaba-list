import axios, { AxiosResponse } from 'axios';
import { API_URL } from '@/constants';
import { IRestaurant } from '@/store';

export const fetchSakabaList = async () => {
  const res: AxiosResponse<{items: IRestaurant[]}> = await axios.get(API_URL, {});
  return res.data;
};
