import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ActivityProvider } from "./contexts/ActivityContext.jsx";

import "./styles/main.scss";
import "./styles/normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActivityProvider>
      <App />
    </ActivityProvider>
  </React.StrictMode>
);
