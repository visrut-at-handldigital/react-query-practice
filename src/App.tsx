import Todos from "./Todos";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
      <ReactQueryDevtools initialIsOpen={true} position="right" />
    </QueryClientProvider>
  );
}

export default App;
