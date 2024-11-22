import express from "express";
import "dotenv/config";
// dotenv.config()

const app = express();
app.use(express.json()); /// frontend se data get krny k liye use kiya jaata h

// app.get("/", (req, res) => {
//     res.send(`Hello MAH's`)
// });

// app.get("/twitter", (req, res) => {
//     res.send(`twitter/attaulhasnain`)
// });

let userData = [];
let nextId = 1;

// register a user
app.post("/user", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: nextId++, name, email };
  userData.push(newUser);
  res.status(201).send(newUser);
});

// get all users
app.get("/users", (req, res) => {
  res.status(200).send(userData);
});

// get a users with Id
app.get("/users/:id", (req, res) => {
  const user = userData.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User Not found");
  }
  res.status(200).send(user);
});

// update user
app.put("/user/:id", (req, res) => {
  const user = userData.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User Not found");
  }
  const { name, email } = req.body;
  user.name = name;
  user.email = email;

  res.status(200).send(user);
});

app.delete("/user/:id", (req, res) => {
  const index = userData.findIndex((ui) => ui.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("user not found.");
  }
  userData.splice(index, 1);
  return res.status(204).send("deleted");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running at port: ${port}.`);
});
