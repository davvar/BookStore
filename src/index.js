import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { mainPageReducer } from "./store/reducers/mainPageReducer";
import { BrowserRouter } from "react-router-dom";

let store = createStore(mainPageReducer);


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
