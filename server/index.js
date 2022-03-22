// IMPORTING...
import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";

// APP CONFIG
const app = express();

// DATABASE CONNECTION
Connection();
dotenv.config();

// MIDDLEWARE

// API ROUTES

// PORT
const PORT = process.env.PORT || 9000;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
app.listen(PORT, () => console.log(`The server app is running successfully on http://localhost:${PORT}`));

// TEST
// const name = "code for interview"
// console.log(name);