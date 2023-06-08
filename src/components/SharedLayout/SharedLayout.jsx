import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Shop</Link>
          <Link to="/order">Your order</Link>
          <Link to="/history">Orders history</Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
