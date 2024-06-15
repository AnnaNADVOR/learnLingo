import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import HeroSection from '../../components/HeroSection/HeroSection';
// import sprite from '../../assets/icons/sprite.svg';

const HomePage = ({ selectedTheme }) => {
  return (
    <div style={{ transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
      {/* <div
        style={{
          maxWidth: "768px",
          display: 'flex',
          justifyContent: 'flex-end',
          // paddingRight: '64px',
        }}
      >
                         <svg width="20px" height="20px">
        <use href ={`${sprite}#palette`}></use>
      </svg> Theme
      </div> */}
      <HeroSection selectedTheme={selectedTheme} />
      {/* <FeaturesSection /> */}
    </div>
  );
};

export default HomePage;
