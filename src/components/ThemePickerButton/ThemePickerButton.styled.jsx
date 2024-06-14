import styled from '@emotion/styled';

export const PickerButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: inline-flex;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
    fill: var(--primary-white);
    filter: drop-shadow(0 0 5px var(--main-transparent-black));
  }
`;
