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

// export async function getStudent({ commit }, id) {
//     try {
//         const url = `http://localhost:3000/api/v1/students/${id}`;
//         const res = await Axios.get(url);
//         const response = await res.json();
//         commit("setStudent", response)
//     } catch(error) {
//         console.log(error)
//     }
// }

export async function getStudent({ commit }, id) {
    const res = await fetch(`http://localhost:3000/api/v1/students/${id}`, {
    method: "GET",
    headers: {
        'Content-type': "application/json"
    }
})
const response = await res.json();
console.log(response)
commit("setStudent", response)
}