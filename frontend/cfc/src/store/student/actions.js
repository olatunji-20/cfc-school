import Axios from "axios";

export async function submitStudent(studentDetails) {
    try {
        await Axios.post("http://localhost:3000/api/v1/students", studentDetails);
        alert("SIGNUP SUCCESSFUL");
        console.log("SIGNUP SUCSESSFUL");
    } catch(error) {
        console.log(error);
        alert("errrrrrrrrrrrrror");
    }
    
}