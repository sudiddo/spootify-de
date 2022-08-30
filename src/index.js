import React from "react";
import ReactDOM from "react-dom";
import CoreLayout from "./common/layouts/CoreLayout";
import "./styles/_main.scss";
import { Provider } from "react-redux";
import store from "../src/store/store";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <CoreLayout>
      <Provider store={store}>
        <App />
      </Provider>
    </CoreLayout>
  </React.StrictMode>,
  document.getElementById("root")
);
