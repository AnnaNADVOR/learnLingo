import styled from '@emotion/styled';

export const PickerButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding:0;
  cursor: pointer;

  &:hover > svg {
    filter: drop-shadow(0 0 7px var(--secondary-transparent-black));
  }

  svg {
    width: 30px;
    height: 30px;
    fill: var(--primary-white);
    filter: drop-shadow(0 0 5px var(--main-transparent-black));
    transition: filter var(--hover-transition);
  }

  @media screen and (min-width: 1440px) {
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
