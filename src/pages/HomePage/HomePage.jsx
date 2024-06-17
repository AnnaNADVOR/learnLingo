import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import HeroSection from '../../components/HeroSection/HeroSection';

const HomePage = ({ selectedTheme }) => {
  return (
    <div style={{ transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
      <HeroSection selectedTheme={selectedTheme} />
      <FeaturesSection />
    </div>
  );
};

export default HomePage;
