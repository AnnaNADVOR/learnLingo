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
   transition: transform ${({ theme }) => theme.transition};

   &:hover,
   &:focus {
      transform: scale(1.03);
   }

   svg {
      width: 20px;
      height: 20px;
      stroke: ${({ theme }) => theme.colors.accentYellow};
      margin-right: 8px;
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
   box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
   background-color: ${({ theme }) => theme.colors.primaryTextColor};
   color: ${({ theme }) => theme.colors.primaryWhite};
   transition: transform ${({ theme }) => theme.transition};

   &:hover,
   &:focus {
      transform: scale(1.03);
   }
`;
