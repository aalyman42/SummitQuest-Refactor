import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./app.css";
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
