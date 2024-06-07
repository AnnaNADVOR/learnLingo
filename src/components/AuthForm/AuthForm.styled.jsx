import styled from '@emotion/styled';

export const FormTitle = styled.h3`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const InfoMessage = styled.p`
  line-height: 1.375;
  color: var(--secondary-transparent-black);
  margin-bottom: 40px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 16px 18px;
  outline: transparent;
  border: var(--input-form-border);
  border-radius: 12px;
  background-color: transparent;
`;

export const InputField = styled.div`
  &:not(:last-child) {
    margin-bottom: 18px;
  }

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const PasswordField = styled.div`
  position: relative;
`;

export const PasswordButton = styled.button`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 18px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

const PasswordIcon = styled.svg`
  fill: var(--primary-black);
`;

export const HidePasswordIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--primary-black);
`;

export const ShowPasswordIcon = PasswordIcon.withComponent(HidePasswordIcon);
