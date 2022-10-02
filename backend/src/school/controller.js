const { query } = require("express");
const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error){
            console.log("error in query..");
        }else {
            res.status(200).json(results.rows);
            console.log(results.rows);
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
                    res.status(200).json(results.rows);
                    console.log(results.rows);
                }
            })
        }
    });
}

const createNewStudent = (req, res) => {
    // const { name, form, email, phone, department, image, dob } = req.body;
    
    console.log("llallllall" + " " + formData);
    console.log("bababblala" + " " + formData);

    // pool.query(queries.checkStudentEmail, [email], (error, results) => {
    //     if(results.rows.length) {
    //         res.send("This email has been used by another student.");
    //         console.log("This email has been used by another student.");
    //     }else {
    //         pool.query(queries.createNewStudent, [ name, form, email, phone, department, image, dob ], (error, results) => {
    //             if(error) {
    //                 res.send("student couldn't be created.");
    //                 console.log("student couldn't be created.")
    //             }else {
    //                 res.send("new student created successfully.");
    //                 console.log("new student created successfully.");
    //             }
    //         })
    //     }
    // })
}

const removeStudent = (req, res) => {
    const id = req.params.id;

    pool.query(queries.checkForStudent, [ id ], (error, results) => {
        if(!results.rows.length) {
            console.log("student does not exist.");
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




module.exports = {
    getStudents,
    getStudentById,
    createNewStudent,
    removeStudent
}