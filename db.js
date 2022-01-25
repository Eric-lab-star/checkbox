import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/myplayground");

const db = mongoose.connection;

db.once("open", () => console.log("connected to db"));
db.on("error", (error) => console.log(error));
