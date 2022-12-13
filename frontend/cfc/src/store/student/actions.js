import Axios from "axios";

export async function getStudents({ commit }) {
    try {
        const url = "http://localhost:3000/api/v1/students";
        const response = await Axios.get(url);
        commit("setStudents", response.data)
    } catch(error) {
        console.log(error)
    }
}

export async function getStudent({commit}, id) {
    try{
        let url = `http://localhost:3000/api/v1/students/${id}`;
        await Axios.get(url).then((response) => {
            let result = response.data
            commit("setStudent", result)
        })
    }catch(error) {
        console.log(error);
    }

}