import axios, { AxiosResponse } from 'axios';
import { API_URL } from '@/constants';

export interface IRestaurant {
  id: string;
  area: string;
  name: string;
  url: string;
}

export const fetchSakabaList = async () => {
  const res: AxiosResponse<{items: IRestaurant[]}> = await axios.get(API_URL, {});
  return res.data;
};
