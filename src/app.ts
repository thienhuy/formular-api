import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import seasonRoute from "./routes/seasons.route";

dotenv.config();

const app = express();

app.use(cookieParser());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true, origin: "*" }));

const MONGODB_URI = process.env.DB_CONNECTION;
// Database connection
mongoose.connect(MONGODB_URI).then((res) => {
  console.log("Database connected.");
});

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

  next();
});

app.use("/season", seasonRoute);

app.get("/fail", (req, res) => {
  res.send("Failed attempt");
});

app.use("/", (req, res) => {
  res.status(200).send("welcome1");
});

app.listen(process.env.PORT, () => {
  console.log("Formular API is running. Port:" + process.env.PORT);
});
