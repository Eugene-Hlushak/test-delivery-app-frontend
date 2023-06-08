import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  top: 0;
  left: 0;
  position: absolute;
  padding: 20px;
  width: 100%;
  /* height: 60px; */
  box-shadow: 3px 3px 3px 3px black;
`;

export const Link = styled(NavLink)`
  color: black;
  font-size: 20px;
  padding: 10px;

  &:hover,
  &:focus {
    color: violet;
  }
  &.active {
    color: royalblue;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
