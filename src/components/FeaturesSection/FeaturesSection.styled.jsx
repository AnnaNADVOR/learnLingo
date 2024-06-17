import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 24px;
  padding-bottom: 32px;
`;

export const FeaturesList = styled.ul`
  border: 1.5px dashed var(--accent);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;

  @media screen and (min-width: 1440px) {
    padding: 40px;

    justify-content: space-evenly;
    /* padding: 20px; */
  }
`;

export const FeatureItem = styled.li`
  display: inline-flex;
  flex-direction: column;

  /* &:not(:last-child) {
    margin-right: 10px;
  } */

  @media screen and (min-width: 1440px) {
    align-items: center;
    text-align: center;
    justify-content: center;
    &:not(:last-child) {
      margin-right: 100px;
    }
  }
`;

export const FeatureNumber = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.14286;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`;

export const FeatureCategory = styled.p`
  /* max-width: 94px; */
  font-size: 14px;
  line-height: 1.28571;
  color: var(--main-transparent-black);

  @media screen and (min-width: 1440px) {
    width: 74px;
  }
`;
