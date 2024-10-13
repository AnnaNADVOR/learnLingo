import styled from '@emotion/styled';

export const FormTitle = styled.b`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const FormSummary = styled.p`
  font-size: 16px;
  line-height: 1.375;
  color: var(--secondary-transparent-black);
  margin-bottom: 20px;
`;

export const TeacherInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const TeacherAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100px;
  margin-right: 14px;
`;

export const TeacherInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
`;

export const TeacherNameLable = styled.p`
  font-size: 12px;
  line-height: 1.33333;
  color: var(--secondary-black);
`;

export const TeacherName = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-black);
`;

export const RadioLegend = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33333;
  color: var(--primary-black);
  margin-bottom: 20px;
`;

export const RadioList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

export const RadioItem = styled.li`
  display: flex;
  position: relative;
  /* padding-left: 32px; */
  align-items: center;
`;

export const RadioLabel = styled.label`
  padding-left: 32px;
  font-size: 16px;
  line-height: 1.375;
`;

export const RadioInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background-color: transparent;
    border: 2px solid rgba(18, 20, 23, 0.278);
  }

  &:checked::after {
    background-color: var(--accent);
    border: 2px solid var(--accent);
    outline: 4px solid white;
    outline-offset: -6px;
  }
`;

export const TextInputList = styled.ul`
  margin-bottom: 40px;

  & > li:not(:last-child) {
    margin-bottom: 18px;
  }
`;
