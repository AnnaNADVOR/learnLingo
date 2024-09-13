import {TeacherAvatar} from './BookLessonForm.styled'

const BookLessonForm = ({ teacherData }) => {
    console.log(teacherData)
    return <form>
        <b>Book trial lesson</b>
        <p>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
        <TeacherAvatar src={teacherData.avatar_url} alt='teacher avatar' />
        <p>Your Teacher</p>
        <b>{teacherData.name + ' ' + teacherData.surname}</b>
        <b>What is your main reason for learning English?</b>
        <ul>
            <li> 
                <label htmlFor='career and business'>
                    <input type="radio" name='reason' value='career and business' />
                    Career and business
                </label>
                <label htmlFor='lesson for kids'>
                    <input type="radio" name='reason' value='lesson for kids' />
                    Lesson for kids
                </label>
                <label htmlFor='living abroad'>
                    <input type="radio" name='reason' value='living abroad' />
                    Living abroad
                </label>
                <label htmlFor='exams and coursework'>
                    <input type="radio" name='reason' value='exams and coursework' />
                    Exams and coursework
                </label>
                <label htmlFor='culture, travel or hobby'>
                    <input type="radio" name='reason' value='culture, travel or hobby' />
                    Culture, travel or hobby
                </label>                
            </li>
        </ul>
        <ul>
            <li>
                <label htmlFor='full name'>
                    <input type='text' placeholder='Ful Name' name='full name' required/>
                </label>
            </li>
            <li>
                <label htmlFor='email'>
                    <input type='email' placeholder='Email' name='email' required/>
                </label>
            </li>
            <li>
            <label htmlFor='phone'>
                    <input type='tel' placeholder='Phone Number' name='phone' required/>
                </label>
            </li>
        </ul>
    </form>
}

export default BookLessonForm; 