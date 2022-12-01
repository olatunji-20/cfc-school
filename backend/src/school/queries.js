const getStudents = "SELECT * FROM students";
const checkForStudent = "SELECT s FROM students s WHERE s.id = $1";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const checkStudentEmail = "SELECT s FROM students s WHERE s.email = $1";
const createNewStudent = "INSERT INTO students (name, form, email, phone, department, image, dob) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const removeStudent = "DELETE FROM students WHERE id = $1";
const updateStudent = "UPDATE students SET $2 = $3 WHERE id = $1";



module.exports = {
    getStudents,
    checkForStudent,
    getStudentById,
    checkStudentEmail,
    createNewStudent,
    removeStudent,
    updateStudent
}