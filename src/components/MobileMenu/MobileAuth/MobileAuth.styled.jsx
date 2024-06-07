import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const RegisterLink = styled(Link)`
  color: var(--accent);
  text-decoration: underline;
  margin-left: 10px;
`;
