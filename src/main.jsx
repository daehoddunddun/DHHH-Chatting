import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.scss";
import { Provider } from "react-redux";
import Store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
