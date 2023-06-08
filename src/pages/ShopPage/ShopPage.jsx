import { useState, useEffect, useContext } from 'react';
import { OrderContext } from '../../components/App';
import ShopList from '../../components/ShopList/ShopList';
import ProductsList from '../../components/ProductsList/ProductsList';
import {
  PageContainer,
  ResetButton,
  Container,
  TitleContainer,
} from './ShopPage.styled';
import { getShops } from '../../services/fetch';

const ShopPage = () => {
  const { order, setOrder, setShopCoords } = useContext(OrderContext);
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const shops = async () => {
      try {
        const result = await getShops();
        setShops(result);
      } catch (error) {
        console.log(error);
      }
    };

    shops();
  }, []);

  const resetCart = () => {
    localStorage.setItem('currentOrder', JSON.stringify([]));
    setOrder([]);
  };

  return (
    <PageContainer>
      <TitleContainer>
        <h2>What do yo prefer today?</h2>
        <ResetButton onClick={resetCart}>Reset cart</ResetButton>
      </TitleContainer>
      <Container>
        <ShopList
          shops={shops}
          setProducts={setProducts}
          order={order}
          setShopCoords={setShopCoords}
        />
        {
          <ProductsList
            products={products}
            setProducts={setProducts}
            setOrder={setOrder}
            order={order}
            setShopCoords={setShopCoords}
          />
        }
      </Container>
    </PageContainer>
  );
};
export default ShopPage;
