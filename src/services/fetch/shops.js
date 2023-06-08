import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
const shops = axios.create({
  baseURL: API_URL,
});

export const getShops = async () => {
  const { data } = await shops.get('/shops');

  return data;
};

export const getProductsByShop = async id => {
  const { data } = await shops.get(`shops/${id}/products`);

  return data;
};
