import axios from "axios";
import qs from "querystring";

const token = process.env.NEXT_PUBLIC_BEAR_TOKEN;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ZIBAL_ENDPOINT,
  headers: {
    Authorization: `Bearer ${token}`,
  },
  paramsSerializer: (params) => qs.stringify(params),
});

// api.interceptors

export default api;
