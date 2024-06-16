import { createRoot } from "react-dom/client";
import App from "./app";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const container: any = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
