import styled from '@emotion/styled';

export const CardsList = styled.ul``;

export const TeacherCard = styled.li`
  display: flex;
  gap: 48px; 
  border-radius: 24px;
  padding: 24px;
  font-weight: 500;
  background-color: var(--primary-white);
  
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;
