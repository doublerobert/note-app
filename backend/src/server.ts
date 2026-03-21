import "dotenv/config";
import mongoose from "mongoose";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});


const port = process.env.PORT;
mongoose.connect(process.env.MONGO_CONNECTION_STRING!).then(() => {
  console.log("Mongoose connected successfully");
  app.listen(port, () => {
    console.log("Server is running on port: " + port);
  });
});

