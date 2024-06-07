import HeroIcon from './HeroIcon/HeroIcon';
import WelcomeInfo from './WelcomeInfo/WelcomeInfo';

const Hero = ({ selectedTheme }) => {
  return (
    <div>
      <WelcomeInfo />
      <HeroIcon selectedTheme={selectedTheme} />
    </div>
  );
};

export default Hero;
