import axios from "axios";

axios.defaults.baseURL = "https://learnlingo-98e21-default-rtdb.firebaseio.com/";

export async function fetchTeachers() {
    const { data } = await axios.get("/contacts");
    return data;
}
