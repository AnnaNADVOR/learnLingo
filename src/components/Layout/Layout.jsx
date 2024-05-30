import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import NavBar from '../NavBar/NavBar';
import { HeaderContainer, FlagIcon, LogoLink } from './Layout.styled';
import Modal from 'components/Modal/Modal';
import AuthMenu from '../AuthMenu/AuthMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import MobileNavBar from 'components/MobileMenu/MobileNavBar/MobileNavBar';
import MobileAuth from 'components/MobileMenu/MobileAuth/MobileAuth';

const Layout = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showMobileAuth, setShowMobileAuth] = useState(false);
  const toggleMobileNav = () => setShowMobileNav(!showMobileNav);
  const toggleMobileAuth = () => setShowMobileAuth(!showMobileAuth);
  return (
    <>
      <header>
        <HeaderContainer>
          <LogoLink to="/">
            <FlagIcon>
              <use href={`${sprite}#ukraine`}></use>
            </FlagIcon>
            LearnLingo
          </LogoLink>
          {/*                       
                 <NavBar />
                 <AuthMenu/> */}

          <MobileMenu
            showMobileNav={toggleMobileNav}
            showMobileAuth={toggleMobileAuth}
          />
          {showMobileNav && <MobileNavBar buttonClick={toggleMobileNav} />}
          {showMobileAuth && (
            <Modal closeModal={toggleMobileAuth}>
              <MobileAuth/>
            </Modal>
          )}
        </HeaderContainer>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
