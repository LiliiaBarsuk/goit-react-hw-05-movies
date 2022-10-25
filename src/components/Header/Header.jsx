import { HeaderStyled, StyledLink } from './Header.styled';

export const Header = () => {
    return (
        <HeaderStyled>
            <nav>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='movies'>Movies</StyledLink>
            </nav> 
        </HeaderStyled>
    )
}