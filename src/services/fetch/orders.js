import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

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
