import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';


export const HeaderStyled = styled.header`
    padding: 20px 30px;
    border-bottom: 1px solid silver;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`; 

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;

  :not(:last-child) {
    margin-right: 20px;
}

  &.active {
    color: red;
  }
`;

