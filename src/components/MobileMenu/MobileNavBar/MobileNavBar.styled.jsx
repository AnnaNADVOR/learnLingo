import styled from '@emotion/styled';

export const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;  
`;

export const MenuContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 48px 40px;
  background-color: var(--primary-white);
  box-shadow: -4px -1px 20px 0px rgba(0, 0, 0, 0.15);   

  nav { 
    ul {
      flex-direction: column;
     
      li {
        &:not(:last-child) {
          margin: 0;
          margin-bottom: 20px;
        }
        a {
          padding: 0;
          font-size: 25px;
        }
      }
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  transform: ${({ active }) => (active ? 'translatex(0)' : 'translateX(100%)')};
  transition: all 400ms;
`;
