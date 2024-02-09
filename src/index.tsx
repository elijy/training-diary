import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store from "./store";
import router from "./router";

const root = createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
  </ReduxProvider>
);
