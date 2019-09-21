import axios, { AxiosResponse } from 'axios';
import { GNAVI_API_URL } from '@/constants';

export interface ISearchResult {
  rest: ISearchResultItem[];
}

export interface ISearchResultItem {
  name: string;
  id: string;
  url: string;
  address: string;
}

export const fetchSearchResult = async (name: string) => {
  const res: AxiosResponse<ISearchResult> = await axios.get(GNAVI_API_URL, {
    params: {
      name,
    },
  });
  return res.data;
};
