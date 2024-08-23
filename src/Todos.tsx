import { useQuery } from "@tanstack/react-query";
import { getTodos } from "./api";

function Todos() {
  const { data: todos, isFetching } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  console.log(`isFetching: ${isFetching}, todos?.length: ${todos?.length}`);

  return (
    <section>
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.name}</p>
      ))}
    </section>
  );
}

export default Todos;
