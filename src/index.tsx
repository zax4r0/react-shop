import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import store from "./app/lib/redux/store";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./app/utils/ScrollToTop/ScrollToTop";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();
ReactDOM.render(
  // <React.StrictMode>
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <ScrollToTop />
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </QueryClientProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
