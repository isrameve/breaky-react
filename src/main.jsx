import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ActivityProvider } from "./contexts/ActivityContext.jsx";
import { ConfigMenuProvider } from "./contexts/ConfigMenuContext.jsx";

import "./styles/normalize.css";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActivityProvider>
      <ConfigMenuProvider>
        <App />
      </ConfigMenuProvider>
    </ActivityProvider>
  </React.StrictMode>
);
