import sprite from '../../assets/icons/sprite.svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import NavBar from '../NavBar/NavBar';
import AuthMenu from '../AuthMenu/AuthMenu';
import { HeaderContainer, FlagIcon, LogoLink } from './Header.styled';

const Header = ({ showMenu, toggleNav, toggleAuth }) => {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <FlagIcon>
          <use href={`${sprite}#ukraine`}></use>
        </FlagIcon>
        LearnLingo
      </LogoLink>
      {showMenu ? (
        <MobileMenu showMobileNav={toggleNav} showMobileAuth={toggleAuth} />
      ) : (
        <>
          <NavBar />
          <AuthMenu />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
