import express from "express";
import cors from "cors";

const badWords = ['sleep', 'play', 'games', 'movie', 'game', 'movies'];

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  /**
   * @type {string}
   */
  const newTodo = req.body;

  if(badWords.includes(newTodo.name.trim())) {
    return res.status(400).json({
      message: "Don't use bad word"
    })
  }

  todos.push({ id: todos.length + 1, ...newTodo });
  res.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
