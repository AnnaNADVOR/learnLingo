import HeroIcon from './HeroIcon/HeroIcon';
import WelcomeInfo from './WelcomeInfo/WelcomeInfo';

const Hero = ({ selectedTheme }) => {
  return (
      <div>
          <HeroIcon selectedTheme={selectedTheme} />
      <WelcomeInfo />
      
    </div>
  );
};

export default Hero;
