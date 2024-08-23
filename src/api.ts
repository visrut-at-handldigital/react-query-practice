type Todo = {
  id: number;
  name: string;
};

const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:5000/todos");
  const data = await res.json();
  return data;
};

const createTodo = async (todo: string): Promise<Todo> => {
  const res = await fetch("http://localhost:5000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      name: todo,
    }),
  });

  const data = await res.json();

  return data;
};

export { getTodos, createTodo };
