const express = require("express");
const studentRoutes = require("./src/school/routes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("home route");
})

app.use("/api/v1/students", studentRoutes)

app.listen(3000, () => {
    console.log("server running on port 3000!")
})