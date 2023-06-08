import axios from 'axios';
const API_URL = 'https://test-delivery-app-backend.onrender.com/api';

const order = axios.create({
  baseURL: API_URL,
});

export const sendOrder = async userOrder => {
  const { data } = await order.post('/orders', userOrder);

  return data;
};

export const getOrders = async () => {
  const { data } = await order.get('/orders');
  return data;
};
