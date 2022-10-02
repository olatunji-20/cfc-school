const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const studentRoutes = require("./src/school/routes");
const upload = require("express-fileupload");

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload());




app.get("/", (req, res) => {
    res.send("home route");
});



app.use("/api/v1/students", studentRoutes)

app.listen(3000, () => {
    console.log("server running on port 3000!")
})