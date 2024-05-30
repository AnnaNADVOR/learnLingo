import styled from '@emotion/styled';

export const ButtonList = styled.ul`
    display: flex; 
    align-items: center;
    justify-content: center;   
`;

export const ButtonItem = styled.li`
    &:not(:last-child) {
        margin-right: 10px;
    }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  cursor: pointer;



  &:hover>svg, 
  :focus>svg {
    fill: ${({ theme }) => theme.colors.accentYellow};
  }
`;

const Icon = styled.svg`
    width: 20px;
    height: 20px;    
`
export const MenuIcon = styled.svg`
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.colors.primaryTextColor};
    transition: fill ${({ theme }) => theme.transition};
`

export const UserIcon = Icon.withComponent(MenuIcon);