import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseButton from '../Buttons/CloseButton/CloseButton';
import { Backdrop, ModalContainer } from './Modal.styled';



const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const onEscClick = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onEscClick);
    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [closeModal]);

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Backdrop onClick={onOverlayClick}>
      <ModalContainer>
        <CloseButton click={closeModal} />
        {children}
      </ModalContainer>
		
    </Backdrop>,
    document.getElementById('modal-root')
  );
};

export default Modal;
