import { useEffect, useState } from 'react';
import { database} from '../../../firebaseConfig';
import {
  ref, 
  query,
  onValue,
  limitToFirst,
} from 'firebase/database';
import TeacherCardList from '../../../components/Teachers/TeacherCardList/TeacherCardList';

const TeachersPage = () => {
    const [teachersList, setTeachersList] = useState([]);

    const teachersRef = query(ref(database, 'teachers'), limitToFirst(4));

    useEffect(() => {
       onValue(teachersRef, snapshot => {
          const data = snapshot.val();
          setTeachersList(data)
        console.log('data', data);
      });
    // const fetchTeachers = () => {
    //   onValue(teachersRef, snapshot => {
    //       const data = snapshot.val();
    //     //   setTeachrsList(data)
    //     console.log('data', data);
    //   });
    // };

    // fetchTeachers();
  }, []);

  // useEffect(() => {
  //     async function fetchTeachers() {
  //         try {
  //             const data = await get(child(dbRef, 'teachers') );
  //             console.log("data",data)
  //         } catch (error) {
  //             console.log("error",error)
  //         }
  //     }

  //     fetchTeachers();
  // })

    return <TeacherCardList teachersList={teachersList} />;
};

export default TeachersPage;
