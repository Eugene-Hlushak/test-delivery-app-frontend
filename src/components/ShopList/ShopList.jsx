import { PropTypes } from 'prop-types';
import { ShopContainer } from './ShopList.styled';
import ShopListItem from './ShopListItem';
import { useState, useEffect } from 'react';

const ShopList = ({ shops, setProducts, order, setShopCoords }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (order.length > 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [order.length]);

  return (
    <ShopContainer>
      <ul>
        {shops.map(shop => (
          <ShopListItem
            key={shop._id}
            shop={shop}
            setProducts={setProducts}
            isDisabled={isDisabled}
            setShopCoords={setShopCoords}
          />
        ))}
      </ul>
    </ShopContainer>
  );
};

ShopList.propTypes = {
  shops: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
  order: PropTypes.array.isRequired,
  setShopCoords: PropTypes.func.isRequired,
};
export default ShopList;
