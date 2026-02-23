import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<h2 style={{color:"yellow"}}>Loading...</h2>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);