import { useEffect, useState } from 'react';
import { database } from '../../firebaseConfig';

import {
  query,
  ref,
  get,
  limitToFirst,
  startAt,
  orderByKey,
} from 'firebase/database';
import TeacherCardsList from '../../components/Teachers/TeacherCardsList/TeacherCardsList';
import { TeachersSection } from './TeachersPage.styled';
import { MainContainer } from 'components/Container/Container.styled';
import MainButton from 'components/Buttons/MainButton/MainButton';

const TeachersPage = () => {
  const [teachersList, setTeachersList] = useState([]);
  const [id, setId] = useState('0');
  const [dataLength, setDataLength] = useState(0);
  const PAGE_SIZE = 4;

  const teachersRef = query(
    ref(database, 'teachers'),
    limitToFirst(PAGE_SIZE),
    orderByKey('teacher_id'),
    startAt(id)
  );

  async function fetchTeachers() {
    try {
      const result = await get(teachersRef);
      if (result.exists()) {
        const data = Object.values(result.val());
        // const filteredData = data.filter(element => Object.keys(element).length)
        setTeachersList(prevData => [...prevData, ...data]);
        setId(String(data[data.length - 1].teacher_id));
        setDataLength(data.length);
      } else {
        setDataLength(0);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleLoadMoreClick = () => {
    fetchTeachers();
  };

  function showLoadMoreButton() {
    console.log('datalength', dataLength);
    if (dataLength === PAGE_SIZE) {
      return true;
    }
  }

  const isShowButtom = showLoadMoreButton();

  return (
    // <div style={{backgroundColor: "#f8f8f8"}}>
    <TeachersSection style={{ backgroundColor: '#f8f8f8' }}>
      <MainContainer>
        <TeacherCardsList teachersList={teachersList} />
        {isShowButtom && (
          <MainButton
            text="Load more"
            width="183px"
            type="submit"
            onClick={handleLoadMoreClick}
          />
        )}
      </MainContainer>
    </TeachersSection>
    // </div>
  );
};

export default TeachersPage;
