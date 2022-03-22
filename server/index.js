// IMPORTING...
import express from "express";
import Connection from "./database/db.js";

// APP CONFIG
const app = express();

// DATABASE CONNECTION
Connection();

// MIDDLEWARE

// API ROUTES

// PORT
const PORT = 9000;
app.listen(PORT, () => console.log(`The server app is running successfully on http://localhost:${PORT}`));

// TEST
// const name = "code for interview"
// console.log(name);