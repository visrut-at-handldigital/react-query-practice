import express from "express";
import cors from "cors";

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
  const newItem = req.body;

  console.log('req.body', req.body)
  console.log('newItem', newItem)

  todos.push({ id: todos.length + 1, ...newItem });
  res.status(201).json(newItem);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
