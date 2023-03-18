import { NavLink } from 'react-router-dom';
import { HeaderStyled, LogoStyled, StyledLink } from './Header.styled';
import Logo from '../../images/logo.png'

export const Header = () => {
    return (
        <HeaderStyled>
            <nav>
                <NavLink><LogoStyled src={Logo} alt='Logo'/></NavLink>
                <StyledLink to='/' end>Home</StyledLink>
                <StyledLink to='movies'>Movies</StyledLink>
            </nav> 
        </HeaderStyled>
    )
}