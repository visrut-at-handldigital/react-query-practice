type Todo = {
  id: number;
  name: string;
};

const API_BASE_URL = process.env.API_BASE_URL;

const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`${API_BASE_URL}/todos`);
  const data = await res.json();
  return data;
};

const createTodo = async (todo: string): Promise<Todo> => {
  const res = await fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      name: todo,
    }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message);
  }

  const data = await res.json();

  return data;
};

export { getTodos, createTodo };
