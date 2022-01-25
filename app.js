import express from "express";
import "./db";
import "./CheckBox";
import List from "./CheckBox";
const app = express();

const PORT = 4000;

const home = async (req, res) => {
  const lists = await List.find();
  console.log(lists);
  res.render("home", { lists });
};

const postHome = async (req, res) => {
  const {
    body: { username, check },
  } = req;
  await List.create({
    username,
    check: check === "on" ? true : false,
  });
  return res.redirect("/");
};

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.route("/").get(home).post(postHome);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
