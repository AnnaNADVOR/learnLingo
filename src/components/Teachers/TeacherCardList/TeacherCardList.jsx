import TeacherCardItem from '../TeacherCardItem/TeacherCardItem';

const TeacherCardIList = ({ teachersList }) => {
  return (
    <ul>
      {teachersList.map(teacher => (
        <li key={teacher.name + teacher.surname}>
          <TeacherCardItem teacherData={teacher} />
        </li>
      ))}
    </ul>
  );
};

export default TeacherCardIList;
