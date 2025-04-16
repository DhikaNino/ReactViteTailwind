import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NotifierProvider } from "./NotifierContext";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <NotifierProvider>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </NotifierProvider>
);
