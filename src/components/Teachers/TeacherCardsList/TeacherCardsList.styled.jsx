import styled from '@emotion/styled';

export const CardsList = styled.ul``;

export const TeacherCard = styled.li`
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 48px; 
  border-radius: 24px;
  padding: 24px;
  font-weight: 500;
  background-color: var(--primary-white);
  margin-bottom: 64px;
  
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 780px) { 
    align-items: flex-start;
    flex-direction: row;
  }
`;
