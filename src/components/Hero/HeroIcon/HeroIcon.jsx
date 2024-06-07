import GirlHero from '../../../assets/images/hero/girl-hero.png';
import { HeroContainer, GirlIcon, MacIcon } from './HeroIcon.styled';

const HeroIcon = ({ selectedTheme }) => {
  return (
    <HeroContainer>
      <GirlIcon alt="girl icon" src={GirlHero} />
      <MacIcon
        alt="iMac icon"
        src={require(`../../../assets/images/hero/iMac-hero-${selectedTheme}.png`)}
      />
    </HeroContainer>
  );
};

export default HeroIcon;
