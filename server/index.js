import express from "express";
import mongoose from "mongoose";
import { User } from "./models/userModel.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/sign-up", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const newUser = User({
    email: email,
    password: password
  })
  newUser.save()
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  })
  res.send({message:"success"})
});

mongoose
  .connect("mongodb://127.0.0.1:27017/BlogAppReact")
  .then(() => {
    console.log("server connected to database");
    app.listen(PORT, () => {
      console.log(`Server running at Port:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
