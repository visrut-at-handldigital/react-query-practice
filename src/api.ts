type Todo = {
  id: number;
  name: string;
};

const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:5000/todos");
  const data = await res.json();
  return data;
};

export { getTodos };
