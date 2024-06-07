import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background-color: var(--accent);
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  transition: background-color var(--hover-transition);

  &:hover,
  :focus {
    background-color: var(--accent-background);
  }
`;
