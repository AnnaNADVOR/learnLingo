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
  transition: stroke ${({ theme }) => theme.transition};

  & > svg:hover,
  & > svg:focus {
    stroke: ${({ theme }) => theme.colors.accentYellow};
  }
`;

export const CloseIcon = styled.svg`
  fill: currentColor;
  stroke: ${({ theme }) => theme.colors.primaryTextColor};
  width: 32px;
  height: 32px;
`;
