import { FormEvent, useRef } from "react";
import { createTodo } from "./api";
import { useQueryClient } from "@tanstack/react-query";

function TodoForm() {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const addTodo = async (e: FormEvent) => {
    e.preventDefault();

    if (!todoInputRef.current) {
      return;
    }

    const todo = todoInputRef.current?.value ?? "";
    const createdTodo = await createTodo(todo);

    if (createdTodo.name === todo) {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    }

    todoInputRef.current.value = "";
  };

  return (
    <form method="POST" onSubmit={addTodo}>
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
