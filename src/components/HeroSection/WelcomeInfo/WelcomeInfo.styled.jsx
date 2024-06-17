import styled from '@emotion/styled';

export const InfoContainer = styled.div`
  background-color: var(--secondary-background);
  padding: 38px 28px;
  border-radius: var(--border-radius);
  text-align: center;
  width: 100%;

  button {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 48px;
  }

  @media screen and (min-width: 1440px) {
    padding: 98px 105px 98px 64px;
    width: 725px;
    text-align: start;

    button {
      margin-left: 0;
      width: 275px;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.16;
  margin-bottom: 22px;

  span {
    position: relative;
    font-style: italic;
    font-weight: 400;
    z-index: 0;

    &::before {
      content: '';
      display: flex;
      position: absolute;
      border-radius: 5px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -40%);
      width: 105%;
      height: 25px;
      border-radius: 5px;
      background-color: var(--accent-background);
      z-index: -1;
    }

    @media screen and (min-width: 768px) {
      &::before {
        height: 40px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 32px;
  }
`;

export const WelcomeMessage = styled.p`
  line-height: 1.375;
  margin-bottom: 38px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;
