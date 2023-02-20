import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// For Api Integration
import { ApolloProvider } from "@apollo/client";
import client from "./apis/apollo";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
