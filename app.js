const express = require("express");
const app = express();
const api = require("./routes/api");
const connectDB = require("./db/ConnectDB");
require("dotenv").config();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  console.log(req.method);
  res.status(200).send("Welcome to the server");
});

app.use("/orders", api);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`You are listening on port ${port}`);
    });
  } catch (error) {
    console.log(error, "Problem Connecting to the database");
  }
};

start();