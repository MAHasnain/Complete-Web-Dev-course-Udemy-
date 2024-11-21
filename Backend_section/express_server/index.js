import express from "express";

const app = express();
app.use(express.json());

let usersData = [];
let userId = 1;

// get all users
app.get("/users", (req, res) => {
  res.status(200).send(usersData);
});

// get a user with id
app.get("/user/:id", (req, res) => {
  const user = usersData.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User Not found.");
  }
  res.status(200).send(user);
});

// register a new user
app.post("/user", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: userId++, name, email };
  usersData.push(newUser);
  res.status(201).send(newUser);
});

// update user
app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = usersData.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User Not found.");
  }
  const { name, email } = req.body;
  user.name = name;
  user.email = email;

  res.status(200).send(user);
});

// delete a user
app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  const index = usersData.findIndex((u) => u.id === parseInt(req.params.id));
  if (!index) {
    return res.status(404).send("User Not found.");
  }
  usersData.splice(index, 1);
  res.status(204).send("deleted");
});

const port = 3000;
app.listen(port, () => {
  `Server is listening at port: ${port}.`;
});
