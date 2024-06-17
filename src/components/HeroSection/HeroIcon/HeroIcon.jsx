import { IconContainer } from './HeroIcon.styled';

const HeroIcon = ({ selectedTheme }) => {
  return (
    <IconContainer
      background={require(`../../../assets/images/hero/logo-${selectedTheme}.png`)}
    />
  );
};

export default HeroIcon;
