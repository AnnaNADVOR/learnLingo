import GirlHero from '../../../assets/images/hero/girl-hero.png';
import { IconContainer, GirlIcon, MacIcon } from './HeroIcon.styled';

const HeroIcon = ({ selectedTheme }) => {
  return (
    <IconContainer >
      <GirlIcon alt="girl icon" src={GirlHero} />
      <MacIcon
        alt="iMac icon"
        src={require(`../../../assets/images/hero/iMac-hero-${selectedTheme}.png`)}
      />
    </IconContainer>
  );
};

export default HeroIcon;
