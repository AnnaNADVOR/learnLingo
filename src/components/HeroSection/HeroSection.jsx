import HeroIcon from './HeroIcon/HeroIcon';
import WelcomeInfo from './WelcomeInfo/WelcomeInfo';
import { Section, HeroContainer } from './HeroSection.styled';
import ThemePickerButton from '../ThemePickerButton/ThemePickerButton';

const HeroSection = ({ selectedTheme }) => {
  return (
    <Section>
      <HeroContainer>
        <div style={{ position: 'relative' }}>
          <ThemePickerButton />
          <HeroIcon selectedTheme={selectedTheme} />
        </div>
        <WelcomeInfo />
      </HeroContainer>
    </Section>
  );
};

export default HeroSection;
