import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Add ApollographQl To app
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// build client variable
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
