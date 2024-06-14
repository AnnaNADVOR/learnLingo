import Container from 'components/Container/Conatiner';
import {
  Section,
  FeaturesList,
  FeatureItem,
  FeatureNumber,
  FeatureCategory,
} from './FeaturesSection.styled';

const FeaturesSection = () => {
  const featuresData = [
    { number: 32000, category: 'experienced tutors' },
    { number: 300000, category: '5-star tutor reviews' },
    { number: 120, category: 'subjects taught' },
    { number: 200, category: 'tutor nationalities' },
  ];

  const delimiterComa = number => {
    let parts = [];

    while (number >= 1000) {
      let part = String(number % 1000);

      while (part.length < 3) {
        part = `0${part}`;
      }

      parts.unshift(part);
      number = Math.floor(number / 1000);
    }

    parts.unshift(String(number));

    return parts.join(',');
  };

  const capitalize = string => {
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <Section>
      <Container>
        <FeaturesList>
          {featuresData.map(feature => (
            <FeatureItem key={feature.category}>
              <FeatureNumber>{delimiterComa(feature.number)} +</FeatureNumber>
              <FeatureCategory>{capitalize(feature.category)}</FeatureCategory>
            </FeatureItem>
          ))}
        </FeaturesList>
      </Container>
    </Section>
  );
};

export default FeaturesSection;
