import axios, { AxiosResponse } from 'axios';
// import { REQUEST_HEADER } from '../constant';
// import { IFetchppRequestBody, IAppFetchResponse } from './../interfaces';

export const fetchPosts = async () => {
    try {
        const response: AxiosResponse<any> = await axios.get(`${process.env.API_URL}/post/all`, {
            headers: {
              'Content-Type': 'application/json'
            }
        });
        return response?.data?.data;
      } catch (err) {
        throw err;
      }
}
