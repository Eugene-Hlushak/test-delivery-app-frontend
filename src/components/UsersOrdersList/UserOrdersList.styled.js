import styled from 'styled-components';

export const OrdersList = styled.ul`
  padding: 20px;
  border: 2px solid white;
`;
export const Box = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid white;
`;

export const Order = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
