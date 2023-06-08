import { PropTypes } from 'prop-types';
import { ListItem, Shop } from './ShopList.styled';
import { getProductsByShop } from '../../services/fetch/';
import { convertCoords } from 'services/helpers';

const ShopListItem = ({ shop, setProducts, isDisabled, setShopCoords }) => {
  const productsHandler = async shopId => {
    const products = await getProductsByShop(shopId);
    const coordinates = convertCoords(shop);
    sessionStorage.setItem('currentProducts', JSON.stringify(products));
    sessionStorage.setItem('coordinates', JSON.stringify(coordinates));
    setProducts(products);
    setShopCoords(coordinates);
  };

  return (
    <ListItem>
      <Shop
        disabled={isDisabled}
        onClick={() => {
          productsHandler(shop._id);
        }}
      >
        {shop.name}
      </Shop>
    </ListItem>
  );
};

ShopListItem.propTypes = {
  shop: PropTypes.object.isRequired,
  setProducts: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  setShopCoords: PropTypes.func.isRequired,
};

export default ShopListItem;
