const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const pool = require("./db")

//MiddleWare
app.use(cors());
app.use(express.json());

//ROUTES

//create a todo 

//get all todo

//get a todo

//update a todo

//delete a todo

app.listen(port, () => {
    console.log("The server has started on port 5000");
});