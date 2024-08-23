import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import * as dotenv from "dotenv";
import * as fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      ...dotenv.parse(fs.readFileSync(".env", { encoding: "utf-8" })),
    },
  },
});
