import axios, { AxiosResponse } from 'axios';

export const fetchUser = async (id) => {
    try {
        const response: AxiosResponse<any> = await axios.get(`${process.env.API_URL}/user/${id}`, {
            headers: {
              'Content-Type': 'application/json'
            }
        });
        return response?.data?.data;
      } catch (err) {
        throw err;
      }
}
