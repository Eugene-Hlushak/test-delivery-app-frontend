import styled from 'styled-components';

export const ProductsContainer = styled.div`
  overflow-y: scroll;
  padding: 10px;
  width: 880px;
  border: 1px solid white;
  border-radius: 10px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ProductCard = styled.div`
  text-align: right;
  padding: 10px;
  width: 250px;
  /* height: 250px; */
  border: 1px solid white;
`;

export const ImgThumb = styled.div`
  height: 150px;
  margin-bottom: 10px;
  border: 1px solid white;
  border-radius: 8px;
`;

export const Img = styled.img`
  border-radius: 8px;
  width: 228px;
  height: 150px;
`;

export const RemoveProduct = styled.button`
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
