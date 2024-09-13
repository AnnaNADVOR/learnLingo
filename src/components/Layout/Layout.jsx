import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import Modal from 'components/Modal/Modal';
import MobileNavBar from 'components/MobileMenu/MobileNavBar/MobileNavBar';
import MobileAuth from 'components/MobileMenu/MobileAuth/MobileAuth';
import HeaderContainer from '../Header/Header';
import { Header } from './Layout.styled';

const Layout = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showMobileAuth, setShowMobileAuth] = useState(false);
  const toggleMobileNav = () => setShowMobileNav(!showMobileNav);
  const toggleMobileAuth = () => setShowMobileAuth(!showMobileAuth);

  useEffect(() => {
    const handleResize = () => {
      setShowMobileMenu(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header>
        <HeaderContainer
          showMenu={showMobileMenu}
          toggleAuth={toggleMobileAuth}
          toggleNav={toggleMobileNav}
        />
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <MobileNavBar closeNav={toggleMobileNav} showNav={showMobileNav} />
      {showMobileAuth && (
        <Modal closeModal={toggleMobileAuth}>
          <MobileAuth />
        </Modal>
      )}
    </>
  );
};

export default Layout;
