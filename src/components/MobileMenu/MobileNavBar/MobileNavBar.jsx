import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import CloseButton from '../../Buttons/CloseButton/CloseButton';
import NavBar from 'components/NavBar/NavBar';
import { MenuContainer, Backdrop, Menu } from './MobileNavBar.styled';

const MobileNavBar = ({ closeNav, showNav }) => {

  useEffect(() => {
    const onEscClick = event => {
      if (event.code === 'Escape' && showNav) {
        closeNav();
      }
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
    
  }, [closeNav, showNav]);

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeNav();
    }
  };

  return createPortal(
    <Backdrop onClick={onOverlayClick} active={showNav}>
      <Menu>
        <MenuContainer>
          <CloseButton click={closeNav} />
          <NavBar closeNav={closeNav} />
        </MenuContainer>
      </Menu>
    </Backdrop>,
    document.getElementById('modal-root')
  );
};

export default MobileNavBar;
