import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background-color: var(--accent-background);
  border-radius: var(--border-radius);

  @media screen and (min-width: 768px) {
    width: 568px;
    height: 530px;
  }
`;

export const GirlIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 250px;
  height: 250px;

  @media screen and (min-width: 768px) {
    transform: translate(0);
    top: 80px;
    left: 114px;
    width: 339px;
    height: 339px;
  }
`;

export const MacIcon = styled.img`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -13%);
  width: 250px;
  height: 120px;

  @media screen and (min-width: 768px) {
    transform: translate(0);
    top: 354px;
    left: 104px;
    width: 361px;
    height: 176px;
  }
`;
