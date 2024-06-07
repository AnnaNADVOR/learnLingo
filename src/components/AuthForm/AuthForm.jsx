import { useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import MainButton from '../Buttons/MainButton/MainButton';
import {
  FormTitle,
  InfoMessage,
  FormInput,
  InputField,
  PasswordField,
  PasswordButton,
  HidePasswordIcon,
  ShowPasswordIcon,
} from './AuthForm.styled';

const AuthForm = ({ title, message }) => {
  const [showPassword, setShowPassword] = useState(false);
  const switchPassword = () => setShowPassword(!showPassword);
 
  
  return (
    <form>
      <FormTitle>{title}</FormTitle>
      <InfoMessage>{message}</InfoMessage>
      {title === 'Registration' && (
        <InputField>
          <label htmlFor="userName">
            <FormInput
              type="text"
              name="userName"
              placeholder="Name"
              required
            />
          </label>
        </InputField>
      )}
      <InputField>
        <label htmlFor="userEmail">
          <FormInput
            type="email"
            name="userEmail"
            placeholder="Email"
            autoComplete="off"
            required
          />
        </label>
      </InputField>
      <InputField>
        <label htmlFor="userPassword">
          <PasswordField>
            <FormInput
              type={showPassword ? 'text' : 'password'}
              name="userPassword"
              placeholder="Password"
              autoComplete="off"
              required
            />
            <PasswordButton type="button" onClick={switchPassword}>
              {!showPassword ? (
                <HidePasswordIcon>
                  <use href={`${sprite}#eye-off`}></use>
                </HidePasswordIcon>
              ) : (
                <ShowPasswordIcon>
                  <use href={`${sprite}#eye-on`}></use>
                </ShowPasswordIcon>
              )}
            </PasswordButton>
          </PasswordField>
        </label>
      </InputField>
      <MainButton text={title === 'Registration' ? 'Sign Up' : 'Log In'} type="submit" />
    </form>
  );
};

export default AuthForm;
