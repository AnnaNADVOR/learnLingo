import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 24px;
  padding-bottom: 32px;
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 450px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px;
    flex-wrap: nowrap;
    border: 1.5px dashed var(--accent);
    border-radius: var(--border-radius);
  }
`;

export const FeatureItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1.5px dashed var(--accent);
  border-radius: var(--border-radius);
  padding: 5px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 450px) {
    flex-basis: calc((100% - 10px) / 2);
    margin-bottom: 0;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    border: none;
    border-radius: 0;
    padding: 0;
    flex-basis: calc((100% - 300px) / 4);

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
  font-size: 14px;
  line-height: 1.28571;
  color: var(--main-transparent-black);

  @media screen and (min-width: 1440px) {
    width: 74px;
  }
`;
