import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import CloseButton from '../../Buttons/CloseButton/CloseButton';
import NavBar from 'components/NavBar/NavBar';
import { MobileContainer } from './MobileNavBar.styled';
import { Backdrop } from '../../Modal/Modal.styled';

const MobileNavBar = ({ buttonClick }) => {
  useEffect(() => {
    const onEscClick = event => {
      if (event.code === 'Escape') {
        buttonClick();
      }
    };
    window.addEventListener('keydown', onEscClick);
    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [buttonClick]);

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      buttonClick();
    }
  };
  return createPortal(
    <Backdrop onClick={onOverlayClick}>
      <MobileContainer>
        <CloseButton click={buttonClick} />
        <NavBar />
      </MobileContainer>
    </Backdrop>,
    document.getElementById('modal-root')
      );
 
};

export default MobileNavBar;
