import sprite from '../../../assets/icons/sprite.svg';
import {
  Avatar,
  Photo,
  OnlineReport,
  BookIcon,
  RatingIcon,
  TeachersInfoPanel,
  CaracteristicsPanel,
  CharacteristicsList,
  CharacteristicsItem,
  PriceInfo,
  FavoriteButton,
  TeacherName,
  SecondaryText,
  MainInfo,
  LanguagesList,
    ReadMoreButton,
    LevelsList,
  LevelItem 
} from './TeacherCardItem.styled';

const TeacherCardItem = ({ teacherData }) => {
  return (
    <>
      <Avatar>
        <Photo avatar={teacherData.avatar_url}>
          <OnlineReport></OnlineReport>
        </Photo>
      </Avatar>

      <TeachersInfoPanel>
        <CaracteristicsPanel>
          <CharacteristicsList>
            <CharacteristicsItem>
              <BookIcon>
                <use href={`${sprite}#book-open`}></use>
              </BookIcon>
              Lessons online
            </CharacteristicsItem>
            <CharacteristicsItem>
              Lessons done: {teacherData.lessons_done}
            </CharacteristicsItem>
            <CharacteristicsItem>
              <RatingIcon>
                <use href={`${sprite}#star`}></use>
              </RatingIcon>
              Rating: {teacherData.rating}
            </CharacteristicsItem>
            <CharacteristicsItem>
              Price / 1 hour:
              <PriceInfo>{teacherData.price_per_hour}$</PriceInfo>
            </CharacteristicsItem>
          </CharacteristicsList>
          <FavoriteButton>
            <svg>
              <use href={`${sprite}#heart`}></use>
            </svg>
          </FavoriteButton>
        </CaracteristicsPanel>

        <div>
          <TeacherName>
            {teacherData.name + ' ' + teacherData.surname}
          </TeacherName>
          <MainInfo>
            <SecondaryText>Speaks: </SecondaryText>
            <LanguagesList>{teacherData.languages.join(', ')}</LanguagesList>
          </MainInfo>
          <MainInfo>
            <SecondaryText>Lesson Info: </SecondaryText>
            {teacherData.lesson_info}
          </MainInfo>
          <MainInfo>
            <SecondaryText>Conditions: </SecondaryText>
            {teacherData.conditions}
          </MainInfo>
          <ReadMoreButton>Read more</ReadMoreButton>
          <LevelsList>
            {teacherData.levels.map(level => (
              <LevelItem  key={teacherData.name + level}>{`#${level}`}</LevelItem >
            ))}
          </LevelsList>
        </div>
      </TeachersInfoPanel>
    </>
  );
};

export default TeacherCardItem;

//   <svg width="40px" height="40px">
//     <use href={`${sprite}#paint`}></use>
//   </svg>
