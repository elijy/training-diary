import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/exercises";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <Provider>
      <App />
    </Provider>
  </ReduxProvider>
);
