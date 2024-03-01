import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import store from "./store";
import router from "./router";

import { baseUrl } from "./store/apis/config";

const client = new ApolloClient({
  uri: `${baseUrl}/graphql`,
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </ApolloProvider>
);
