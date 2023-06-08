import { useState, useContext, useEffect } from 'react';
import { OrderContext } from '../../components/App';
import { useJsApiLoader } from '@react-google-maps/api';
import { PageContainer, Container } from './OrderPage.styled';
import OrderList from '../../components/OrderList/OrderList';
import OrderForm from '../../components/OrderForm/OrderForm';
import { countTotalPrice } from 'services/helpers';

const defaultCenter = { lat: 50.4510788, lng: 30.5214591 };
const API_KEY = process.env.REACT_APP_MAP_API_KEY;
const libraries = ['places'];

const OrderPage = () => {
  const [center, setCenter] = useState(defaultCenter);
  const [isMarker, setIsMarker] = useState(false);
  const { order, setOrder, shopCoords } = useContext(OrderContext);
  const [totalPrice, setTotalPrice] = useState(() => countTotalPrice(order));

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries,
  });

  useEffect(() => {
    const coordinates = JSON.parse(sessionStorage.getItem('coordinates'));
    setCenter(coordinates);
  }, []);

  useEffect(() => {
    const currentOrder = JSON.parse(localStorage.getItem('currentOrder'));
    if (!currentOrder) return;
    if (currentOrder.length > 0) {
      setOrder(currentOrder);
    }
  }, [setOrder]);

  useEffect(() => {
    localStorage.setItem('currentOrder', JSON.stringify(order));
    const price = countTotalPrice(order);
    setTotalPrice(price);
  }, [order]);

  const getTotalPrice = data => {
    const total = countTotalPrice(data);
    setTotalPrice(total);
  };

  return (
    <PageContainer>
      <Container>
        <OrderForm
          order={order}
          totalPrice={totalPrice}
          setOrder={setOrder}
          isLoaded={isLoaded}
          setCenter={setCenter}
          shopCoords={shopCoords}
          center={center}
          isMarker={isMarker}
          setIsMarker={setIsMarker}
        />
      </Container>
      <OrderList
        order={order}
        setOrder={setOrder}
        getTotalPrice={getTotalPrice}
      />
    </PageContainer>
  );
};

export default OrderPage;
