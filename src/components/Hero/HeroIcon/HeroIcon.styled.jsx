import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background-color: var(--accent-background);
  border-radius: var(--border-radius);

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 500px;
  }

  @media screen and (min-width: 1440px) {
    width: 568px;
    height: 530px;
  }
`;

export const GirlIcon = styled.img`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  height: 250px;

  @media screen and (min-width: 768px) {
    /* transform: translate(0); */
    top: 108px;
    /* left: 90px; */
    width: 300px;
    height: 300px;
  }

  @media screen and (min-width: 1440px) {
    transform: translate(0);
    top: 80px;
    left: 114px;
    width: 339px;
    height: 339px;
  }
`;

export const MacIcon = styled.img`
  position: absolute;
  top: 230px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  height: 120px;

  @media screen and (min-width: 768px) {
    /* transform: translate(0);  */
    top: 349px;
    /* left: 104px; */
    width: 330px;
    height: 150px;
  }

  @media screen and (min-width: 1440px) {
    transform: translate(0);
    top: 354px;
    left: 104px;
    width: 361px;
    height: 176px;
  }
`;
