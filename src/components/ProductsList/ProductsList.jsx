import { ProductsContainer, List, Hungry } from './ProductsList.styled';
import { PropTypes } from 'prop-types';
import ProductListItem from './ProductsListItem';
import { useEffect } from 'react';

const ProductsList = ({ products, setProducts, setOrder, order }) => {
  useEffect(() => {
    const currentProducts = JSON.parse(
      sessionStorage.getItem('currentProducts')
    );

    if (currentProducts) setProducts(currentProducts);
  }, [setProducts]);

  return (
    <ProductsContainer>
      {products.length === 0 ? (
        <Hungry>Hungry? Hurry click on any store!</Hungry>
      ) : (
        <List>
          {products.map(product => (
            <ProductListItem
              key={product._id}
              product={product}
              setOrder={setOrder}
              order={order}
            />
          ))}
        </List>
      )}
    </ProductsContainer>
  );
};
ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  order: PropTypes.array.isRequired,
  setOrder: PropTypes.func.isRequired,
  setProducts: PropTypes.func.isRequired,
};
export default ProductsList;
