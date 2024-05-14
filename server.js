// server.js
const express = require("express");
const path = require("path");
const fs = require("fs");
// const collection = require("db.js");
const mongoose = require('mongoose');

const app = express();
const port = 5500

const User = require("./model/user")

app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb://127.0.0.1:27017/signin")
.then(() => {
    console.log("Databse Connected");
})
.catch((e) =>{
    console.log(e);
    console.log("Database cant be connected");
})

// Register user
app.post("/signup", async (req, res) => {
    try {
        const userData = new User(req.body);
        await userData.save();
        
        // Use path.join to construct the correct file path
        const qrcodeFilePath = path.join(__dirname, "/qrcode.html");
        let a = fs.readFileSync(qrcodeFilePath);
        
        res.send(a.toString());
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});


app.get("/signup", (req, res) => {
    let a = fs.readFileSync("/signup.html")
    res.send(a.toString())
});


app.listen(port, () => {
    console.log("App Running on port:", port);
})