import { Avatar, Photo, OnlineReport} from "./TeacherCardItem.styled";

const TeacherCardItem = ({ teacherData }) => {
    return (<div>
        <Avatar >
            <Photo avatar={teacherData.avatar_url}>
                <OnlineReport></OnlineReport>  
            </Photo>                      
        </Avatar>
    </div>)

}

export default TeacherCardItem; 