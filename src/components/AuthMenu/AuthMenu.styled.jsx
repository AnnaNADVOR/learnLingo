import styled from '@emotion/styled';

export const AuthButtonList = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1440px) {
    margin-left: auto;
  }
`;

export const AuthButtonListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const LoginButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-weight: 700;
  line-height: 1.25;
  color: var(--primary-black);
  transition: color var(--hover-transition);

  &:hover,
  &:focus {
    color: var(--main-transparent-black);
  }

  &:hover > svg,
  &:focus > svg {
    stroke: var(--accent-background);
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: var(--accent);
    margin-right: 8px;
    transition: stroke var(--hover-transition);
  }
`;

export const RegisterButton = styled.button`
  cursor: pointer;
  display: inline-block;
  min-width: 166px;
  min-height: 48px;
  padding: 14px 39px;
  border: none;
  font-weight: 700;
  line-height: 1.25;
  border-radius: 12px;
  background-color: var(--primary-black);
  color: var(--primary-white);
  transition: box-shadow var(--hover-transition);

  &:hover,
  &:focus {
    box-shadow: var(--button-shadow);
  }
`;
