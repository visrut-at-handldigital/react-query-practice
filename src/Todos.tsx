import { getTodos } from "./api";

import { useQuery } from "@tanstack/react-query";

function Todos() {
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return (
    <section className="flex flex-col items-center justify-center h-screen gap-y-4">
      {isLoading && (
        <span className="loading loading-spinner loading-lg"></span>
      )}

      {todos?.map((todo) => (
        <p className="text-3xl" key={todo.id}>
          {todo.name}
        </p>
      ))}
    </section>
  );
}

export default Todos;
