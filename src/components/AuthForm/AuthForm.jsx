import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import authFormSchema from "../../schemas/authFormSchema";
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
  ErrorMessage,
} from './AuthForm.styled';

const AuthForm = ({ title, message }) => {
  const [showPassword, setShowPassword] = useState(false);
  const switchPassword = () => setShowPassword(!showPassword); 

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(authFormSchema),
  });

  const handleSubmitForm = (data) => {
    console.log(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormTitle>{title}</FormTitle>
      <InfoMessage>{message}</InfoMessage>
      {title === 'Registration' && (
        <InputField>
          <label htmlFor="userName">
            <FormInput
              {...register("userName")}
              type="text"
              name="userName"
              placeholder="Name"
              autoComplete='off'          
            />
           <ErrorMessage>{errors.userName?.message}</ErrorMessage>
          </label>
        </InputField>
      )}
      <InputField>
        <label htmlFor="userEmail">
          <FormInput
            {...register("userEmail")}
            type="email"
            name="userEmail"
            placeholder="Email"
            autoComplete="off"           
          />
          <ErrorMessage>{errors.userEmail?.message}</ErrorMessage>
        </label>
      </InputField>
      <InputField>
        <label htmlFor="userPassword">
          <PasswordField>
            <FormInput
              {...register("userPassword")}
              type={showPassword ? 'text' : 'password'}
              name="userPassword"
              placeholder="Password"
              autoComplete="off"             
            />
            <ErrorMessage>{errors.userPassword?.message}</ErrorMessage>
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
