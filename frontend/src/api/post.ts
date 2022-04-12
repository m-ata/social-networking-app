import axios, { AxiosResponse } from 'axios';
import { TFetchPostResponse, TDeletePostResponse } from './../types';

export const fetchPosts = async () => {
    try {
        const response: AxiosResponse<TFetchPostResponse> = await axios.get(`${process.env.API_URL}/post/all`, {
            headers: {
              'Content-Type': 'application/json'
            }
        });
        return response?.data?.data;
      } catch (err) {
        throw err;
      }
}

export const deletePost = async (id: string) => {
  try {
      const response: AxiosResponse<TDeletePostResponse> = await axios.delete(`${process.env.API_URL}/post/delete/${id}`, {
          headers: {
            'Content-Type': 'application/json'
          }
      });
      return response?.data?.data;
    } catch (err) {
      throw err;
    }
}