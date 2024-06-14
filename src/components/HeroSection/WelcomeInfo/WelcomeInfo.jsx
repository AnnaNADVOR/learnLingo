import MainButton from 'components/Buttons/MainButton/MainButton';
import { InfoContainer, WelcomeMessage, Title } from './WelcomeInfo.styled';

const WelcomeInfo = () => {
  return (
    <InfoContainer>
      <Title>
        Unlock your potential with the best <span>language</span> tutors
      </Title>
      <WelcomeMessage>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </WelcomeMessage>
      <MainButton text="Get started" type="button" />
    </InfoContainer>
  );
};

export default WelcomeInfo;
