import Axios from "axios";

export async function submitStudent({ commit }, studentDetails) {
    console.log(studentDetails);
    console.log(studentDetails.image);
    try {
        await Axios.post("http://localhost:3000/api/v1/students", studentDetails);
        alert("SIGNUP SUCCESSFUL" + " " + studentDetails.name);
        console.log("SIGNUP SUCSESSFUL" + studentDetails.email);
    } catch(error) {
        console.log(error);
        alert("errrrroooorrrr");
    }
    
}