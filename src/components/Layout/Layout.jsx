import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import MobileNavBar from 'components/MobileMenu/MobileNavBar/MobileNavBar';
import MobileAuth from 'components/MobileMenu/MobileAuth/MobileAuth';
import Header from '../Header/Header';

const Layout = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showMobileAuth, setShowMobileAuth] = useState(false);
  const toggleMobileNav = () => setShowMobileNav(!showMobileNav);
  const toggleMobileAuth = () => setShowMobileAuth(!showMobileAuth);

  useEffect(() => {
    const handleResize = () => {
      setShowMobileMenu(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <Header
          showMenu={showMobileMenu}
          toggleAuth={toggleMobileAuth}
          toggleNav={toggleMobileNav}
        />
      </header>
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
