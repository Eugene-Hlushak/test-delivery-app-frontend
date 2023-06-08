import { Field } from 'formik';
import styled from 'styled-components';

export const CustomerForm = styled.div`
  position: relative;
  width: 500px;
  margin-bottom: 10px;
  margin-right: 15px;
  padding: 20px;

  border: 1px solid white;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 15px;
`;

export const LabelTitle = styled.span`
  width: 100px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 20px;
`;

export const FormInput = styled(Field)`
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 10px;
`;

export const Submit = styled.button`
  /* position: absolute;
  right: 0;
  bottom: -60px; */
  padding: 10px;
  height: 50px;
  width: 150px;
  display: block;
  border-radius: 10px;
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
export const TotalPrice = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
