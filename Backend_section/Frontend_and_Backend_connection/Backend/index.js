import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello MAH's World");
});
app.get("/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "First Joke.", content: "It's first joke." },
    { id: 2, title: "second Joke.", content: "It's second joke." },
    { id: 3, title: "third Joke.", content: "It's third joke." },
    { id: 4, title: "forth Joke.", content: "It's forth joke." },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Server is lestening at port: ${port}`);
});
