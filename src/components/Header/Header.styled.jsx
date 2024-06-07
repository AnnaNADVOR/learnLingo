import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { MainContainer } from '../Container/Container.styled';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1184px;
  }
`;

export const HeaderContainer = Header.withComponent(MainContainer);

export const FlagIcon = styled.svg`
  width: 28px;
  height: 28px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;
