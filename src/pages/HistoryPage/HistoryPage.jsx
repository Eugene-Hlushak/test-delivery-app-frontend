import { useState } from 'react';
import { PageContainer } from './HistoryPaje.styled';
import OrdersRequestForm from 'components/OrdersRequestForm/OrdersRequestForm';
import UsersOrdersList from 'components/UsersOrdersList/UsersOrdersList';

const HistoryPage = () => {
  const [orders, setOrders] = useState([]);
  return (
    <PageContainer>
      <OrdersRequestForm setOrders={setOrders} />
      {orders.length > 0 && <UsersOrdersList orders={orders} />}
    </PageContainer>
  );
};

export default HistoryPage;
