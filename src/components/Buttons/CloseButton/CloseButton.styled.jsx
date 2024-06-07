import styled from '@emotion/styled';

export const Button = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: stroke var(--hover-transition);

  & > svg:hover,
  & > svg:focus {
   stroke: var(--accent);
  }
`;

export const CloseIcon = styled.svg`
  fill: currentColor;
  stroke: var(--primary-black);
  width: 32px;
  height: 32px;
`;
