import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';


export const HeaderStyled = styled.header` 
  padding: 30px 40px;
  background-color: #080808;
`; 

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
`;

export const LogoStyled = styled.img`
  display: block;
  margin-right: 40px;
  height: 30px;
`;

export const StyledLink = styled(NavLink)`
  color: #EAEAEA;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;

  :not(:last-child) {
    margin-right: 20px;
}

  &.active {
    color: #F33F3F;
  }
`;

