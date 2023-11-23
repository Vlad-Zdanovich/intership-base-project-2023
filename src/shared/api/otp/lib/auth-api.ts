import axios from "axios";

export const authApi = axios.create({
    baseURL: 'https://stoplight.io/mocks/kode-education/kode-bank/27774162/api/auth',
    headers: {
      Accept: 'application/json'
    }
  })