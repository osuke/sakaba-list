import axios, { AxiosResponse } from 'axios';
import { GNAVI_API_URL } from '@/constants';
import { IRestaurant } from '@/store';

export const fetchSearchResult = async (name: string) => {
  const res: AxiosResponse<any> = await axios.get(GNAVI_API_URL, {
    params: {
      name,
    },
  });
  return res.data;
};
