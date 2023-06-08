import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import ShopPage from '../pages/ShopPage/ShopPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import HistoryPage from '../pages/HistoryPage/HistoryPage';

export const OrderContext = createContext();

function App() {
  const [shopCoords, setShopCoords] = useState({});
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider
      value={{ order, setOrder, shopCoords, setShopCoords }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </OrderContext.Provider>
  );
}

export default App;
