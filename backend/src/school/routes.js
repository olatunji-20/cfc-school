const { Router } = require("express");
const controller = require("./controller");
const router = Router();


router.get("/", controller.getStudents);

router.post("/", controller.createNewStudent);

router.get("/:id", controller.getStudentById);

router.delete("/:id", controller.removeStudent);

router.put("/:id", controller.updateStudentInfo);




module.exports = router;
