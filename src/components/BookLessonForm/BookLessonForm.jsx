import { FormInput } from 'components/AuthForm/AuthForm.styled';
import {
  TeacherAvatar,
  FormTitle,
  FormSummary,
  TeacherInfoWrapper,
  TeacherInfo,
  TeacherNameLable,
  TeacherName,
  RadioLegend,
  RadioList,
  RadioLabel,
  RadioInput,
  RadioItem,
  TextInputList,
} from './BookLessonForm.styled';
import MainButton from 'components/Buttons/MainButton/MainButton';

const BookLessonForm = ({ teacherData }) => {
  console.log(teacherData);
  return (
    <form>
      <FormTitle>Book trial lesson</FormTitle>
      <FormSummary>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </FormSummary>

      <TeacherInfoWrapper>
        <TeacherAvatar src={teacherData.avatar_url} alt="teacher avatar" />
        <TeacherInfo>
          <TeacherNameLable>Your Teacher</TeacherNameLable>
          <TeacherName>
            {teacherData.name + ' ' + teacherData.surname}
          </TeacherName>
        </TeacherInfo>
      </TeacherInfoWrapper>

      <RadioLegend>What is your main reason for learning English?</RadioLegend>
      <RadioList>
        <RadioItem>
          <RadioLabel htmlFor="career and business">
            <RadioInput
              type="radio"
              name="reason"
              value="career and business"
            />
            Career and business
          </RadioLabel>
        </RadioItem>
        <RadioItem>
          <RadioLabel htmlFor="lesson for kids">
            <RadioInput type="radio" name="reason" value="lesson for kids" />
            Lesson for kids
          </RadioLabel>
        </RadioItem>
        <RadioItem>
          <RadioLabel htmlFor="living abroad">
            <RadioInput type="radio" name="reason" value="living abroad" />
            Living abroad
          </RadioLabel>
        </RadioItem>
        <RadioItem>
          <RadioLabel htmlFor="exams and coursework">
            <RadioInput
              type="radio"
              name="reason"
              value="exams and coursework"
            />
            Exams and coursework
          </RadioLabel>
        </RadioItem>
        <RadioItem i>
          <RadioLabel htmlFor="culture, travel or hobby">
            <RadioInput
              type="radio"
              name="reason"
              value="culture, travel or hobby"
            />
            Culture, travel or hobby
          </RadioLabel>
        </RadioItem>
      </RadioList>
      <TextInputList>
        <li>
          <label htmlFor="full name">
            <FormInput
              type="text"
              placeholder="Ful Name"
              name="full name"
              required
            />
          </label>
        </li>
        <li>
          <label htmlFor="email">
            <FormInput type="email" placeholder="Email" name="email" required />
          </label>
        </li>
        <li>
          <label htmlFor="phone">
            <FormInput
              type="tel"
              placeholder="Phone Number"
              name="phone"
              required
            />
          </label>
        </li>
      </TextInputList>
      <MainButton text="Book" type="submit" />
    </form>
  );
};

export default BookLessonForm;
