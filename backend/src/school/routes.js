const { Router } = require("express");
const controller = require("./controller");
// const upload = require("express-fileupload");
// const multer = require("multer");
// const  path = require("path");

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './src/school/student-images');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });
// const upload = multer({storage: storage})


const router = Router();


router.get("/", controller.getStudents);

router.post("/", controller.createNewStudent);

router.get("/:id", controller.getStudentById);

router.delete("/:id", controller.removeStudent);

router.patch("/:id", controller.updateStudentInfo);




module.exports = router;
