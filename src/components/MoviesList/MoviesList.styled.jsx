import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content:center;
  list-style: none;
  
`;

export const MovieItem = styled.li`
  width: 400px;
  text-align: center;
  border-bottom: 1px solid white;
  height: 700px;
 \
  &:hover {
    border: none;
    box-shadow: 3px 3px 10px 3px rgba(255,255,255,0.72);
  }
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color:  #EAEAEA;
  font-size: 24px;
  height: 100%;
`;

export const Poster = styled.img`
  width: 100%;
  height: 600px;
  display: block;
  margin-bottom: 20px;
`;


