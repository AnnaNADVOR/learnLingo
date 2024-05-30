import { useState } from 'react';

import AuthForm from 'components/AuthForm/AuthForm';
import { AuthContainer, RegisterLink } from './MobileAuth.styled';


const MobileAuth = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const toggleRegisterForm = () => setShowRegisterForm(!showRegisterForm);
  return (
    <AuthContainer>
      {showRegisterForm ? (
        <>
          <AuthForm
            title="Registration"
            message="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
          />
          <span>
            Already have an accaunt?{' '}
            <RegisterLink onClick={toggleRegisterForm}>Log In</RegisterLink>
          </span>
        </>
      ) : (
        <>
          <AuthForm
            title="Log In"
            message="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
          />
          <span>
            Don't have an accaunt?{' '}
            <RegisterLink onClick={toggleRegisterForm}>
              Registration
            </RegisterLink>{' '}
          </span>
        </>
      )}
    </AuthContainer>
  );
};

export default MobileAuth;
