// Dependencies
const express = require("express");
const path = require("path");

// Express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Array template - Push to here - 
const tables = [
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        id: ""
    }
]

// Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// API
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

/* WRITE code to add reservations up to 5, then waitlist */
app.post("/api/tables", function (req, res) {

    const newTable = req.body;
    // more code...
    // create with table name stripped of blank spaces
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    /* Experimental Bonus: verify email is proper syntax
    const email = /\S+@\S+\.\S+/;
    let realEmail = email.test(val);
    if (realEmail) {
        newTable.email = realEmail;
    } */

    console.log(newTable);

    tables.push(newTable);

});

// Listen
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});