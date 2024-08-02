import TeacherCardItem from '../TeacherCardItem/TeacherCardItem';
import { TeacherCard } from './TeacherCardsList.styled';

const TeacherCardsIList = ({ teachersList }) => {
  return (
    <ul>
      {teachersList.map(teacher => (
        <TeacherCard key={teacher.name + teacher.surname}>
          <TeacherCardItem teacherData={teacher} />
        </TeacherCard>
      ))}
    </ul>
  );
};

export default TeacherCardsIList;
