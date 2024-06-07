import Hero from '../../components/Hero/Hero';

const HomePage = ({ selectedTheme }) => {
  return (
    <div>
      <Hero selectedTheme={selectedTheme} />
    </div>
  );
};

export default HomePage;
