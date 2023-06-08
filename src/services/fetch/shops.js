import axios from 'axios';
const API_URL = 'https://test-delivery-app-backend.onrender.com/api';
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
