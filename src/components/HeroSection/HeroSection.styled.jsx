import styled from '@emotion/styled';
import { MainContainer } from 'components/Container/Container.styled';

export const Section = styled.section`
  padding-top: 20px;
`;

const Container = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
  }
`;

export const HeroContainer = Container.withComponent(MainContainer);
