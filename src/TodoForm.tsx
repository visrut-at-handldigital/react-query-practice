import { FormEvent, useRef } from "react";
import { createTodo } from "./api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function TodoForm() {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const todoMutation = useMutation({
    mutationKey: ["todoMutation"],
    mutationFn: async (event: FormEvent) => {
      event.preventDefault();

      if (!todoInputRef.current) {
        throw new Error("Something went wrong");
      }

      const todo = todoInputRef.current?.value ?? "";

      const data = await createTodo(todo);

      if (data.name) {
        todoInputRef.current.value = "";
      }

      return data;
    },
    onSuccess: (data) => {
      if (data.name) {
        queryClient.invalidateQueries({
          queryKey: ["todos"],
        });
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <form method="POST" onSubmit={todoMutation.mutate}>
      <input
        autoFocus
        type="text"
        id="todo-id"
        name="todo-name"
        autoComplete="off"
        ref={todoInputRef}
        className="input border border-white"
      />
    </form>
  );
}

export default TodoForm;
