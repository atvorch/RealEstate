import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";

import { initStore } from "store";
import { Provider } from "react-redux";

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
