import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
    display:block;
    padding: 5px;
    width: 70px;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 2px;
    text-decoration: none;
    color: black;

`;

export const MovieContainer = styled.div`
    padding-top: 20px;

`;

export const MovieDetails = styled.div`
    display: flex; 
    gap: 20px;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid silver;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

`;

export const AdditionalInfo = styled.div`
    width: 100%;
    border-bottom: 1px solid silver;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

`;

