import React from "react";
import ReactDOM from "react-dom/client";

import FullCenterSection from "./pages/FullCenterSection";
import App from "./App";

import "./styles/main.scss";
import "./styles/normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
