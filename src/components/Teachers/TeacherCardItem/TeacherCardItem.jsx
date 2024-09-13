import { useState } from 'react';
import sprite from '../../../assets/icons/sprite.svg';
import MainButton from 'components/Buttons/MainButton/MainButton';
import {
  Avatar,
  Photo,
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
  LevelItem,
  MainInfoList,
  ExperienceInfo,
  ReviewsList,
  ReviewItem,
  ReviewerIcon,
  ReviewData,
  ReviewerInfo,
  ReviewerRating,
} from './TeacherCardItem.styled';
import Modal from 'components/Modal/Modal';
import BookLessonForm from 'components/BookLessonForm/BookLessonForm';

const TeacherCardItem = ({ teacherData }) => {
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const handleReadMoreClick = () => toggleShowMore();

  const handleBookButtonClick = (event) => {
    toggleModal()
    console.log(event.target)
  }


  return (
    <>
      <Avatar>
        <Photo avatar={teacherData.avatar_url}/>  
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
          <MainInfoList>
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
              {teacherData.conditions.join(' ')}
            </MainInfo>
          </MainInfoList>
          <ReadMoreButton onClick={handleReadMoreClick}>
            {showMore ? 'Hide' : 'Read more'}
          </ReadMoreButton>
          {showMore && (
            <div>
              <ExperienceInfo>{teacherData.experience}</ExperienceInfo>
              <ReviewsList>
                {teacherData.reviews.map(reviewer => (
                  <ReviewItem
                    key={reviewer.reviewer_name + teacherData.surmane}
                  >
                    <ReviewerInfo>
                      <ReviewerIcon>
                        {reviewer.reviewer_name.slice(0, 1)}
                      </ReviewerIcon>
                      <ReviewData>
                        <SecondaryText>{reviewer.reviewer_name}</SecondaryText>
                        <ReviewerRating>
                          <svg>
                            <use href={`${sprite}#star`}></use>
                          </svg>
                          <p>{reviewer.reviewer_rating.toFixed(1)}</p>
                        </ReviewerRating>
                      </ReviewData>
                    </ReviewerInfo>
                    <p>{reviewer.comment}</p>
                  </ReviewItem>
                ))}
              </ReviewsList>
            </div>
          )}
          <LevelsList>
            {teacherData.levels.map(level => (
              <LevelItem
                key={teacherData.name + level}
              >{`#${level}`}</LevelItem>
            ))}
          </LevelsList>
        </div>

        {showMore && (
          <MainButton
            type="button"
            text="Book trial lesson"
            width="232px"
            marginLeft={0}
            onClick={handleBookButtonClick}
          />
        )}

        {showModal && <Modal closeModal={toggleModal}>
          <BookLessonForm teacherData={teacherData} />
        </Modal>}
      </TeachersInfoPanel>
    </>
  );
};

export default TeacherCardItem;
