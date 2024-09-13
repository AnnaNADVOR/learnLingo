import styled from '@emotion/styled';


export const TeacherCard = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border: 3px solid var(--accent-background);
  border-radius: 100px;
`;

export const Photo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 96px;
  height: 96px;
  border-radius: 100px;
  background-image: url(${({ avatar }) => avatar});
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    display: block;
    right: 10px;
    top: 8px;
    border-radius: 100px;
    border: 2px solid var(--primary-white);
    width: 12px;
    height: 12px;
    background-color: var(--accent-green);
  }
`;

export const BookIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: var(--primary-black);
  margin-right: 8px;
`;

export const RatingIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const TeachersInfoPanel = styled.div`

 @media screen and (min-width: 780px) {
 width: calc(100% - 168px);
  }
 
`;

export const CaracteristicsPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  @media screen and (min-width: 780px) { 
    justify-content: flex-end;
  }
`;

export const CharacteristicsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media screen and (min-width: 780px) { 
    gap: 16px;
    flex-wrap: wrap;
    flex-direction: row; 
    margin-right: 64px;
   }
`;

export const CharacteristicsItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;

  @media screen and (min-width: 780px) {
    &:not(:last-child) {
      padding-right: 16px;
      border-right: var(--secondary-border);    
    }    
  }
`;

export const PriceInfo = styled.span`
  margin-left: 4px;
  color: var(--accent-green);
`;

export const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    fill: transparent;
    stroke: var(--primary-black);
  }
`;

export const TeacherName = styled.p`
  font-size: 24px;
`;

export const SecondaryText = styled.span`
  color: var(--secondary-black);
`;

export const MainInfoList = styled.ul`
  margin-top: 32px;
`;

export const MainInfo = styled.li`
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;

export const LanguagesList = styled.span`
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const ReadMoreButton = styled.button`
  display: inline-block;
  border: none;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  font-weight: 500;
  background-color: transparent;
  padding: 0;
  margin-top: 16px;
`;

export const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 32px 0;
`;

export const LevelItem = styled.li`
  display: flex;
  align-items: center;
  border: var(--secondary-border);
  border-radius: 35px;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14286;
`;

export const ExperienceInfo = styled.p`
  font-weight: 400;
  margin-top: 16px;
`;

export const ReviewsList = styled.ul`
  margin-top: 32px;
`;

export const ReviewItem = styled.li`
  &:not(:first-of-type) {
    margin-top: 32px;
  }
`;

export const ReviewerIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--accent-background);
  border-radius: 100%;
`;

export const ReviewerRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ReviewData = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const ReviewerInfo = styled.div`
  display: inline-flex;
  gap: 12px;
  margin-bottom: 16px;
`;

