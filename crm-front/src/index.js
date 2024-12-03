import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a React root and render the App component
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
