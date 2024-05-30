import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
   display: block;
   padding-top: 30px;
   padding-bottom: 30px;
   line-height: 1.25;

   &.active {
      color: ${({ theme }) => theme.colors.accentYellow};
   }
`;

export const Nav = styled.nav`
   @media screen and (min-width: 1440px) {
      margin-left: 390px;
   }
`;

export const NavList = styled.ul`
   display: flex;
`;

export const NavListItem = styled.li`
   &:not(:last-child) {
      margin-right: 28px;
   }
`;
