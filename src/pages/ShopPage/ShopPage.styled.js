import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 0 20px;
  margin-top: 80px;
`;
export const TitleContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;
export const Container = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;
export const ResetButton = styled.button`
  padding: 10px;
  height: 50px;
  width: 100px;
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
