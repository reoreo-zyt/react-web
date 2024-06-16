import { createRoot } from "react-dom/client";
import App from "./app";
import React from "react";

const container = document.getElementById("root");

// 非空断言，确保 container 不是 null
if (container !== null) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Failed to find the root element");
}
