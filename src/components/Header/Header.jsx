import { HeaderStyled, StyledLink } from './Header.styled';

export const Header = () => {
    return (
        <HeaderStyled>
            <nav>
                <StyledLink to='/' end>Home</StyledLink>
                <StyledLink to='movies'>Movies</StyledLink>
            </nav> 
        </HeaderStyled>
    )
}