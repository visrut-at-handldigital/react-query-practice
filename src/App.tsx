import Todos from "./Todos";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.css";
import TodoForm from "./TodoForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="flex flex-col items-center justify-center h-screen">
        <TodoForm />
        <Todos />
      </section>
      <ReactQueryDevtools initialIsOpen={true} position="right" />
    </QueryClientProvider>
  );
}

export default App;
