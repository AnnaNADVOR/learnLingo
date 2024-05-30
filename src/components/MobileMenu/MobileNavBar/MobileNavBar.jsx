import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import CloseButton from '../../Buttons/CloseButton/CloseButton';
import NavBar from 'components/NavBar/NavBar';
import { MobileContainer } from './MobileNavBar.styled';
import { Backdrop } from '../../Modal/Modal.styled';

const MobileNavBar = ({ showNav }) => {
  useEffect(() => {
    const onEscClick = event => {
      if (event.code === 'Escape') {
        showNav();
      }
    };
    window.addEventListener('keydown', onEscClick);
    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [showNav]);

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      showNav();
    }
  };
  return createPortal(
    <Backdrop onClick={onOverlayClick}>
      <MobileContainer>
        <CloseButton click={showNav} />
        <NavBar showNav={showNav}/>
      </MobileContainer>
    </Backdrop>,
    document.getElementById('modal-root')
      );
 
};

export default MobileNavBar;
