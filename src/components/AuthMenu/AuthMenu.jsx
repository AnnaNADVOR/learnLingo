import { useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import {
  AuthButtonList,
  LoginButton,
  RegisterButton,
  AuthButtonListItem,
} from './AuthMenu.styled';
import Modal from 'components/Modal/Modal';
import AuthForm from 'components/AuthForm/AuthForm';

const AuthNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(null);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const toggleForm = event => {
    setShowForm(event.currentTarget.id);
    toggleModal();
  };

  return (
    <>
      <AuthButtonList>
        <AuthButtonListItem>
          <LoginButton type="button" onClick={toggleForm} id="login">
            <svg>
              <use href={`${sprite}#log-in`}></use>
            </svg>
            Log in
          </LoginButton>
        </AuthButtonListItem>
        <AuthButtonListItem>
          <RegisterButton type="button" onClick={toggleForm} id="register">
            Registration
          </RegisterButton>
        </AuthButtonListItem>
      </AuthButtonList>
      {showModal && (
        <Modal closeModal={toggleModal}>
          {showForm === 'login' && (
            <AuthForm
              title="Log In"
              message="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
            />
          )}
          {showForm === 'register' && (
            <AuthForm
              title="Registration"
              message="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default AuthNav;
