// IMPORTING...
import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";

// APP CONFIG
const app = express();
dotenv.config();

// MIDDLEWARE

// API ROUTES

// DATABASE CONNECTION
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
Connection(username, password);

// PORT
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("\x1b[32m", `The server app is running successfully on http://localhost:${PORT}`));