import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--modal-overlay);
 `;

export const ModalContainer = styled.div`
  position: absolute;
  min-width: 450px;
  padding: 40px;
  left: 50%;
  top: 50%;
  border-radius: 30px; 
  background-color: var(--primary-white);
  transform: translate(-50%, -50%) scale(1);
  transition: transform var(--hover-transition); 

  @media screen and (min-width: 300px) and (max-width: 460px) {
    min-width: 90%;
    padding: 30px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 566px;
    padding: 64px;
  }
`;
