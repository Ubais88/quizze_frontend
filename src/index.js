import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./store/auth";

const toastOptions = {
  position: 'top-right',
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  

  <BrowserRouter>
  <AuthProvider>
    <App />
    <Toaster  {...toastOptions} />
  </AuthProvider>
</BrowserRouter>
);
