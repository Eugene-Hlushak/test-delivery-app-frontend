import { PropTypes } from 'prop-types';
import { OrdersList, Box, ListItem, Order } from './UserOrdersList.styled';

const UsersOrdersList = ({ orders }) => {
  return (
    <OrdersList>
      {orders.map(item => {
        const created = new Date(item.createdAt).toLocaleString('eu-US');

        return (
          <ListItem key={item._id}>
            <Box>
              {item.createdAt && <p>Created at {created}</p>}
              <ul>
                {item.order.map(orderItem => {
                  return (
                    <ListItem key={orderItem._id}>
                      <Order>
                        <p>{orderItem.name}</p>
                        <p>{orderItem.quantity}</p>
                      </Order>
                    </ListItem>
                  );
                })}
              </ul>
              <span>Total price: {item.totalPrice}</span>
            </Box>
          </ListItem>
        );
      })}
    </OrdersList>
  );
};

UsersOrdersList.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default UsersOrdersList;
