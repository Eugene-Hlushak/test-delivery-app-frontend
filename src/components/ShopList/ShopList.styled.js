import styled from 'styled-components';

export const ShopContainer = styled.div`
  padding: 10px;
  margin-right: 15px;
  width: 300px;
  border: 1px solid white;
  border-radius: 10px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Shop = styled.button`
  padding: 10px;
  height: 50px;
  width: 100%;
  display: block;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: border-color 0.25s;
  background-color: bisque;

  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
