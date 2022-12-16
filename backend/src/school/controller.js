// const { query } = require("express");
const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error){
            console.log("error in query..");
        }else {
            res.status(200).json(results.rows);
            console.log("all students");
        }
    })
}


const getStudentById = (req, res) => {
    const id = req.params.id;

    pool.query(queries.checkForStudent, [id], (error, results) => {
        if(!results.rows.length) {
            console.log("student does not exist...");
            res.send("student does not exist...");
        }else {
            pool.query(queries.getStudentById, [id], (error, results) => {
                if(error) {
                    console.log("error in query...");
                    res.send("error in query...")
                } else {
                    res.status(200).json(results.rows[0]);
                    console.log(results.rows[0]);
                }
            })
        }
    });
}

const createNewStudent = (req, res) => {
    console.log("bababblala" + " " + req.files.picture);
    console.log("bababblala" + " " + req.files.picture.name);
    console.log("bababblala" + " " + req.body.email);

    const submittedFile = req.files.picture;

    const name = req.body.name;
    const form = req.body.form;
    const email = req.body.email;
    const phone = req.body.phone;
    const department = req.body.department;
    const image = submittedFile.name;
    const dob = req.body.dob;
    
    // console.log("llallllall" + " " + name + " " + form + " " + email + " " + phone + " " + department + " " + dob + " " + image);

    pool.query(queries.checkStudentEmail, [email], (error, results) => {
        if(results.rows.length) {
            res.send("This email has been used by another student.");
            console.log("This email has been used by another student.");
        }else {
            pool.query(queries.createNewStudent, [ name, form, email, phone, department, image, dob ], (error, results) => {
                if(error) {
                    res.send("student couldn't be created.");
                    console.log(error)
                }else {
                    res.send("new student created successfully.");
                    console.log("new student created successfully.");
                }
            })
        }
    })

    submittedFile.mv("./src/school/student-images/" + email + image, (err) => {
        if(err) {
            console.log(err);
        }else {
            console.log("file uploaded successfully.");
        }
    })



}


const removeStudent = (req, res) => {
    const id = req.params.id;

    pool.query(queries.checkForStudent, [ id ], (error, results) => {
        if(!results.rows.length) {
            console.log("student does not existttttttttt.");
            res.send("student does not exist");
        }else {
            pool.query(queries.removeStudent, [ id ], (error, results) => {
                if(error) {
                    console.log("student couldn't be removed");
                    res.send("student couldn't be removed");
                }else {
                    res.send("student successfully deleted.");
                    console.log("student successfully deleted.");
                }
            })
        }
    })
}

const updateStudentInfo = (req, res) => {
    const id = req.params.id;

    const usedId = req.body.id;
    const changed = req.body.changed;
    const newValue = req.body.value;

    console.log("changed: " + changed + " & " + "new-value: " + newValue + " & " + "user-id " + usedId);

    pool.query(queries.checkForStudent, [ usedId ], (error, results) => {
        if(!results.rows.length) {
            console.log("STUDENT NOT FOUND!!!!!.")
        } else {
            console.log("SSSEEEEEEEEEEEEEEENNNNNNN")
            pool.query(queries.updateStudent, [ usedId, newValue ], (error, results) => {
                if(error) {
                    console.log(error);
                    console.log("student info could not be updated.")
                } else {
                    console.log("student info successfully updated.")
                }
            })

        }
    })
}




module.exports = {
    getStudents,
    getStudentById,
    createNewStudent,
    removeStudent,
    updateStudentInfo
}